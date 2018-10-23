import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css";

class DatePick extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      datesDiff:0,
      endDate:moment()

    };
  }
  
  render() {
    return (
       
     <React.Fragment>   
    <DatePicker className="m-3 " selected={this.state.startDate}
    onChange={this.handleChangeFirst.bind(this)}
    />
    <DatePicker className="m-3" selected={this.state.endDate}
    onChange={this.handleChangeSecond.bind(this)}
    />
    <button className="btn btn-warning m-3" onClick={()=>this.handleSubstract()}>Subtract Dates</button>
    <span className="badge badge-primary m-2">{this.state.datesDiff} days</span>
    </React.Fragment>
      

    );
  }
  handleSubstract(){
     const startDate=this.state.startDate;
     const endDate=this.state.endDate;
     const datesDiff=Math.abs(startDate.diff(endDate,'days'));
     this.setState({datesDiff:datesDiff})
  console.log(datesDiff);
  }
  handleChangeFirst(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeSecond(date) {
    this.setState({
      endDate: date
    });
  }
}

export default DatePick;
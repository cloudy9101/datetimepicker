import React from 'react';
import DateTimeBar from './datetime_picker/datetime_bar.jsx';
import DateSelector from './datetime_picker/date_selector.jsx';
import TimeSelector from './datetime_picker/time_selector.jsx';

class DateTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {calendar: []}
  }
  updateCalendar() {
    var calendar = [];
    var now = new Date();
    var selectedDate = this.props.selectedDate;
    var year = selectedDate.getFullYear(),
        month = selectedDate.getMonth(),
        date = selectedDate.getDate(),
        day = selectedDate.getDay();
    var firstDayOfMonth = (new Date(year, month, 1));
    var beginDay = firstDayOfMonth;
    beginDay.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    for(var i = 0; i < 6; i++){
      var row = [];
      for(var j = 0; j < 7; j++){
        row.push(new Date(beginDay));
        beginDay.setDate(beginDay.getDate() + 1);
      }
      calendar.push(row);
    }

    this.setState({calendar: calendar});
  }
  componentWillMount() {
    this.updateCalendar();
  }
  render() {
    return (
      <div className="DateTimePicker">
        <DateTimeBar selectedDate={this.props.selectedDate} />
        <DateSelector selectedDate={this.props.selectedDate} calendar={this.state.calendar} />
        <TimeSelector />
      </div>
    );
  }
}

module.exports = DateTimePicker;

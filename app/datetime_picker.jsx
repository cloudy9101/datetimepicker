import React from 'react';
import DateTimeBar from './datetime_picker/datetime_bar.jsx';
import DateSelector from './datetime_picker/date_selector.jsx';
import TimeSelector from './datetime_picker/time_selector.jsx';

class DateTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date(),
      calendar: []
    }
  }
  updateCalendar() {
    var calendar = [];
    var selectedDate = this.state.selectedDate;
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
  setSelectedDate(date) {
    this.setState({selectedDate: date}, function() {
      this.updateCalendar();
    });
  }
  changeMonth(step) {
    let selectedDate = this.state.selectedDate;
    let date = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + step, selectedDate.getDate());
    this.setSelectedDate(date);
  }
  prevMonth() {
    this.changeMonth(-1);
  }
  nextMonth() {
    this.changeMonth(1);
  }
  componentWillMount() {
    this.updateCalendar();
  }
  render() {
    return (
      <div className="DateTimePicker">
        <DateTimeBar selectedDate={this.state.selectedDate} prevMonth={this.prevMonth.bind(this)} nextMonth={this.nextMonth.bind(this)} />
        <DateSelector selectedDate={this.state.selectedDate} calendar={this.state.calendar} />
        <TimeSelector />
      </div>
    );
  }
}

module.exports = DateTimePicker;

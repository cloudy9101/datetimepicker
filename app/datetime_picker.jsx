import React from 'react';
import ReactDOM from 'react-dom';
import DateTimeBar from './datetime_picker/datetime_bar.jsx';
import DateSelector from './datetime_picker/date_selector.jsx';
import TimeSelector from './datetime_picker/time_selector.jsx';
import YearSelector from './datetime_picker/year_selector.jsx';
import Footer from './datetime_picker/footer.jsx';

class DateTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date(),
      calendar: [],
      displayCalendar: true,
      displayYearSelector: false,
      displayTimeSelector: false
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
        beginDay.getMonth() === month ? row.push(new Date(beginDay)) : row.push(undefined);
        beginDay.setDate(beginDay.getDate() + 1);
      }
      if(row !== new Array(7)){calendar.push(row)}
    }
    this.setState({calendar: calendar});
  }
  setSelectedDate(date) {
    this.setState({selectedDate: date}, function() {
      this.updateCalendar();
    });
  }
  changeDate(year, month, date) {
    let selectedDate = this.state.selectedDate;
    let newDate = new Date(year, month, date, selectedDate.getHours(), selectedDate.getMinutes(), selectedDate.getSeconds());
    this.setSelectedDate(newDate);
  }
  showYearSelector() {
    this.setState({displayYearSelector: true, displayCalendar: false, displayTimeSelector: false});
  }
  changeYear(year) {
    let selectedDate = this.state.selectedDate;
    let newDate = this.changeDate(year, selectedDate.getMonth(), selectedDate.getDate());
    this.setState({displayYearSelector: false, displayCalendar: true, displayTimeSelector: false});
  }
  changeMonth(step) {
    let selectedDate = this.state.selectedDate;
    this.changeDate(selectedDate.getFullYear(), selectedDate.getMonth() + step, selectedDate.getDate());
  }
  prevMonth() {
    this.changeMonth(-1);
  }
  nextMonth() {
    this.changeMonth(1);
  }
  showTimeSelector() {
    this.setState({displayTimeSelector: true, displayCalendar: false, displayYearSelector: false});
  }
  changeTime(hour, minute) {
    let selectedDate = this.state.selectedDate;
    let newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), hour, minute);
    this.setSelectedDate(newDate);
    this.setState({displayTimeSelector: false, displayCalendar: true, displayYearSelector: false});
  }
  changeHour(hour) {
    this.changeTime(hour, this.state.selectedDate.getMinutes());
  }
  changeMinute(minute) {
    this.changeTime(this.state.selectedDate.getHours(), minute);
  }
  componentWillMount() {
    this.updateCalendar();
  }
  selectDate(date) {
    this.changeDate(date.getFullYear(), date.getMonth(), date.getDate());
  }
  ok() {

  }
  cancel() {

  }
  render() {
    return (
      <div className="DateTimePicker">
        <DateTimeBar selectedDate={this.state.selectedDate} prevMonth={this.prevMonth.bind(this)} nextMonth={this.nextMonth.bind(this)} showYearSelector={this.showYearSelector.bind(this)} showTimeSelector={this.showTimeSelector.bind(this)} />
        {this.state.displayCalendar ? <DateSelector selectedDate={this.state.selectedDate} calendar={this.state.calendar} selectDate={this.selectDate.bind(this)}/> : null}
        {this.state.displayYearSelector ? <YearSelector selectedYear={this.state.selectedDate.getFullYear()} changeYear={this.changeYear.bind(this)} /> : null}
        {this.state.displayTimeSelector ? <TimeSelector changeHour={this.changeHour.bind(this)} changeMinute={this.changeMinute.bind(this)} /> : null}
        <Footer confirm={this.ok.bind(this)} cancel={this.cancel.bind(this)} />
      </div>
    );
  }
}

module.exports = DateTimePicker;

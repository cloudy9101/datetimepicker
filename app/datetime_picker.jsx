import React from 'react';
import ReactDOM from 'react-dom';
import DateTimeBar from './datetime_picker/datetime_bar.jsx';
import DateSelector from './datetime_picker/date_selector.jsx';
import TimeSelector from './datetime_picker/time_selector.jsx';
import YearSelector from './datetime_picker/year_selector.jsx';

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
  changeDate(year, month, date) {
    let selectedDate = this.state.selectedDate;
    let newDate = new Date(year, month, date, selectedDate.getHours(), selectedDate.getMinutes(), selectedDate.getSeconds());
    this.setSelectedDate(newDate);
  }
  showYearSelector() {
    const year = this.state.selectedDate.getFullYear();
    ReactDOM.render(<YearSelector selectedYear={year} changeYear={this.changeYear.bind(this)} />, document.getElementById('year-selector'));
  }
  changeYear(year) {
    let selectedDate = this.state.selectedDate;
    let newDate = this.changeDate(year, selectedDate.getMonth(), selectedDate.getDate());
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
  componentWillMount() {
    this.updateCalendar();
  }
  render() {
    return (
      <div className="DateTimePicker">
        <DateTimeBar selectedDate={this.state.selectedDate} prevMonth={this.prevMonth.bind(this)} nextMonth={this.nextMonth.bind(this)} showYearSelector={this.showYearSelector.bind(this)} />
        <DateSelector selectedDate={this.state.selectedDate} calendar={this.state.calendar} />
        <div id='year-selector'></div>
        <TimeSelector />
      </div>
    );
  }
}

module.exports = DateTimePicker;

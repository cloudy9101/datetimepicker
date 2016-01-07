import React from 'react';

class DateTimeBar extends React.Component {
  render() {
    const date = this.props.selectedDate;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat']
    return (
      <div className="DateTimeBar">
        <div className="prev-month" onClick={this.props.prevMonth}><a href='javascript:;'><i className="fa fa-chevron-left"></i></a></div>
        <div className="next-month" onClick={this.props.nextMonth}><a href='javascript:;'><i className="fa fa-chevron-right"></i></a></div>
        <div className="time-bar">
          <span> {weekdays[date.getDay()]}</span>
          <span> {months[date.getMonth()]}</span>
          <span> {date.getDate()}</span>
          <span onClick={this.props.showYearSelector}> <a href='javascript:;'>{date.getFullYear()}</a></span>
          <span onClick={this.props.showTimeSelector}> <a href='javascript:;'>{date.getHours()}:{date.getMinutes()}</a></span>
        </div>
      </div>
    );
  }
}

module.exports = DateTimeBar;

import React from 'react';

class DateTimeBar extends React.Component {
  addZero(n) {
    return n < 10 ? '0' + n : n;
  }
  render() {
    const date = this.props.selectedDate;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat']
    return (
      <div className="DateTimeBar">
        <div className="prev-month" onClick={this.props.prevMonth}><a href='javascript:;'><i className="material-icons">chevron_left</i></a></div>
        <div className="next-month" onClick={this.props.nextMonth}><a href='javascript:;'><i className="material-icons">chevron_right</i></a></div>
        <div className="time-bar">
          <span> {weekdays[date.getDay()]}</span>
          <span> {this.addZero(months[date.getMonth()])}</span>
          <span> {this.addZero(date.getDate())}</span>
          <span onClick={this.props.showYearSelector}> <a href='javascript:;'>{date.getFullYear()}</a></span>
          <span onClick={this.props.showTimeSelector}> <a href='javascript:;'>{this.addZero(date.getHours())}:{this.addZero(date.getMinutes())}</a></span>
        </div>
      </div>
    );
  }
}

module.exports = DateTimeBar;

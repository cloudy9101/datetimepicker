import React from 'react';

class DateTimeBar extends React.Component {
  render() {
    const date = this.props.selectedDate;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
      <div className="DateTimeBar">
        <span onClick={this.props.prevMonth}><a href='javascript:;'>&#60;</a></span>
        <span>{months[date.getMonth()]}</span>
        <span> {date.getDate()}</span>
        <span onClick={this.props.showYearSelector}> {date.getFullYear()}</span>
        <span> {date.getHours()}:{date.getMinutes()}</span>
        <span onClick={this.props.nextMonth}><a href='javascript:;'>&#62;</a></span>
      </div>
    );
  }
}

module.exports = DateTimeBar;

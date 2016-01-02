import React from 'react';

class DateTimeBar extends React.Component {
  render() {
    return (
      <div className="DateTimeBar">
        <span onClick={this.props.prevMonth}><a href='javascript:;'>&#60;</a></span>
        {this.props.selectedDate.toString()}
        <span onClick={this.props.nextMonth}><a href='javascript:;'>&#62;</a></span>
      </div>
    );
  }
}

module.exports = DateTimeBar;

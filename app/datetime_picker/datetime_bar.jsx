import React from 'react';

class DateTimeBar extends React.Component {
  render() {
    return (
      <div className="DateTimeBar">
        {this.props.selectedDate.toString()}
      </div>
    );
  }
}

module.exports = DateTimeBar;

import React from 'react';

class DateRow extends React.Component {
  render() {
    var rows = [];
    var keys = [0, 1, 2, 3, 4, 5, 6];
    var weekdays = this.props.weekdays;

    keys.forEach(function(key) {
      rows.push(<td key={weekdays[key].toString()}>{weekdays[key].getDate()}</td>); 
    });

    return (
      <tr className="DateRow">
        {rows}
      </tr>
    );
  }
}

module.exports = DateRow;

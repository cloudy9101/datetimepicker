import React from 'react';

class DateRow extends React.Component {
  render() {
    let rows = [];
    const $this = this;
    const keys = [0, 1, 2, 3, 4, 5, 6];
    const weekdays = this.props.weekdays;

    keys.forEach(function(key) {
      let date = typeof weekdays[key] !== 'undefined' ? weekdays[key].getDate() : '';
      rows.push(<td className="date" key={key} onClick={$this.props.selectDate.bind($this, weekdays[key])}><a href='javascript:;'>{date}</a></td>); 
    });

    return (
      <tr className="DateRow">
        {rows}
      </tr>
    );
  }
}

module.exports = DateRow;

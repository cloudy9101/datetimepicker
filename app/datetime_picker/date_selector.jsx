import React from 'react';
import DateRow from './date_row.jsx';

class DateSelector extends React.Component {
  render() {
    const keys = [0, 1, 2, 3, 4, 5, 6];
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let ths = [];

    keys.forEach(function(key) {
      ths.push(<th key={key}>{weekdays[key]}</th>);
    });

    const calendar = this.props.calendar;
    let rows = [];
    const $this = this;
    calendar.forEach(function(ro) {
      rows.push(<DateRow weekdays={ro} selectDate={$this.props.selectDate} />);
    });
    
    return (
      <div className="DateSelector">
        <table>
          <thead>
            <tr>
              {ths}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = DateSelector;

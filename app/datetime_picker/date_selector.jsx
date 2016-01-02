import React from 'react';
import DateRow from './date_row.jsx';

class DateSelector extends React.Component {
  render() {
    var keys = [0, 1, 2, 3, 4, 5, 6];
    var weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    var ths = [];

    keys.forEach(function(key) {
      ths.push(<th key={key}>{weekdays[key]}</th>);
    });

    var calendar = this.props.calendar;
    var rows = [];
    calendar.forEach(function(ro) {
      rows.push(<DateRow weekdays={ro} />);
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

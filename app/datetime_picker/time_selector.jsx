import React from 'react';

class TimeSelector extends React.Component {
  render() {
    const hours = Array(24).join(0).split(0).map(Number.call, Number);
    const minutes = Array(60).join(0).split(0).map(Number.call, Number);
    let hRows = [];
    let mRows = [];
    let $this = this;
    hours.forEach(function(i){
      hRows.push(<li key={i} onClick={$this.props.changeHour.bind($this, i)}><a href='javascript:;'>{i}</a></li>);
    });
    minutes.forEach(function(i){
      mRows.push(<li key={i} onClick={$this.props.changeMinute.bind($this, i)}><a href='javascript:;'>{i}</a></li>);
    });
    return (
      <div className="TimeSelector">
        <ul>
          {hRows}
        </ul>
        <ul>
          {mRows}
        </ul>
      </div>
    );
  }
}

module.exports = TimeSelector;

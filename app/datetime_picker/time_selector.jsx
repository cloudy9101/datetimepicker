import React from 'react';

class TimeSelector extends React.Component {
  render() {
    const hours = Array(24).join(0).split(0).map(Number.call, Number);
    const minutes = Array(60).join(0).split(0).map(Number.call, Number);
    let hRows = [];
    let mRows = [];
    let $this = this;
    hours.forEach(function(i){
      hRows.push(<div key={i} onClick={$this.props.changeHour.bind($this, i)}><a href='javascript:;'>{i}</a></div>);
    });
    minutes.forEach(function(i){
      mRows.push(<div key={i} onClick={$this.props.changeMinute.bind($this, i)}><a href='javascript:;'>{i}</a></div>);
    });
    return (
      <div className="TimeSelector">
        <div className="hour">
          <div>Hour</div>
          {hRows}
        </div>
        <div className="minute">
          <div>Minute</div>
          {mRows}
        </div>
      </div>
    );
  }
}

module.exports = TimeSelector;

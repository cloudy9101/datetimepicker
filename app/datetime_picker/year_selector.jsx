import React from 'react';

class YearSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      year: 1900
    }
  }
  componentWillMount() {
    const year = this.props.selectedYear;
    const years = this.getYears(year);
    this.setState({year: year, years: years});
  }
  getYears(year) {
    return [year - 2, year - 1, year, year + 1, year + 2];
  }
  changeYear(step) {
    const year = this.state.year + step;
    this.setState({year: year, years: this.getYears(year)});
  }
  prevYear() {
    this.changeYear(-1);
  }
  nextYear() {
    this.changeYear(1);
  }
  setYear(year) {
    this.setState({year: year, years: this.getYears(year)}, function() {
      this.props.changeYear(this.state.year);
    });
  }
  render() {
    const $this = this;
    let years = [];
    this.state.years.forEach(function(year) {
      years.push(<li onClick={$this.setYear.bind($this, year)}>{year}</li>);
    });
    return (
      <ul>
        <li onClick={this.prevYear.bind(this)}><a href='javascript:;'>prev</a></li>
        {years}
        <li onClick={this.nextYear.bind(this)}><a href='javascript:;'>next</a></li>
      </ul>
    );
  }
}

module.exports = YearSelector;

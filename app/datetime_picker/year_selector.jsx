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
years.push(<div onClick={$this.setYear.bind($this, year)}><a href='javascript:;'>{year}</a></div>);
    });
    return (
      <div className='YearSelector'>
        <div onClick={this.prevYear.bind(this)}><a href='javascript:;'><i className='fa fa-chevron-up'></i></a></div>
        {years}
        <div onClick={this.nextYear.bind(this)}><a href='javascript:;'><i className='fa fa-chevron-down'></i></a></div>
      </div>
    );
  }
}

module.exports = YearSelector;

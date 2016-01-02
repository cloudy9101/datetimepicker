'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from './datetime_picker.jsx';

var selectedDate = new Date();

index();

function index() {
  ReactDOM.render(<DateTimePicker selectedDate={selectedDate} />, document.getElementById('datetime-picker'));  
}

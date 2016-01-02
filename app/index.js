'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from './datetime_picker.jsx';

index();

function index() {
  ReactDOM.render(<DateTimePicker />, document.getElementById('datetime-picker'));  
}

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { TimePicker } from 'smart-webcomponents-react/timepicker';

const App = () => {
  return (
    <div>
      <p>Select hour and the view will be switched to minutes view</p>
      <br />
      <TimePicker autoSwitchToMinutes />
    </div>
  );
};

export default App;

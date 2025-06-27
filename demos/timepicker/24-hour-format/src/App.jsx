import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { TimePicker } from 'smart-webcomponents-react/timepicker';

const App = () => {
  return (
    <div>
      <TimePicker format="24-hour" />
    </div>
  );
};

export default App;

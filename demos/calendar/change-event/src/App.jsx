import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const [eventLog, setEventLog] = useState('');

  const handleChange = (event) => {
    setEventLog(event.detail.value.toString());
  };

  return (
    <div>
      <Calendar onChange={handleChange} id="calendar"></Calendar>
      <div>
        <h3>Event Log:</h3>
        <div id="eventLog">{eventLog}</div>
      </div>
    </div>
  );
};

export default App;

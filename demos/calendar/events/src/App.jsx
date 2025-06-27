import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const log = useRef(null);

  const handleChange = (event) => {
    if (log.current) {
      log.current.innerHTML = event.detail.value.toString();
    }
  };

  return (
    <div>
      <Calendar id="calendar" onChange={handleChange}></Calendar>
      <div className="options">
        <div className="caption">Events</div>
        <div className="option" ref={log} id="log"></div>
      </div>
    </div>
  );
};

export default App;

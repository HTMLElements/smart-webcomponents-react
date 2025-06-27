import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const calendar = useRef(null);

  return (
    <div>
      <Calendar id="calendar" weekNumbers ref={calendar}></Calendar>
    </div>
  );
};

export default App;

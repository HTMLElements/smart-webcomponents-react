import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  return (
    <div>
      <Calendar id="calendar" rightToLeft locale="he"></Calendar>
    </div>
  );
};

export default App;

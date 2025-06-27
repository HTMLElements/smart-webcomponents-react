import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  return (
    <div>
      <Calendar calendarMode="classic"></Calendar>
    </div>
  );
};

export default App;

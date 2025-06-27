import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const calendar = useRef(null);

  useEffect(() => {
    const template = document.createElement('template');

    template.id = 'headerTemplate';
    template.innerHTML = '<div class="smart-date-element"><span>{{date}}</span></div>';

    document.body.appendChild(template);

    if (calendar.current) {
      calendar.current.headerTemplate = template.id;
    }
  }, []);

  return (
    <div>
      <Calendar
        ref={calendar}
        className="custom-header"
        selectionMode="one"
        selectedDates={["2017-08-17"]}
      />
    </div>
  );
};

export default App;

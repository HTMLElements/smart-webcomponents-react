import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const calendar = useRef(null);
  const [weeksCount, setWeeksCount] = useState(2);

  useEffect(() => {
    if (calendar.current) {
      calendar.current.weeks = weeksCount;
      calendar.current.nativeElement.style.height = 120 + 32 * (weeksCount - 1) + 'px';
    }
  }, [weeksCount]);

  const handleChange = (event) => {
    let weeks = parseInt(event.target.value);
    if (isNaN(weeks)) return;
    if (weeks < 1) weeks = 1;
    if (weeks > 6) weeks = 6;
    setWeeksCount(weeks);
  };

  return (
    <div>
      <Calendar ref={calendar} weeks={weeksCount}></Calendar>
      <div className="options">
        <div className="caption">Number of weeks (1-6)</div>
        <div className="option">
          <input
            className="text-input"
            value={weeksCount}
            onChange={handleChange}
            id="weeksCountSelector"
            type="number"
            min="1"
            max="6"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

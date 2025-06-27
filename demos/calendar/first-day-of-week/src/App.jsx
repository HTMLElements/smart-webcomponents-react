import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const calendar = useRef(null);
  const log = useRef(null);

  const dataSource = [
    { value: 0, label: "Sunday" },
    { value: 1, label: "Monday" },
    { value: 2, label: "Tuesday" },
    { value: 3, label: "Wednesday" },
    { value: 4, label: "Thursday" },
    { value: 5, label: "Friday" },
    { value: 6, label: "Saturday" }
  ];

  const handleChange = (event) => {
    if (calendar.current) {
      calendar.current.firstDayOfWeek = event.detail.index;
    }
    if (log.current) {
      log.current.innerHTML = 'First day of week is ' + event.detail.label;
    }
  };

  return (
    <div>
      <Calendar ref={calendar}></Calendar>
      <div className="options">
        <div className="option">Select first day of week</div>
        <div className="option">
          <DropDownList
            onChange={handleChange}
            dataSource={dataSource}
            selectedIndexes={[0]}
            id="dayOfWeekSelector"
          ></DropDownList>
        </div>
        <div className="option">
          <div ref={log} id="log"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

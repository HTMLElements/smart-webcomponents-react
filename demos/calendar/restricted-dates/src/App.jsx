import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useState } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const calendar = useRef(null);
  const [restrictedDatesFormatted, setRestrictedDatesFormatted] = useState([]);

  const formatDate = (date) => {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  useEffect(() => {
    if (calendar.current) {
      const restrictedDates = calendar.current.restrictedDates || [];
      const formattedDates = restrictedDates.map(d => formatDate(new Date(d)));
      setRestrictedDatesFormatted(formattedDates);
    }
  }, []);

  return (
    <div>
      <Calendar
        ref={calendar}
        id="calendar"
        selectedDates={["2019-7-4"]}
        restrictedDates={["2019-7-25", "2019-7-15", "2019-1-1"]}
      ></Calendar>

      <div className="options">
        <div className="caption">Restricted Dates</div>
        <div className="option" id="restrictedDates">
          {restrictedDatesFormatted.map((date, index) => (
            <div key={index}>{date}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

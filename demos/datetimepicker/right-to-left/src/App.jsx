import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

const App = () => {
  const datetimepickerRef = useRef(null);

  useEffect(() => {
    const dateTimePicker = datetimepickerRef.current;
    if (dateTimePicker) {
      const messages = {
        ...dateTimePicker.messages,
        he: {
          now: 'עכשיו',
          dateTabLabel: 'תאריך',
          timeTabLabel: 'זמן'
        }
      };
      dateTimePicker.messages = messages;
      dateTimePicker.placeholder = 'הזן תאריך';
    }
  }, []);

  return (
    <div>
      <div className="demo-description">
        DateTimePicker Web Component with enabled Right to Left Layout
      </div>
      <DateTimePicker
        ref={datetimepickerRef}
        dropDownPosition="bottom"
        dropDownDisplayMode="default"
        calendarButton
        rightToLeft
        locale="he"
      />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

const App = () => {
  const pickerUnspecifiedRef = useRef(null);
  const pickerUTCRef = useRef(null);
  const pickerLocalRef = useRef(null);

  useEffect(() => {
    const { DateTime, TimeSpan } = window.smartUtilities;

    const value = new DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time');
    const interval = new TimeSpan(1, 0, 0);

    if (pickerUnspecifiedRef.current) {
      pickerUnspecifiedRef.current.value = value;
      pickerUnspecifiedRef.current.interval = interval;
    }

    if (pickerUTCRef.current) {
      pickerUTCRef.current.value = value;
      pickerUTCRef.current.interval = interval;
    }

    if (pickerLocalRef.current) {
      pickerLocalRef.current.value = value;
      pickerLocalRef.current.interval = interval;
    }
  }, []);

  return (
    <div>
      <p>
        Original value of all DateTimePickers: <code>2019-08-17 11:24:15:350:111:100:009:078:087:765:012 -06:00</code> (Central Standard Time)
      </p>
      <p>displayKind: 'unspecified'</p>
      <DateTimePicker
        ref={pickerUnspecifiedRef}
        calendarButton
        displayKind="unspecified"
        formatString="dd-MMM-yy HH:mm:ss.fff zzz"
        enableMouseWheelAction
        spinButtons
        spinButtonsPosition="left"
      />

      <p>displayKind: 'UTC'</p>
      <DateTimePicker
        ref={pickerUTCRef}
        calendarButton
        displayKind="UTC"
        formatString="dd-MMM-yy HH:mm:ss.fff zzz"
        enableMouseWheelAction
        spinButtons
        spinButtonsPosition="left"
      />

      <p>displayKind: 'local'</p>
      <DateTimePicker
        ref={pickerLocalRef}
        calendarButton
        displayKind="local"
        formatString="dd-MMM-yy HH:mm:ss.fff zzz"
        enableMouseWheelAction
        spinButtons
        spinButtonsPosition="left"
      />
    </div>
  );
};

export default App;

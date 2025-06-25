import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from 'react';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const datetimepickerRef = useRef(null);

  const handleChangeMode = useCallback((mode) => {
    if (datetimepickerRef.current) {
      datetimepickerRef.current.dropDownDisplayMode = mode;
    }
  }, []);

  return (
    <div>
      <DateTimePicker
        ref={datetimepickerRef}
        id="dateTimePicker"
        calendarButton
        dropDownDisplayMode="default"
        dropDownPosition="center-bottom"
        enableMouseWheelAction
        spinButtons
        spinButtonsPosition="left"
      />

      <div className="options">
        <div className="caption">Display Mode</div>
        <div className="option">
          <RadioButton checked onChange={() => handleChangeMode('default')}>
            Default
          </RadioButton>
          <RadioButton onChange={() => handleChangeMode('classic')}>
            Classic (NI theme)
          </RadioButton>
          <RadioButton onChange={() => handleChangeMode('calendar')}>
            Calendar only
          </RadioButton>
          <RadioButton onChange={() => handleChangeMode('timePicker')}>
            Time picker only
          </RadioButton>
          <RadioButton onChange={() => handleChangeMode('auto')}>
            Auto (based on <strong>formatString</strong>)
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

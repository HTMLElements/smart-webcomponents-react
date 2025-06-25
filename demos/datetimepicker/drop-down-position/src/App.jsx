import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const datetimepickerRef = useRef(null);

  const setDropDownPosition = useCallback((position) => {
    if (datetimepickerRef.current) {
      datetimepickerRef.current.dropDownPosition = position;
    }
  }, []);

  const setCalendarButtonPosition = useCallback((position) => {
    if (datetimepickerRef.current) {
      datetimepickerRef.current.calendarButton = position !== 'none';
      datetimepickerRef.current.calendarButtonPosition = position !== 'none' ? position : undefined;
    }
  }, []);

  return (
    <div>
      <DateTimePicker
        ref={datetimepickerRef}
        calendarButton
        calendarButtonPosition="right"
        enableMouseWheelAction
        dropDownPosition="bottom"
      />

      <div className="options">
        <div className="caption">Dropdown Position:</div>
        <div className="option">
          <RadioButton checked onChange={() => setDropDownPosition('bottom')}>Bottom</RadioButton>
          <RadioButton onChange={() => setDropDownPosition('top')}>Top</RadioButton>
          <br />
          <RadioButton onChange={() => setDropDownPosition('overlay-bottom')}>Overlay bottom</RadioButton>
          <RadioButton onChange={() => setDropDownPosition('overlay-center')}>Overlay center</RadioButton>
          <RadioButton onChange={() => setDropDownPosition('overlay-top')}>Overlay top</RadioButton>
          <br />
          <RadioButton onChange={() => setDropDownPosition('center-bottom')}>Center bottom</RadioButton>
          <RadioButton onChange={() => setDropDownPosition('center-top')}>Center top</RadioButton>
        </div>

        <br />
        <div className="caption">Calendar Button Position:</div>
        <div className="option">
          <RadioButton onChange={() => setCalendarButtonPosition('left')}>Left</RadioButton>
          <RadioButton checked onChange={() => setCalendarButtonPosition('right')}>Right</RadioButton>
          <RadioButton onChange={() => setCalendarButtonPosition('none')}>None</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

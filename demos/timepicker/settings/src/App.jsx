import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

const App = () => {
  const timepicker = useRef(null);
  const valueLog = useRef(null);

  const handleTimePickerChange = (event) => {
    const value = event.detail.value;
    if (valueLog.current && value instanceof Date) {
      valueLog.current.innerHTML = value.getHours() + ':' + value.getMinutes();
    }
  };

  const handleHoursChange = () => {
    if (timepicker.current) {
      timepicker.current.selection = 'hour';
    }
  };

  const handleMinutesChange = () => {
    if (timepicker.current) {
      timepicker.current.selection = 'minute';
    }
  };

  const handleMinuteInterval1Change = () => {
    if (timepicker.current) {
      timepicker.current.minuteInterval = 1;
    }
  };

  const handleMinuteInterval5Change = () => {
    if (timepicker.current) {
      timepicker.current.minuteInterval = 5;
    }
  };

  const handleMinuteInterval15Change = () => {
    if (timepicker.current) {
      timepicker.current.minuteInterval = 15;
    }
  };

  const handleSetHoursClick = () => {
    if (timepicker.current) {
      timepicker.current.setHours(20);
    }
  };

  const handleSetMinutesClick = () => {
    if (timepicker.current) {
      timepicker.current.setMinutes(12);
    }
  };

  const handleSetNowClick = () => {
    if (timepicker.current) {
      timepicker.current.value = new Date();
    }
  };

  return (
    <div>
      <div>
        <TimePicker
          ref={timepicker}
          id="timePicker"
          format="24-hour"
          onChange={handleTimePickerChange}
        ></TimePicker>
      </div>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <div className="container">
            <p>Selection</p>
            <RadioButton checked groupName="selection" onChange={handleHoursChange}>Hours</RadioButton>
            <RadioButton groupName="selection" onChange={handleMinutesChange}>Minutes</RadioButton>
          </div>
          <div className="container">
            <p>Minute interval</p>
            <RadioButton checked groupName="minuteInterval" onChange={handleMinuteInterval1Change}>1</RadioButton>
            <RadioButton groupName="minuteInterval" onChange={handleMinuteInterval5Change}>5</RadioButton>
            <RadioButton groupName="minuteInterval" onChange={handleMinuteInterval15Change}>15</RadioButton>
          </div>
          <br />
          <Button id="setHours" className="demoButton" onClick={handleSetHoursClick}>Set hours to 20</Button>
          <Button id="setMinutes" className="demoButton" onClick={handleSetMinutesClick}>Set minutes to 12</Button>
          <Button id="setNow" className="demoButton" onClick={handleSetNowClick}>Set to now</Button>
          <br />
          <br />
          <div>Current value: <strong ref={valueLog} id="valueLog"></strong></div>
        </div>
      </div>
    </div>
  );
};

export default App;

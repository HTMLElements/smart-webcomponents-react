import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const datetimepickerRef = useRef(null);

  const handleChange = (event) => {
    if (datetimepickerRef.current) {
      datetimepickerRef.current.formatString = event.detail.value;
    }
  };

  return (
    <div>
      <DateTimePicker
        ref={datetimepickerRef}
        className="demoDateTimePickerWide"
        calendarButton
        enableMouseWheelAction
        spinButtons
        spinButtonsPosition="left"
      />
      <div className="options">
        <div className="caption">Formats</div>
        <div className="option">
          <DropDownList id="chooseFormat" onChange={handleChange}>
            <ListItem value="dd-MMM-yy HH:mm:ss.fff" selected>default pattern</ListItem>
            <ListItem value="d">short date pattern</ListItem>
            <ListItem value="D">long date pattern</ListItem>
            <ListItem value="t">short time pattern</ListItem>
            <ListItem value="T">long time pattern</ListItem>
            <ListItem value="f">long date, short time pattern</ListItem>
            <ListItem value="F">long date, long time pattern</ListItem>
            <ListItem value="M">month/day pattern</ListItem>
            <ListItem value="Y">month/year pattern</ListItem>
            <ListItem value="FP">full precision</ListItem>
            <ListItem value="FT">full precision time</ListItem>
            <ListItem value="PP">processor precision</ListItem>
            <ListItem value="PT">processor precision time</ListItem>
            <ListItem value="dddd-MMMM-yyyy">custom</ListItem>
          </DropDownList>
        </div>
      </div>
    </div>
  );
};

export default App;

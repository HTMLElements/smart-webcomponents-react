import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

const App = () => {
  useEffect(() => {
    // Any initialization logic can go here
  }, []);

  return (
    <div>
      <section>
        <h2>DateTimePicker</h2>
        <br />
        <div>
          <p>
            Pickers provide a simple way to select a single value from a pre-determined
            set. Users can also input a Date Time value by using the DateTimePicker's
            input field.
          </p>
        </div>
      </section>

      <section id="usage">
        <br />
        <h2>Usage</h2>
        <div className="module">
          <p>On mobile, pickers are best suited for display in a confirmation dialog.</p>
          <p><strong>Tiles</strong> hold content, and can vary in height within a list.</p>
        </div>
      </section>

      <section id="datePickers">
        <h2>Date pickers</h2>
        <br />
        <div className="module">
          <p>A dialog picker is used to select a single date on desktop or mobile.</p>
          <br />
          <p>
            The selected day is indicated by a filled circle. The current day is indicated
            by a different color and type weight.
          </p>
          <br />
          <p>
            Swipe left to right to navigate through the months. Touch the year in
            the title bar to transition to the year view.
          </p>
          <br />
          <DateTimePicker
            dropDownPosition="bottom"
            calendarButton
          />
          <br /><br /><br /><br />
          <h2>Time Picker</h2>
          <DateTimePicker
            calendarButton
            dropDownPosition="bottom"
            dropDownDisplayMode="timePicker"
          />
        </div>
      </section>
    </div>
  );
};

export default App;

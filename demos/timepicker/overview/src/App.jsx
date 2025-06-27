import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

const App = () => {
  useEffect(() => {
    // Create and append the template with buttons once on mount
    const template = document.createElement('template');
    template.id = 'templateWithButtons';
    template.innerHTML = `
      <smart-button class="flat">CANCEL</smart-button>
      <smart-button class="flat">OK</smart-button>
    `;
    document.body.appendChild(template);

    // Cleanup: remove the template when component unmounts
    return () => {
      const existingTemplate = document.getElementById('templateWithButtons');
      if (existingTemplate) {
        existingTemplate.remove();
      }
    };
  }, []);

  return (
    <div className="smart-demo-container">
      <div></div>
      <div id="materialPicker">
        <section id="timePickers">
          <h1>Time pickers</h1>
          <div className="module">
            <p>
              A time picker adjusts to a user’s preferred time setting, i.e. the 12-hour
              or 24-hour format.
            </p>
            <p>A dialog picker is used to select a single time (hours:minutes) on mobile.</p>
            <p>
              The selected time is indicated by the filled circle at the end of the
              clock hand.
            </p>
            <p>
              Tap between the hour and minute label in the title bar to switch between
              the hour or minute view. Additionally, tap on the AM/PM label in the title
              bar to switch between AM or PM (in 12-hour clock mode).
            </p>
          </div>
          <div className="module">
            <div>
              <TimePicker footer footerTemplate="templateWithButtons"></TimePicker>
            </div>
          </div>
          <br />
          <br />
          <div className="module">
            <div>
              <TimePicker footer footerTemplate="templateWithButtons" selection="minute"></TimePicker>
            </div>
          </div>
          <div className="module">
            <br />
            <p>
              The picker has a landscape view as well to suite the different screen
              orientations.
            </p>
          </div>
          <div className="module">
            <TimePicker view="landscape" footer footerTemplate="templateWithButtons"></TimePicker>
          </div>
          <br />
          <br />
          <div className="module">
            <TimePicker view="landscape" footer footerTemplate="templateWithButtons" selection="minute"></TimePicker>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

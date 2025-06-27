import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
  const calendarRef = useRef(null);

  const handleCancel = () => {
    // Example: clear selection or any other logic
    if (calendarRef.current) {
      calendarRef.current.clearSelection();
    }
  };

  const handleOk = () => {
    // Example: alert selected date(s)
    if (calendarRef.current) {
      const selected = calendarRef.current.selectedDates;
      alert("Selected dates: " + selected.join(", "));
    }
  };

  return (
    <div className="smart-demo-container">
      <div id="materialPicker">
        <section>
          <h2>smartCalendar</h2>
          <div>
            <h2>
              Allow users to enter dates easily and visually. You can customize date
              formats, language, layout, animations, selection modes and much more
              with the smartCalendar.
            </h2>
            <div className="module"></div>
          </div>
        </section>
        <section id="datePickers">
          <h2>Date pickers</h2>
          <div className="module">
            <p>
              The selected day is indicated by a filled circle. The current day is
              indicated by a different color and type weight.
            </p>
            <p>
              Swipe left to right to navigate through the months. Touch the year in
              the title bar to transition to the year view.
            </p>
          </div>
          <div className="module">
            <div>
              <Calendar
                ref={calendarRef}
                selectionMode="one"
                view="portrait"
                hideOtherMonthDays
                viewSections={["title", "header", "footer"]}
                displayModeView="list"
                // remove footerTemplate to use custom footer
              ></Calendar>
              <div style={{ marginTop: '10px', textAlign: 'right' }}>
                <button
                  className="material flat"
                  onClick={handleCancel}
                  style={{ marginRight: '10px' }}
                >
                  CANCEL
                </button>
                <button className="material flat" onClick={handleOk}>
                  OK
                </button>
              </div>
            </div>
            <br />
            <p>Date and year picker: portrait, month display mode</p>
          </div>
          {/* ... you can do the same for other Calendar instances if needed */}
        </section>
      </div>
    </div>
  );
};

export default App;

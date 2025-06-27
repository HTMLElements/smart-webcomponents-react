import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
    const calendarRef = useRef(null);
    const inputMinRef = useRef(null);
    const inputMaxRef = useRef(null);

    const handleChange = (property, event) => {
        if (calendarRef.current) {
            calendarRef.current[property] = event.target.value;
        }
    };

    const init = () => {
        if (inputMinRef.current) inputMinRef.current.value = '2018-7-1';
        if (inputMaxRef.current) inputMaxRef.current.value = '2019-7-31';
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <Calendar
                ref={calendarRef}
                className="calendar-demo"
                min="2018, 7, 1"
                max="2019-7-31"
                selectedDates={["2019-7-2", "2029-7-17"]}
            ></Calendar>
            <div className="options" id="controlContainer">
                <div>Min/Max Set</div>
                <div className="option">
                    <pre>Min </pre>
                    <input
                        className="text-input"
                        ref={inputMinRef}
                        onChange={(e) => handleChange('min', e)}
                        placeholder="2019-01-01"
                        id="minInput"
                    />
                </div>
                <div className="option">
                    <pre>Max </pre>
                    <input
                        className="text-input"
                        ref={inputMaxRef}
                        onChange={(e) => handleChange('max', e)}
                        placeholder="2019-01-01"
                        id="maxInput"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;

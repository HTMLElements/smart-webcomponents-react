import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
    const calendarRef = useRef(null);
    const radioMonthRef = useRef(null);
    const radioYearRef = useRef(null);
    const radioDecadeRef = useRef(null);

    const handleChange = (mode, event) => {
        if (event.detail.value) {
            calendarRef.current.displayMode = mode;
        }
    };

    const handleDisplayModeChange = () => {
        const currentMode = calendarRef.current.displayMode;

        if (currentMode === 'month') {
            radioMonthRef.current.checked = true;
        } else if (currentMode === 'year') {
            radioYearRef.current.checked = true;
        } else {
            radioDecadeRef.current.checked = true;
        }
    };

    useEffect(() => {
        // You can perform additional setup if needed when the component mounts
    }, []);

    return (
        <div>
            <Calendar
                ref={calendarRef}
                onDisplayModeChange={handleDisplayModeChange}
                displayModeView="list"
            />
            <br />
            <div className="options">
                <div className="caption">Choose Mode</div>
                <div className="option">
                    <RadioButton
                        ref={radioMonthRef}
                        onChange={(event) => handleChange('month', event)}
                        checked
                    >
                        Month
                    </RadioButton>
                    <RadioButton
                        ref={radioYearRef}
                        onChange={(event) => handleChange('year', event)}
                    >
                        Year
                    </RadioButton>
                    <RadioButton
                        ref={radioDecadeRef}
                        onChange={(event) => handleChange('decade', event)}
                    >
                        Decade
                    </RadioButton>
                </div>
            </div>
        </div>
    );
};

export default App;

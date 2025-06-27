import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
    const calendarRef = useRef(null);
    const inputRef = useRef(null);

    const selectedDates = [
        "2020-08-17", "2020-09-6", "2020-09-21", 
        "2020-10-31", "2020-11-25", "2020-12-24", "2021-1-7"
    ];

    const handleChange = (event) => {
        const months = parseInt(event.target.value);
        if (!isNaN(months) && months >= 1 && months <= 12) {
            if (calendarRef.current) {
                calendarRef.current.months = months;
            }
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = '12';
        }
    }, []);

    return (
        <div>
            <Calendar 
                ref={calendarRef} 
                className="multiple-months" 
                months={12} 
                selectedDates={selectedDates}
            />
            <div className="options">
                <div className="caption">Number of months (1-12)</div>
                <div className="option">
                    <input 
                        ref={inputRef} 
                        className="text-input" 
                        onChange={handleChange} 
                        id="monthsCountSelector" 
                        type="number" 
                        min="1" 
                        max="12"
                        placeholder="12"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;

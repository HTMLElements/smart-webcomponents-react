import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
    const calendarRef = useRef(null);
    const dateInputRef = useRef(null);

    const handleClearSelection = () => {
        calendarRef.current.clearSelection();
    };

    const handleToday = () => {
        calendarRef.current.today();
    };

    const handleNavForward = () => {
        calendarRef.current.navigate(1);
    };

    const handleNavBackward = () => {
        calendarRef.current.navigate(-1);
    };

    const handleSelectDate = () => {
        if (dateInputRef.current) {
            calendarRef.current.select(dateInputRef.current.value);
        }
    };

    const handleDisabled = () => {
        calendarRef.current.disabled = !calendarRef.current.disabled;
    };

    return (
        <div>
            <Calendar ref={calendarRef} />
            <div className="options">
                <div className="caption">
                    <Button onClick={handleClearSelection} id="clearSelection">Clear Selection</Button>
                </div>
                <div className="option">
                    <Button onClick={handleToday} id="today">Today</Button>
                </div>
                <div className="option">
                    <Button onClick={handleNavBackward} id="navBackward">Navigate Backward</Button>
                </div>
                <div className="option">
                    <Button onClick={handleNavForward} id="navForward">Navigate Forward</Button>
                </div>
                <div className="option">
                    <input
                        className="text-input"
                        ref={dateInputRef}
                        id="dateInput"
                        placeholder="e.g. 2019-1-1"
                    />
                </div>
                <div className="option">
                    <Button onClick={handleSelectDate} id="selectDate">Select Date</Button>
                </div>
                <div className="option">
                    <Button onClick={handleDisabled} style={{ width: 'auto' }} id="disabled">
                        Enable/Disable
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;

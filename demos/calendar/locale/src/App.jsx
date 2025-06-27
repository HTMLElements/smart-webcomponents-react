import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
    const calendarRef = useRef(null);
    const logRef = useRef(null);

    const dataSource = ['en', 'tr', 'ar', 'ru', 'de', 'es', 'pt', 'fr', 'zh', 'ja', 'it', 'bg', 'nl'];

    const handleChange = (event) => {
        if (calendarRef.current && event.detail.label) {
            calendarRef.current.locale = event.detail.label;
            if (logRef.current) {
                logRef.current.innerHTML = 'Current locale is ' + event.detail.label.toUpperCase();
            }
        }
    };

    return (
        <div>
            <Calendar ref={calendarRef} id="calendar" />
            <div className="options">
                <div className="caption">Choose a locale</div>
                <div className="option">
                    <DropDownList
                        dataSource={dataSource}
                        onChange={handleChange}
                        selectedIndexes={[0]}
                        id="localePicker"
                    />
                </div>
                <div className="option">
                    <div ref={logRef} id="log"></div>
                </div>
            </div>
        </div>
    );
};

export default App;

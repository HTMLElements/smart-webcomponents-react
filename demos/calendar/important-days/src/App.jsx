import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
    const calendarRef = useRef(null);
    const logRef = useRef(null);

    const formatDate = (date) => {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        const day = date.getDate();
        const monthName = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${monthName} ${year}`;
    };

    const handleOpen = (event) => {
        const date = new Date(event.detail.value);
        const calendar = calendarRef.current;

        if (date.getFullYear() === 2020) {
            const tooltip = event.detail.target;
            calendar.tooltipPosition = 'top';

            if (date.getMonth() === 5 && date.getDate() === 9) {
                tooltip.innerHTML = "Ivan's Birthday !";
            } else if (date.getMonth() === 6) {
                if (date.getDate() === 1) {
                    tooltip.innerHTML = "Filip's Birthday !";
                } else {
                    tooltip.innerHTML = "Anthony's Birthday !";
                    calendar.tooltipPosition = 'right';
                }
            }
        }
    };

    useEffect(() => {
        const template = document.createElement('template');
        template.id = 'importantDatesTemplate';
        template.innerHTML = '<span>{{day}}</span><span>&#127874</span>';

        document.body.appendChild(template);

        const calendar = calendarRef.current;
        calendar.importantDatesTemplate = template.id;

        if (calendar.importantDates) {
            calendar.importantDates.forEach(dateString => {
                const formattedDate = formatDate(new Date(dateString));
                logRef.current.innerHTML += `${formattedDate}<br />`;
            });
        }
    }, []);

    return (
        <div>
            <Calendar
                ref={calendarRef}
                className="special-days"
                importantDates={["2020, 6, 9", "2020, 7, 1", "2020, 7, 30", "2020, 12, 24"]}
                tooltip
                onOpen={handleOpen}
            />
            <div className="options">
                <div className="caption">Important Dates</div>
                <div className="option" ref={logRef} id="importantDates"></div>
            </div>
        </div>
    );
};

export default App;

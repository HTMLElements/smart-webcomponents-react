import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState, useEffect } from "react";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DateRangeInput } from 'smart-webcomponents-react/daterangeinput';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
    const calendar = useRef();
    const windowRef = useRef();
    const multilinetextbox = useRef();
    const daterangeinput = useRef();
    const [eventDetails, setEventDetails] = useState(null);
    const [importantDatesData, setImportantDatesData] = useState([]);

    const events = [ 
        // Same events array as your original code (omitted for brevity) 
    ];

    useEffect(() => {
        setImportantDatesData(getImportantDates(events));
    }, []);

    const getImportantDates = (dataSource = events) => {
        let dates = [];
        for (let event of dataSource) {
            let dateFrom = new Date(event.dateFrom);
            let dateTo = new Date(event.dateTo);
            dateFrom.setHours(0, 0, 0, 0);
            dateTo.setHours(0, 0, 0, 0);

            while (dateFrom.getTime() < dateTo.getTime()) {
                dates.push({ date: new Date(dateFrom), description: event.description });
                dateFrom.setDate(dateFrom.getDate() + 1);
                dateFrom.setHours(0, 0, 0, 0);
            }

            dates.push({ date: new Date(dateTo), description: event.description });
        }
        return dates;
    };

    const getImportantDate = (date) => {
        const targetDate = new Date(date);
        targetDate.setHours(0, 0, 0, 0);

        const found = importantDatesData.find(d => d.date.getTime() === targetDate.getTime());
        if (!found) return;

        const eventDates = importantDatesData.filter(d => d.description === found.description);
        return {
            from: eventDates[0].date,
            to: eventDates[eventDates.length - 1].date,
            description: found.description
        };
    };

    const handleWindowReady = () => {
        document.getElementById('buttonDelete').addEventListener('click', () => {
            if (!eventDetails) {
                windowRef.current.close();
                return;
            }
            const filtered = importantDatesData.filter(d => d.description !== eventDetails.description);
            setImportantDatesData(filtered);
            calendar.current.importantDates = filtered.map(d => d.date);
            windowRef.current.close();
        });

        document.getElementById('buttonCancel').addEventListener('click', () => {
            windowRef.current.close();
            setEventDetails(null);
        });

        document.getElementById('buttonSave').addEventListener('click', () => {
            if (!eventDetails) {
                windowRef.current.close();
                return;
            }
            const newDateRange = daterangeinput.current.value;
            if (!newDateRange) return;

            const newDates = getImportantDates([{
                dateFrom: newDateRange.from,
                dateTo: newDateRange.to,
                description: multilinetextbox.current.value || ''
            }]);

            const updated = importantDatesData
                .filter(d => d.description !== eventDetails.description)
                .concat(newDates);

            setImportantDatesData(updated);
            calendar.current.importantDates = updated.map(d => d.date);
            windowRef.current.close();
        });
    };

    const handleCalendarClick = (event) => {
        const target = event.target.closest('smart-button');
        if (!target) return;

        switch (target.id) {
            case 'next':
                calendar.current.navigate(12);
                break;
            case 'previous':
                calendar.current.navigate(-12);
                break;
            case 'today':
                const today = new Date();
                today.setMonth(0);
                today.setDate(1);
                calendar.current.navigate(today);
                break;
            case 'month':
                calendar.current.displayMode = 'month';
                break;
            case 'year':
                calendar.current.displayMode = 'year';
                break;
            case 'decade':
                calendar.current.displayMode = 'decade';
                break;
            default:
                break;
        }
    };

    const handleCalendarOpen = (event) => {
        const tooltip = event.detail.target;
        if (!(tooltip instanceof window.Smart.Tooltip)) return;

        const details = getImportantDate(event.detail.value);
        if (details) {
            tooltip.value = details.description;
            windowRef.current.label = details.description;
            multilinetextbox.current.value = details.description;
            daterangeinput.current.value = details;
            setEventDetails(details);
        }
    };

    const handleDisplayModeChange = () => {
        const buttons = document.querySelectorAll('.view-selection smart-button');
        buttons.forEach(button => {
            if (button.id === calendar.current.displayMode) {
                button.classList.add('primary');
            } else {
                button.classList.remove('primary');
            }
        });
    };

    const handleCalendarDblClick = (event) => {
        const calendarCell = event.target.closest('.smart-calendar-cell');
        if (calendarCell) {
            const cellDate = new Date(calendarCell.value);
            const existing = getImportantDate(cellDate) || {
                from: cellDate,
                description: 'New Event'
            };
            windowRef.current.label = existing.description;
            multilinetextbox.current.value = existing.description;
            daterangeinput.current.value = existing;
            setEventDetails(existing);
            windowRef.current.open();
        }
    };

    const initTemplates = () => {
        const container = document.getElementById('templates');
        container.innerHTML = `
            <template id="headerTemplate">
                <div class="calendar-header">
                    <div class="view-selection">
                        <smart-button id="month" class="primary">Month</smart-button>
                        <smart-button id="year">Year</smart-button>
                        <smart-button id="decade">Decade</smart-button>
                    </div>
                    <div class="year-selector">{{date}}</div>
                    <div class="navigation-buttons">
                        <smart-button id="previous" class="flat rounded"></smart-button>
                        <smart-button id="today" class="flat">Today</smart-button>
                        <smart-button id="next" class="flat rounded"></smart-button>
                    </div>
                </div>
            </template>
            <template id="tooltipTemplate">
                <div class="tooltip-content">
                    <smart-button class="event-window-button button-icon floating primary"></smart-button>
                    <span>{{day}}</span>
                </div>
            </template>
            <template id="windowFooterTemplate">
                <div class="window-footer-buttons">
                    <smart-button id="buttonDelete">Delete</smart-button>
                    <smart-button id="buttonCancel">Cancel</smart-button>
                    <smart-button id="buttonSave">Save</smart-button>
                </div>
            </template>
        `;

        if (calendar.current) {
            calendar.current.headerTemplate = 'headerTemplate';
            calendar.current.tooltipTemplate = 'tooltipTemplate';
        }
        if (windowRef.current) {
            windowRef.current.footerTemplate = 'windowFooterTemplate';
        }
    };

    useEffect(() => {
        initTemplates();
    }, []);

    return (
        <div>
            <div className="demo-description">
                Most popular Tennis Events are added to the Calendar as <b>importantDates</b>. Hover over a date to see the Tooltip with the event description. Click the calendar Button inside the Tooltip to edit the event. Double-clicking on an empty date allows you to add a new event.
            </div>

            <Calendar
                ref={calendar}
                id="calendar"
                importantDates={importantDatesData.map(d => d.date)}
                months={12}
                firstDayOfWeek={1}
                scrollButtonsPosition="far"
                selectedDates={['2022-01-01']}
                tooltip
                onClick={handleCalendarClick}
                onOpen={handleCalendarOpen}
                onDisplayModeChange={handleDisplayModeChange}
                onDoubleClick={handleCalendarDblClick}
            />

            <Window ref={windowRef} id="eventWindow" modal onReady={handleWindowReady}>
                <div className="window-content">
                    <div>
                        <label>Description</label>
                        <MultilineTextBox ref={multilinetextbox} id="descriptionInput" autoExpand placeholder="Enter description" />
                    </div>
                    <div>
                        <label>Time period</label>
                        <DateRangeInput ref={daterangeinput} id="dateRangeInput" placeholder="Enter date(s)" dropDownButtonPosition="right" valueType="object" />
                    </div>
                </div>
            </Window>

            <div id="templates"></div>
        </div>
    );
};

export default App;

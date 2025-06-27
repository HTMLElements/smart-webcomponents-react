import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { ComboBox } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox } from 'smart-webcomponents-react/textbox';

const App = () => {
    const calendarRef = useRef(null);
    const summaryRef = useRef(null);

    const dataSource = Array.from({ length: 30 }, (_, i) => i + 1);
    const dataSource1 = Array.from({ length: 30 }, (_, i) => i + 1);
    const dataSource2 = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleChange = () => {
        const calendar = calendarRef.current;
        const summary = summaryRef.current;

        if (calendar.selectedDates) {
            summary.innerHTML = `Duration: ${calendar.selectedDates.length} days`;
        }

        summary.classList.remove('smart-visibility-hidden');
    };

    return (
        <div>
            <div>
                <h2>Hotel Booking</h2>
            </div>
            <div id="mainContainer">
                <div>
                    <h4>Name of the destination:</h4>
                    <TextBox id="nameInput" placeholder="London" />
                </div>

                <div id="travelChooser">
                    <h4>Work travel ?</h4>
                    <RadioButton>Yes</RadioButton>
                    <RadioButton>No</RadioButton>
                </div>

                <div>
                    <h4>Reservation dates:</h4>
                    <Calendar
                        ref={calendarRef}
                        id="datePicker"
                        min={new Date()}
                        months={2}
                        selectionMode="many"
                        viewSections={["header", "footer"]}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div ref={summaryRef} id="summary" className="smart-visibility-hidden"></div>

                <br />

                <div id="personPicker">
                    <div>
                        <h4>Rooms:</h4>
                        <ComboBox
                            dataSource={dataSource}
                            id="roomPicker"
                            className="hotelRoomPicker"
                            selectionMode="one"
                        />
                    </div>
                    <div>
                        <h4>Adults:</h4>
                        <ComboBox
                            dataSource={dataSource1}
                            id="adultPicker"
                            className="hotelRoomPicker"
                            selectionMode="one"
                        />
                    </div>
                    <div>
                        <h4>Children:</h4>
                        <ComboBox
                            dataSource={dataSource2}
                            id="childrenPicker"
                            className="hotelRoomPicker"
                            selectionMode="one"
                        />
                    </div>
                </div>

                <br />

                <Button id="submitButton">Search</Button>
            </div>
        </div>
    );
};

export default App;

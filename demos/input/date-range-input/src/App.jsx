import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DateRangeInput } from 'smart-webcomponents-react/daterangeinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
    const daterangeinput = useRef();

    useEffect(() => {
        const input = daterangeinput.current;

        function handleChange(event) {
            const target = event.target;
            const targetClassList = target.classList;

            if (targetClassList.contains('readonly')) {
                input.readonly = event.detail.value;
                return;
            }
            if (targetClassList.contains('timepicker')) {
                input.timepicker = event.detail.value;
                return;
            }
            if (targetClassList.contains('icons')) {
                input.icons = event.detail.value;
                return;
            }

            const inputClassList = input.nativeElement.classList;

            if (targetClassList.contains('render-mode')) {
                inputClassList.remove('underlined', 'outlined');
                const textContent = target.textContent.toLowerCase();
                if (textContent.indexOf('underlined') > -1) {
                    inputClassList.add('underlined');
                } 
                else if (textContent.indexOf('outlined') > -1) {
                    inputClassList.add('outlined');
                }
            }
        }

        const optionsEl = document.querySelector('.options');
        optionsEl.addEventListener('change', handleChange);

        // Clean-up
        return () => {
            optionsEl.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div>
            <div className="demo-description">
                <p> <b>Smart.DateRangeInput</b> is an input that allows to select a Date/Date
                    range from a Calendar drop down.</p>
                <p><b>Readonly</b> will turn the input in to a DatePicker/DateTimePicker.</p>
                <p><b>Timepicker</b> will enable/disable time selection from a menu that is
                    available when the user clicks on the time icon(string) at the bottom of
                    the popup.</p>
                <p><b>Icons</b> will enable/disable quick action icons(buttons) inside the
                    popup.</p>
                <p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
            </div>
            <DateRangeInput ref={daterangeinput} placeholder="Please Select" dropDownButtonPosition="right"></DateRangeInput>
            <div className="options">
                <div className="description">Readonly DateInput acts as a simple DateTimeInput.</div>
                <div className="option">
                    <CheckBox className="readonly">Readonly</CheckBox>
                </div>
                <div className="option">
                    <CheckBox className="timepicker">Timepicker</CheckBox>
                </div>
                <div className="option">
                    <CheckBox className="icons">Icons</CheckBox>
                </div>
                <div className="option">
                    <div className="description">Render Mode</div>
                    <RadioButton checked className="render-mode">Default</RadioButton>
                    <RadioButton className="render-mode">Outlined</RadioButton>
                    <RadioButton className="render-mode">Underlined</RadioButton>
                </div>
            </div>
        </div>
    );
}

export default App;
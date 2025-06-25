import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
    const colorpickerRef = useRef(null);

    useEffect(() => {
        const colorPicker = colorpickerRef.current;

        const handleChange = (event) => {
            const { target } = event;

            // Handle grid size and gap settings
            if (target.groupName === 'gridSettings' || target.groupName === 'gapSettings') {
                let size;
                const className = target.groupName === 'gridSettings' ? 'item-size' : 'column-gap';

                switch (target.innerHTML) {
                    case '10':
                    case '1':
                        size = 'small';
                        break;
                    case '20':
                    case '2.5':
                        size = 'medium';
                        break;
                    case '30':
                    case '5':
                        size = 'large';
                        break;
                    default:
                        return;
                }

                const classes = colorPicker.nativeElement.classList;

                // Remove old class
                [...classes].forEach(cls => {
                    if (cls.includes(className)) {
                        classes.remove(cls);
                    }
                });

                classes.add(`${className}-${size}`);
                return;
            }

            // Enable/disable custom colors
            if (target.id === 'enableCustomColors') {
                colorPicker.enableCustomColors = target.checked;
                return;
            }

            // Set RGB value
            if (target.id === 'rgbValue') {
                colorPicker.value = target.value;
            }
        };

        document.addEventListener('change', handleChange);

        return () => {
            document.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div>
            <div className="demo-description">
                This example allows you to customize the Color Picker with its API
            </div>
            <ColorPicker ref={colorpickerRef}></ColorPicker>
            <div className="options">
                <div className="option">
                    <h3>Toggle Grid Color Size</h3>
                    <RadioButton groupName="gridSettings">10</RadioButton>
                    <br />
                    <RadioButton groupName="gridSettings" checked>
                        20
                    </RadioButton>
                    <br />
                    <RadioButton groupName="gridSettings">30</RadioButton>
                    <br />
                </div>
                <div className="option">
                    <h3>Toggle Grid Column Gap</h3>
                    <RadioButton groupName="gapSettings" checked>
                        1
                    </RadioButton>
                    <br />
                    <RadioButton groupName="gapSettings">2.5</RadioButton>
                    <br />
                    <RadioButton groupName="gapSettings">5</RadioButton>
                    <br />
                </div>
                <div className="option">
                    <h3>Enable/Disable Custom Colors</h3>
                    <CheckBox id="enableCustomColors">Enable Custom Colors</CheckBox>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default App;

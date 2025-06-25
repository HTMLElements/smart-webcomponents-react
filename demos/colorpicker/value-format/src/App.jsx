import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
    const colorPickerRef = useRef(null);

    useEffect(() => {
        const colorPicker = colorPickerRef.current;

        const handleChange = (event) => {
            if (!event || !event.target) return;

            if (event.target.groupName === 'valueFormat') {
                colorPicker.valueFormat = event.target.innerHTML;
                return;
            }

            if (event.target.id === 'editAlphaChannel') {
                colorPicker.editAlphaChannel = event.detail?.value;
            }
        };

        document.addEventListener('change', handleChange);

        return () => {
            document.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div>
            <ColorPicker ref={colorPickerRef} enableCustomColors editable />
            <div className="options">
                <div className="option">
                    <h3>Toggle Value Display Mode</h3>
                    <RadioButton groupName="valueFormat" checked>default</RadioButton>
                    <br />
                    <RadioButton groupName="valueFormat">rgb</RadioButton>
                    <br />
                    <RadioButton groupName="valueFormat">rgba</RadioButton>
                    <br />
                    <RadioButton groupName="valueFormat">hex</RadioButton>
                </div>
                <div className="option">
                    <h3>Edit Alpha Channel</h3>
                    <CheckBox id="editAlphaChannel">Edit Alpha Channel</CheckBox>
                </div>
            </div>
        </div>
    );
};

export default App;

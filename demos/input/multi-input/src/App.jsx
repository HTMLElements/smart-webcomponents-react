import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { MultiInput } from 'smart-webcomponents-react/multiinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const dataSource = [
    { value: "Austria", label: "Austria" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Estonia", label: "Estonia" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Greece", label: "Greece" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "Ireland", label: "Ireland" },
    { value: "Italy", label: "Italy" },
    { value: "Latvia", label: "Latvia" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Macedonia, The Former Yugoslav Republic of", label: "Macedonia" },
    { value: "Malta", label: "Malta" },
    { value: "Moldova, Republic of", label: "Moldova, Republic of" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Norway", label: "Norway" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Romania", label: "Romania" },
    { value: "Russian Federation", label: "Russian Federation" },
    { value: "Serbia", label: "Serbia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Spain", label: "Spain" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Turkey", label: "Turkey" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Kingdom", label: "United Kingdom" }
];

const App = () => {
    const multiinputRef = useRef();

    useEffect(() => {
        const input = multiinputRef.current;
        if (!input) return;

        const optionsDiv = document.querySelector('.options');

        // Handler function (moved outside for cleanup)
        function handleChange(event) {
            const target = event.target;
            const targetClassList = target.classList;

            if (targetClassList.contains('readonly')) {
                // smart-webcomponents-react passes the value via event.detail.value, but if using CheckBox, 
                // might need to get target.checked instead if event.detail is undefined
                input.readonly = event.detail?.value ?? target.checked;
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

        optionsDiv.addEventListener('change', handleChange);

        // Cleanup on unmount
        return () => {
            optionsDiv.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div>
            <div className="demo-description">
                <p> <b>Smart.MultiInput</b> is an input that can have a predefined options
                    list. This input unlike the <b>Smart.Input</b> allows multiple selection.</p>
                <p><b>Readonly</b> will turn the input in to a drop down list.</p>
                <p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
            </div>
            <MultiInput
                ref={multiinputRef}
                dataSource={dataSource}
                placeholder="Please Select"
                dropDownButtonPosition="right"
            />
            <div className="options">
                <div className="description">Readonly MultiInput acts as a simple DropDownList.</div>
                <div className="option">
                    <CheckBox className="readonly">Read only</CheckBox>
                </div>
                <div className="option">
                    <div className="description">Render Mode</div>
                    <RadioButton className="render-mode">Default</RadioButton>
                    <RadioButton className="render-mode">Outlined</RadioButton>
                    <RadioButton className="render-mode">Underlined</RadioButton>
                </div>
            </div>
        </div>
    );
};

export default App;
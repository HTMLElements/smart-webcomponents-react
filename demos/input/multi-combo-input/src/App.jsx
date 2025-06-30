import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { MultiComboInput } from 'smart-webcomponents-react/multicomboinput';
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
    const multicomboinput = useRef();

    useEffect(() => {
        const input = multicomboinput.current;
        const optionsDiv = document.querySelector('.options');
        if (!input || !optionsDiv) return;

        function onChange(event) {
            const target = event.target;
            const targetClassList = target.classList;

            if (targetClassList.contains('readonly')) {
                input.readonly = event.detail.value;
                return;
            }

            if (targetClassList.contains('select-all')) {
                input.selectAll = event.detail.value;
                return;
            }

            if (targetClassList.contains('hide-drop-down-button')) {
                input.dropDownButtonPosition = event.detail.value ? 'none' : 'right';
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

        optionsDiv.addEventListener('change', onChange);

        return () => {
            optionsDiv.removeEventListener('change', onChange);
        };
    }, []);

    return (
        <div>
            <div className="demo-description">
                <p> <b>Smart.MutliComboInput</b> is an input that can have a predefined check
                    list where each selected item is added to the Input as a tag.</p>
                <p><b>Readonly</b> will turn the input in to a drop down list.</p>
                <p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
            </div>
            <MultiComboInput
                ref={multicomboinput}
                dataSource={dataSource}
                dropDownButtonPosition="right"
            />
            <div className="options">
                <div className="description">Readonly MultiInput acts as a simple DropDownList.</div>
                <div className="option">
                    <CheckBox className="readonly">Read only</CheckBox>
                </div>
                <div className="option">
                    <CheckBox className="hide-drop-down-button">Hide Drop Down Button</CheckBox>
                </div>
                <div className="option">
                    <CheckBox className="select-all">Show Select All Item</CheckBox>
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
};

export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const dataSource = [
    "Affogato",
    "Americano",
    "Bicerin",
    "Breve",
    "Café Bombón",
    "Café au lait",
    "Caffé Corretto",
    "Café Crema",
    "Caffé Latte",
    "Caffé macchiato",
    "Café mélange",
    "Coffee milk",
    "Cafe mocha",
    "Cappuccino",
    "Carajillo",
    "Cortado",
    "Cuban espresso",
    "Espresso",
    "Eiskaffee",
    "The Flat White",
    "Frappuccino",
    "Galao",
    "Greek frappé coffee",
    "Alabala",
    "Indian filter coffee",
    "Instant coffee",
    "Irish coffee",
    "Liqueur coffee"
];

const dropDownPositions = {
    auto: 'Auto',
    bottom: 'Bottom',
    overlayBottom: 'Overlay-bottom',
    overlayCenter: 'Overlay-center',
    overlayTop: 'Overlay-top',
    top: 'Top',
    centerBottom: 'Center-bottom',
    centerTop: 'Center-top',
};

const App = () => {
    const dropdownlist = useRef();

    const handleDropDownPositionButtonClick = (mode) => {
        const dropDownListElement = dropdownlist.current;
        dropDownListElement.dropDownPosition = mode.toLowerCase();
    };

    return (
        <div>
            <DropDownList ref={dropdownlist} className="drop-down-list-modes-demo" dataSource={dataSource}></DropDownList>
            <div className="options">
                <div className="caption">DropDown list Position:</div>
                <div className="option">
                    <RadioButton checked onClick={() => handleDropDownPositionButtonClick(dropDownPositions.auto)}>
                        {dropDownPositions.auto}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.bottom)}>
                        {dropDownPositions.bottom}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.overlayBottom)}>
                        {dropDownPositions.overlayBottom}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.overlayCenter)}>
                        {dropDownPositions.overlayCenter}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.overlayTop)}>
                        {dropDownPositions.overlayTop}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.top)}>
                        {dropDownPositions.top}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.centerBottom)}>
                        {dropDownPositions.centerBottom}
                    </RadioButton>
                    <br /><br />
                    <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.centerTop)}>
                        {dropDownPositions.centerTop}
                    </RadioButton>
                    <br /><br />
                </div>
            </div>
        </div>
    );
};

export default App;

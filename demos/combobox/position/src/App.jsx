import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from "react";
import { ComboBox } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
    const comboboxRef = useRef(null);
    const [selectedPosition, setSelectedPosition] = useState("Auto");

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

    const handleDropDownPositionButtonClick = (event) => {
        const combobox = comboboxRef.current;
        let mode = event.target.textContent.trim();
        combobox.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
        setSelectedPosition(mode);
    };

    const positions = [
        "Auto",
        "Bottom",
        "Overlay-bottom",
        "Overlay-center",
        "Overlay-top",
        "Top",
        "Center-bottom",
        "Center-top"
    ];

    return (
        <div>
            <div id="container">
                <ComboBox
                    ref={comboboxRef}
                    className="drop-down-list-modes-demo"
                    dataSource={dataSource}
                ></ComboBox>
                <div className="options">
                    <div className="caption">DropDown list Position:</div>
                    <div className="option">
                        {positions.map((position) => (
                            <React.Fragment key={position}>
                                <RadioButton
                                    checked={selectedPosition === position}
                                    onClick={handleDropDownPositionButtonClick}
                                >
                                    {position}
                                </RadioButton>
                                <br /><br />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

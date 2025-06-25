import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { ComboBox } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const comboBoxRef = useRef(null);
  const [autoCompleteMode, setAutoCompleteMode] = useState('manual');

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
    "Indian filter coffee",
    "Instant coffee",
    "Irish coffee",
    "Liqueur coffee"
  ];

  useEffect(() => {
    if (comboBoxRef.current) {
      comboBoxRef.current.autoComplete = autoCompleteMode;
    }
  }, [autoCompleteMode]);

  const handleRadioChange = (mode) => {
    setAutoCompleteMode(mode.toLowerCase());
  };

  return (
    <div>
      <ComboBox
        ref={comboBoxRef}
        autoComplete={autoCompleteMode}
        minLength={1}
        selectionMode="zeroOrOne"
        dataSource={dataSource}
      />
      <div className="options">
        <div className="caption">Auto Complete Modes</div>
        <div className="option">
          <RadioButton onChange={() => handleRadioChange('None')}>None</RadioButton>
          <RadioButton onChange={() => handleRadioChange('Auto')}>Auto</RadioButton>
          <RadioButton onChange={() => handleRadioChange('Inline')}>Inline</RadioButton>
          <RadioButton checked onChange={() => handleRadioChange('Manual')}>Manual</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { ComboBox } from 'smart-webcomponents-react/combobox';

const App = () => {
  const comboBoxRef = useRef();
  const [activeMode, setActiveMode] = useState('default');

  const dataSource = [
    { label: "Andrew", value: 1, group: "A" },
    { label: "Natalia", value: 2, group: "B" },
    { label: "Michael", value: 3, group: "B" },
    { label: "Angel", value: 4, group: "A" },
    { label: "Hristo", value: 5, group: "C" },
    { label: "Peter", value: 6, group: "A" },
    { label: "Albert", value: 7, group: "A" },
    { label: "George", value: 8, group: "C" }
  ];

  const handleModeChange = (mode) => {
    if (comboBoxRef.current) {
      comboBoxRef.current.dropDownOpenMode = mode.toLowerCase();
    }
    setActiveMode(mode);
  };

  const modes = ['Default', 'Auto', 'DropDownButton', 'None'];

  return (
    <div>
      <div id="description">
        <h3>Modes Description</h3>
        <p><strong>Auto</strong> – opens/closes on hover.</p>
        <p><strong>Default</strong> – opens/closes on click.</p>
        <p><strong>DropDownButton</strong> – separate input and dropdown button.</p>
        <p><strong>None</strong> – dropdown cannot be opened.</p>
      </div>

      <ComboBox
        ref={comboBoxRef}
        className="drop-down-list-modes-demo"
        dataSource={dataSource}
        dropDownOpenMode={activeMode.toLowerCase()}
      />

      <div className="options">
        <div className="caption">ComboBox Open Mode:</div>
        {modes.map((mode, index) => (
          <div className="option" key={index}>
            <Button
              disabled={activeMode === mode}
              onClick={() => handleModeChange(mode)}
            >
              {mode}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

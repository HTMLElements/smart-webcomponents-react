import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useCallback } from "react";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const colorPickerRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = useCallback((event) => {
    inputRef.current.value = event.detail.value;
  }, []);

  const handleInputChange = useCallback((event) => {
    const value = event.target.value;
    if (colorPickerRef.current) {
      colorPickerRef.current.value = value;
    }
  }, []);

  const handleRadioChange = useCallback((event) => {
    if (event.detail.checked) {
      const newMode = event.target.innerText.trim();
      if (colorPickerRef.current) {
        colorPickerRef.current.valueDisplayMode = newMode;
      }
    }
  }, []);

  useEffect(() => {
    if (colorPickerRef.current) {
      inputRef.current.value = colorPickerRef.current.value;
    }
  }, []);

  return (
    <div>
      <div className="demo-description">
        The demo shows switching between different value display modes of the Color Picker
      </div>
      <ColorPicker
        ref={colorPickerRef}
        enableCustomColors
        onChange={handleChange}
      />
      <div className="options">
        <div className="option">
          Selected color:
          <input
            ref={inputRef}
            type="text"
            className="Input"
            placeholder="#RRGGBB"
            id="rgbValue"
            onChange={handleInputChange}
          />
        </div>
        <div className="option">
          <div>Toggle Value Display Mode</div>
          {["default", "colorBox", "colorCode", "none"].map((mode, i) => (
            <div key={mode}>
              <RadioButton
                groupName="valueDisplayMode"
                checked={mode === "default"}
                onChange={handleRadioChange}
              >
                {mode}
              </RadioButton>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

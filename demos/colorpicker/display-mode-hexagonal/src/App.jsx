import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const colorPicker = colorPickerRef.current;

    const handleChange = (event) => {
      const { target } = event;
      const value = target.textContent;

      if (target.groupName === 'columnSettings') {
        colorPicker.columnCount = parseInt(value);
        return;
      }

      if (target.groupName === 'applyValueMode') {
        colorPicker.applyValueMode = value;
        return;
      }

      if (target.groupName === 'palette') {
        colorPicker.palette = value;
        return;
      }

      if (target.id === 'inverted') {
        colorPicker.inverted = target.checked;
        return;
      }
    };

    document.addEventListener('change', handleChange);
    return () => document.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <div className="demo-description">
        This example demonstrates the "hexagonal" display mode of the Color Picker.
      </div>
      <ColorPicker
        ref={colorPickerRef}
        displayMode="hexagonal"
      />
      <div className="options">
        <div className="option">
          <div>Column Count</div>
          <RadioButton groupName="columnSettings">4</RadioButton>
          <br />
          <RadioButton groupName="columnSettings" checked>8</RadioButton>
          <br />
          <RadioButton groupName="columnSettings">14</RadioButton>
        </div>
        <div className="option">
          <div>ApplyValueMode</div>
          <RadioButton groupName="applyValueMode" checked>instantly</RadioButton>
          <br />
          <RadioButton groupName="applyValueMode">useButtons</RadioButton>
        </div>
        <div className="option">
          <div>Palette Color</div>
          <RadioButton groupName="palette" checked>default</RadioButton>
          <br />
          <RadioButton groupName="palette">gray</RadioButton>
          <br />
          <RadioButton groupName="palette">red</RadioButton>
          <br />
          <RadioButton groupName="palette">green</RadioButton>
          <br />
          <RadioButton groupName="palette">blue</RadioButton>
        </div>
        <div className="option">
          <div>Inverted Colors</div>
          <CheckBox id="inverted">Inverted</CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;

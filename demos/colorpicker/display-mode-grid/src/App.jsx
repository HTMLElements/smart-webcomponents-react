import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const colorPickerRef = useRef(null);

  const paletteColors = [
    '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4',
    '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff',
    '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1',
    '#000075', '#808080', '#ffffff', '#000000'
  ];

  const paletteCustomColors = ['#808080', '#ffd8b1', '#aaffc3'];

  useEffect(() => {
    const colorPicker = colorPickerRef.current;

    const handleChange = (event) => {
      const { target } = event;
      const text = target.textContent;

      if (target.groupName === 'columnSettings') {
        colorPicker.columnCount = parseInt(text);
      } else if (target.groupName === 'applyValueMode') {
        colorPicker.applyValueMode = text;
      } else if (target.groupName === 'palette') {
        colorPicker.palette = text;
      } else if (target.id === 'enableCustomColors') {
        colorPicker.enableCustomColors = target.checked;
      }
    };

    document.addEventListener('change', handleChange);
    return () => document.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <div className="demo-description">
        This example demonstrates the "grid" display mode of the Color Picker.
      </div>

      <ColorPicker
        ref={colorPickerRef}
        displayMode="grid"
        paletteColors={paletteColors}
        paletteCustomColors={paletteCustomColors}
      />

      <div className="options">
        <div className="option">
          <h3>ApplyValueMode</h3>
          <RadioButton groupName="applyValueMode" checked>instantly</RadioButton>
          <RadioButton groupName="applyValueMode">useButtons</RadioButton>
        </div>
        <div className="option">
          <h3>Select Grid Column Count</h3>
          <RadioButton groupName="columnSettings">4</RadioButton>
          <RadioButton groupName="columnSettings">8</RadioButton>
          <RadioButton groupName="columnSettings" checked>14</RadioButton>
        </div>
        <div className="option">
          <h3>Palette</h3>
          <RadioButton groupName="palette" checked>default</RadioButton>
          <RadioButton groupName="palette">gray</RadioButton>
          <RadioButton groupName="palette">red</RadioButton>
          <RadioButton groupName="palette">green</RadioButton>
          <RadioButton groupName="palette">blue</RadioButton>
          <RadioButton groupName="palette">custom</RadioButton>
        </div>
        <div className="option">
          <h3>Enable/Disable Custom Colors</h3>
          <CheckBox id="enableCustomColors">Enable Custom Colors</CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;

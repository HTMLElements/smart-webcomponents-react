import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const colorPicker = colorPickerRef.current;

    const handleChange = (event) => {
      const { target } = event;

      if (target.groupName === 'applyValueMode') {
        colorPicker.applyValueMode = target.textContent;
        return;
      }

      const toggleProps = [
        'hidePreviewContainer',
        'hideRGBEditor',
        'hideHEXEditor',
        'hideAlphaEditor',
        'inverted'
      ];

      if (toggleProps.includes(target.id)) {
        colorPicker[target.id] = target.checked;
        return;
      }

      if (target.id === 'inverted') {
        colorPicker.inverted = target.value;
      }
    };

    document.addEventListener('change', handleChange);
    return () => document.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <div className="demo-description">
        This example demonstrates the "radial" display mode of the Color Picker.
      </div>
      <ColorPicker
        ref={colorPickerRef}
        displayMode="radial"
        editAlphaChannel
      />
      <div className="options">
        <div className="option">
          <div>ApplyValueMode</div>
          <RadioButton groupName="applyValueMode" checked>
            instantly
          </RadioButton>
          <br />
          <RadioButton groupName="applyValueMode">useButtons</RadioButton>
          <br />
        </div>
        <div className="option">
          <div>Color Editors</div>
          <CheckBox id="hidePreviewContainer">Hide Preview Container</CheckBox>
          <br />
          <CheckBox id="hideRGBEditor">Hide RGB Editor</CheckBox>
          <br />
          <CheckBox id="hideHEXEditor">Hide HEX Editor</CheckBox>
          <br />
          <CheckBox id="hideAlphaEditor">Hide Alpha Editor</CheckBox>
          <br />
        </div>
        <div className="option">
          <CheckBox id="inverted">inverted</CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;

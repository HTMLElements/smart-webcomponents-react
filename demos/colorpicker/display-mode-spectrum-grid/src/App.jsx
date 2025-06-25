import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const colorPicker = colorPickerRef.current;

    const handleChange = (event) => {
      const target = event.target;

      if (!colorPicker) return;

      // Set column count
      if (target.groupName === 'columnCount') {
        colorPicker.columnCount = parseInt(target.textContent, 10);
        return;
      }

      // Set grid item size or gap
      if (target.groupName === 'columnSize' || target.groupName === 'columnGap') {
        let size;
        const className = target.groupName === 'columnSize' ? 'item-size' : 'column-gap';

        switch (target.textContent) {
          case '3':
          case '5':
          case '20':
            size = 'small';
            break;
          case '6':
          case '10':
          case '40':
            size = 'medium';
            break;
          case '9':
          case '15':
          case '60':
            size = 'large';
            break;
          default:
            return;
        }

        // Remove existing related class
        const classes = colorPicker.nativeElement.classList;
        [...classes].forEach(cls => {
          if (cls.includes(className)) {
            classes.remove(cls);
          }
        });

        classes.add(`${className}-${size}`);
        return;
      }

      // Apply value mode
      if (target.groupName === 'applyValueMode') {
        colorPicker.applyValueMode = target.textContent;
        return;
      }

      // Palette
      if (target.groupName === 'palette') {
        colorPicker.palette = target.textContent;
        return;
      }

      // Inverted toggle
      if (target.id === 'inverted') {
        colorPicker.inverted = event.detail?.value ?? target.checked;
        return;
      }
    };

    document.addEventListener('change', handleChange);
    return () => document.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <div className="demo-description">
        The Color Picker's display-mode is set to "spectrumGrid"
      </div>
      <ColorPicker
        ref={colorPickerRef}
        displayMode="spectrumGrid"
        placeholder="Select a Color"
      />
      <div className="options">
        <div className="option">
          <h3>Toggle Grid Column Size</h3>
          <RadioButton groupName="columnCount">5</RadioButton>
          <br />
          <RadioButton groupName="columnCount" checked>
            10
          </RadioButton>
          <br />
          <RadioButton groupName="columnCount">15</RadioButton>
          <br />
        </div>
        <div className="option">
          <h3>Toggle Grid Color Size</h3>
          <RadioButton groupName="columnSize" checked>
            20
          </RadioButton>
          <br />
          <RadioButton groupName="columnSize">40</RadioButton>
          <br />
          <RadioButton groupName="columnSize">60</RadioButton>
          <br />
        </div>
        <div className="option">
          <h3>Toggle Grid Column Gap</h3>
          <RadioButton groupName="columnGap" checked>
            3
          </RadioButton>
          <br />
          <RadioButton groupName="columnGap">6</RadioButton>
          <br />
          <RadioButton groupName="columnGap">9</RadioButton>
          <br />
        </div>
        <div className="option">
          <h3>Apply Value Mode</h3>
          <RadioButton groupName="applyValueMode" checked>
            instantly
          </RadioButton>
          <br />
          <RadioButton groupName="applyValueMode">useButtons</RadioButton>
          <br />
        </div>
        <div className="option">
          <h3>Palette</h3>
          <RadioButton groupName="palette" checked>
            default
          </RadioButton>
          <br />
          <RadioButton groupName="palette">gray</RadioButton>
          <br />
          <RadioButton groupName="palette">red</RadioButton>
          <br />
          <RadioButton groupName="palette">green</RadioButton>
          <br />
          <RadioButton groupName="palette">blue</RadioButton>
          <br />
        </div>
        <div className="option">
          <h3>Inverted</h3>
          <CheckBox id="inverted">inverted</CheckBox>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;

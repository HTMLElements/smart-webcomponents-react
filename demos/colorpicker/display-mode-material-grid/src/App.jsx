import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const colorPicker = colorPickerRef.current;

    const handleChange = (event) => {
      const { target } = event;

      // Grid item size or column gap handling
      if (target.groupName === 'columnSize' || target.groupName === 'columnGap') {
        let size, className = target.groupName === 'columnSize' ? 'item-size' : 'column-gap';

        switch (target.textContent) {
          case '1':
          case '20':
            size = 'small';
            break;
          case '5':
          case '40':
            size = 'medium';
            break;
          case '10':
          case '60':
            size = 'large';
            break;
          default:
            return;
        }

        const classList = colorPicker.nativeElement.classList;
        // Remove any existing class with the same prefix
        [...classList].forEach(cls => {
          if (cls.startsWith(className)) {
            classList.remove(cls);
          }
        });

        classList.add(`${className}-${size}`);
        return;
      }

      // ApplyValueMode
      if (target.groupName === 'applyValueMode') {
        colorPicker.applyValueMode = target.textContent;
        return;
      }

      // Manual RGB input
      if (target.id === 'rgbValue') {
        colorPicker.value = target.value;
      }
    };

    document.addEventListener('change', handleChange);
    return () => document.removeEventListener('change', handleChange);
  }, []);

  return (
    <div>
      <div className="demo-description">
        This example demonstrates the "materialGrid" display mode of the Color Picker.
      </div>
      <ColorPicker
        ref={colorPickerRef}
        displayMode="materialGrid"
      />
      <div className="options">
        <div className="option">
          <div>Toggle Grid Color Size</div>
          <RadioButton groupName="columnSize" checked>20</RadioButton>
          <RadioButton groupName="columnSize">40</RadioButton>
          <RadioButton groupName="columnSize">60</RadioButton>
        </div>
        <div className="option">
          <div>Toggle Grid Column Gap</div>
          <RadioButton groupName="columnGap" checked>1</RadioButton>
          <RadioButton groupName="columnGap">5</RadioButton>
          <RadioButton groupName="columnGap">10</RadioButton>
        </div>
        <div className="option">
          <div>Apply Value Mode</div>
          <RadioButton groupName="applyValueMode" checked>instantly</RadioButton>
          <RadioButton groupName="applyValueMode">useButtons</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

const App = () => {
  const colorpickerRef = useRef(null);

  useEffect(() => {
    const colorPicker = colorpickerRef.current;
    const messages = {
      ...colorPicker.messages,
      he: {
        redPrefix: 'ר:',
        greenPrefix: 'ז:',
        bluePrefix: 'ב:',
        hexPrefix: '#:',
        alphaPrefix: 'אלפא:',
        ok: 'בסדר',
        cancel: 'בטל',
        customColor: 'צבע מותאם אישית',
        standardColors: 'צבעים סטנדרטיים',
        themeColors: 'צבעי נושא'
      }
    };

    colorPicker.messages = messages;
    colorPicker.placeholder = 'אנא בחר צבע';
  }, []);

  return (
    <div>
      <div className="demo-description">
        <h1>smartColorPicker allows picking a color from a drop-down</h1>
      </div>
      <ColorPicker
        ref={colorpickerRef}
        enableCustomColors
        rightToLeft
        locale="he"
      />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { TimePicker } from 'smart-webcomponents-react/timepicker';

const App = () => {
  const timepicker = useRef(null);

  useEffect(() => {
    const templateWithButtons = document.createElement('template');

    templateWithButtons.id = 'templateWithButtons';
    templateWithButtons.innerHTML = `
      <smart-button class="flat primary">CANCEL</smart-button>
      <smart-button class="flat primary">OK</smart-button>
    `;

    document.body.appendChild(templateWithButtons);
  }, []);

  const handleReady = () => {
    if (timepicker.current) {
      timepicker.current.footerTemplate = 'templateWithButtons';
    }
  };

  return (
    <div>
      <TimePicker ref={timepicker} footer onReady={handleReady}></TimePicker>
    </div>
  );
};

export default App;

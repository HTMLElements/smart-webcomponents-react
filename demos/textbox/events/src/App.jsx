import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { TextBox } from 'smart-webcomponents-react/textbox';

const App = () => {
  const textbox = useRef(null);
  const log = useRef(null);

  const handleChange = (event) => {
    if (log.current) {
      log.current.innerHTML += '<br>' + '<b>' + event.type + '</b>' + ' event fired with details: ' +
        'newValue: <b>' + event.detail.value + '</b>' + ', oldValue: <b>' + event.detail.oldValue + '</b>';
    }
  };

  const handleButtonClick = () => {
    const label = ['One', 'Two', 'Three', 'Four', 'Five'];
    const textBox = textbox.current;
    const oldValue = textBox.value;

    textBox.value = label[Math.floor(Math.random() * 5)];

    // Fire a 'change' event with details
    textBox.nativeElement.$.fireEvent('change', {
      value: textBox.value,
      oldValue: oldValue
    });
  };

  return (
    <div>
      <TextBox ref={textbox} onChange={handleChange}></TextBox>
      <div className="options">
        <div className="caption">Settings</div>
        <Button onClick={handleButtonClick}>Press to Change Value</Button>
        <br />
        <br />
        <label>Event log:</label>
        <div ref={log} id="log"></div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';

function App() {
  const progressbar = useRef(null);
  const log = useRef(null);

  const setVal = (number) => {
    const customElement = progressbar.current;
    if (customElement) {
      customElement.value = number;
    }
  };

  const handleChange = (event) => {
    const newV = event.detail.value;
    const oldV = event.detail.oldValue;

    if (log.current) {
      log.current.innerHTML =
        '"change" event has been raised.' +
        '<br/><br/>' +
        'Event Details:' +
        '<br/>' +
        'newValue:' + newV +
        '<br/>' +
        'oldValue: ' + oldV;
    }
  };

  return (
    <div>
      <ProgressBar ref={progressbar} value={50} onChange={handleChange}></ProgressBar>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <div>
            <Button onClick={() => setVal(100)}>Set Value</Button>
          </div>
          <br />
          <div ref={log} id="log"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
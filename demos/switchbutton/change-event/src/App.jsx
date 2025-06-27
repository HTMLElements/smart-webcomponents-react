import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  const log = useRef(null);

  const handleChange = (event) => {
    const checkStatus = event.detail.value;
    if (log.current) {
      log.current.textContent = checkStatus.toString();
    }
  };

  return (
    <div>
      <div className="options">
        <div className="captions" id="checked">
          Checked: <span ref={log} id="log">false</span>
        </div>
      </div>
      <SwitchButton onChange={handleChange}></SwitchButton>
    </div>
  );
};

export default App;

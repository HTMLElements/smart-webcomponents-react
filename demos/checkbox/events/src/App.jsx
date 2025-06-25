import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const App = () => {
  const logRef = useRef(null);

  const handleChange = useCallback((event) => {
    if (logRef.current) {
      logRef.current.textContent = "Change event. Status: " + event.detail.value;
    }
  }, []);

  return (
    <div>
      <CheckBox onChange={handleChange}>Check Box</CheckBox>
      <div className="options">
        <div className="caption">Events</div>
        <div className="option">
          <span ref={logRef} id="log">Change event. Status: false</span>
        </div>
      </div>
    </div>
  );
};

export default App;

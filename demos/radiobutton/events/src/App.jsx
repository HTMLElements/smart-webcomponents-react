import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const log = useRef(null);

  const handleChange = (button, event) => {
    if (log.current) {
      log.current.textContent = 'Radio Button ' + button + ' is ' + event.detail.value;
    }
  };

  return (
    <div>
      <RadioButton onChange={e => handleChange(1, e)} checked>
        Radio Button 1
      </RadioButton>
      <RadioButton onChange={e => handleChange(2, e)}>
        Radio Button 2
      </RadioButton>
      
      <div className="options">
        <div className="Events"></div>
        <div className="option">
          <span ref={log} id="log"></span>
        </div>
      </div>
    </div>
  );
};

export default App;
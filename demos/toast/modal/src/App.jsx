import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

const App = () => {
  const toast = useRef(null);

  const handleClick = () => {
    toast.current.open();
  };

  return (
    <div>
      <Toast
        ref={toast}
        position="top-left"
        showCloseButton
        type="warning"
        modal
        className="blink"
      >
        Warning!
      </Toast>

      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button onClick={handleClick} id="openButton">Open Toast</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

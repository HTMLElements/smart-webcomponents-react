import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

const App = () => {
  const toast = useRef(null);
  const log = useRef(null);

  const handleEvent = (event) => {
    if (log.current) {
      log.current.innerHTML = event.type + '<br />' + log.current.innerHTML;
    }
  };

  const handleClick = () => {
    toast.current.open();
  };

  return (
    <div>
      <Toast
        ref={toast}
        onClose={handleEvent}
        onClick={handleEvent}
        onOpen={handleEvent}
        onSwipebottom={handleEvent}
        onSwipetop={handleEvent}
        onSwipeleft={handleEvent}
        onSwiperight={handleEvent}
        position="top-left"
        autoOpen
        autoClose
        showCloseButton
        autoCloseDelay={5000}
      >
        Toast!
      </Toast>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button onClick={handleClick} id="openButton">Open Toast</Button>
          <h2>Events log:</h2>
          <div ref={log} id="log"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

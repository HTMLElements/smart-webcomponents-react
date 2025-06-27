import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { WaitWindow } from 'smart-webcomponents-react/waitwindow';

const App = () => {
  const waitWindow = useRef(null);

  const handleEvent = () => {
    if (waitWindow.current.opened) {
      return;
    }
    waitWindow.current.open();
    setTimeout(() => {
      waitWindow.current.close();
    }, 2500);
  };

  return (
    <div>
      <div className="options">
        <div className="option">
          <Button onClick={handleEvent} id="openButton">Open</Button>
        </div>
      </div>
      <WaitWindow opened={false} ref={waitWindow} label="Wait Window" modal></WaitWindow>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
  const windowRef = useRef(null);

  const handleClick = () => {
    if (windowRef.current) {
      windowRef.current.opened ? windowRef.current.close() : windowRef.current.open();
    }
  };

  return (
    <div>
      <div className="options">
        <div className="option">
          <Button onClick={handleClick}>Open/Close</Button>
        </div>
      </div>
      <div id="windowContainer">
        <Window
          ref={windowRef}
          opened
          label="Nested Window"
          windowParent="windowContainer"
          resizeMode="both"
        >
          <div>This is a window inside a container</div>
        </Window>
      </div>
    </div>
  );
};

export default App;

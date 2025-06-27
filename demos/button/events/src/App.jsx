import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const logRef = useRef();
  const buttonRef = useRef();

  const handleEvent = (event) => {
    logRef.current.innerHTML = event.type;
  };

  return (
    <div>
      <Button 
        ref={buttonRef} 
        id="myButton" 
        onClick={handleEvent} 
        onFocus={handleEvent} 
        onBlur={handleEvent} 
        onMouseEnter={handleEvent} 
        onMouseLeave={handleEvent}
      >
        Click
      </Button>
      <div className="options">
        <div className="caption">Events</div>
        <div className="option" ref={logRef} id="log"></div>
      </div>
    </div>
  );
};

export default App;

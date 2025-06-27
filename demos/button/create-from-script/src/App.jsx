import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.innerHTML = "Clicked";
  };

  return (
    <div id="buttonContainer">
      <Button ref={buttonRef} onClick={handleClick} id="button">
        Click Me
      </Button>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const button = useRef(null);
  const log = useRef(null);

  const handleClick = () => {
    const buttonElement = button.current;
    buttonElement.disabled = true;
    log.current.innerHTML = "Disabled: " + buttonElement.nativeElement.getAttribute("disabled");
  };

  return (
    <div>
      <Button ref={button} id="button" onClick={handleClick}>Click Me</Button>
      <br />
      <br />
      <div ref={log} id="log">Disabled: false</div>
    </div>
  );
};

export default App;

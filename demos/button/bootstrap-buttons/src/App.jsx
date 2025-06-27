import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const button = useRef(null);
  const button2 = useRef(null);

  const handleClick = (buttonType) => {
    const submitButton = (buttonType === 'success' ? button : button2).current.nativeElement;

    if (submitButton.classList.contains('sending')) {
      submitButton.classList.remove('sending');
    } else {
      submitButton.classList.add('sending');
    }

    setTimeout(() => {
      submitButton.classList.remove('sending');
    }, 4500);
  };

  return (
    <div>
      <Button ref={button} onClick={() => handleClick('success')} className="submit success Button-element">Click Me</Button>
      <Button ref={button2} onClick={() => handleClick()} className="submit primary Button-element">Click Me</Button>
    </div>
  );
};

export default App;

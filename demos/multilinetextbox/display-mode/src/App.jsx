import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const multilinetextbox = useRef();

  const handleDefaultModeChange = () => {
    multilinetextbox.current.displayMode = 'default';
  };

  const handleEscapedModeChange = () => {
    multilinetextbox.current.displayMode = 'escaped';
  };

  return (
    <div>
      <RadioButton
        id="defaultMode"
        checked
        onChange={handleDefaultModeChange}
      >
        Default mode
      </RadioButton>
      <RadioButton
        id="escapedMode"
        onChange={handleEscapedModeChange}
      >
        Escaped mode
      </RadioButton>
      <br />
      <MultilineTextBox
        ref={multilinetextbox}
        enterKeyBehavior="newLine"
        placeholder="Your text"
        value=""
      ></MultilineTextBox>
    </div>
  );
};

export default App;

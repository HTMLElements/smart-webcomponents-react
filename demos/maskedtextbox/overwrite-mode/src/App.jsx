import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

const App = () => {
  const maskedtextbox = useRef();

  const handleChange = (event) => {
    if (maskedtextbox.current) {
      maskedtextbox.current.isOverwriteMode = event.detail.value;
    }
  };

  return (
    <div>
      <MaskedTextBox
        ref={maskedtextbox}
        id="maskedTextBox"
        value="10201"
        isOverwriteMode
        resetOnSpace
      />
      <br />
      <CheckBox
        onChange={handleChange}
        id="checkBox"
        checked
      >
        Is Overwrite Mode
      </CheckBox>
    </div>
  );
};

export default App;

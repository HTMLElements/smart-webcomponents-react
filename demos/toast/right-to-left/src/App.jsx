import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Toast } from 'smart-webcomponents-react/toast';

const App = () => {
  return (
    <div>
      <Toast
        position="top-left"
        autoOpen
        showCloseButton
        type="mail"
        className="blink"
        rightToLeft
      >
        יש לך 2 הודעות חדשות.
      </Toast>
    </div>
  );
};

export default App;

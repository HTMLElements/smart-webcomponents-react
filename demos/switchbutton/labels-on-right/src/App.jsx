import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  return (
    <div>
      <SwitchButton className="labels-on-right"></SwitchButton>
      <br />
    </div>
  );
};

export default App;

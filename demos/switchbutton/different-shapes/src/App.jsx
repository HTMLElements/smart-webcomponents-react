import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  return (
    <div>
      <SwitchButton className="ios-theme" checked inverted></SwitchButton>
      <br />
      <SwitchButton className="circle-theme"></SwitchButton>
      <br />
      <SwitchButton className="heart-theme"></SwitchButton>
    </div>
  );
};

export default App;

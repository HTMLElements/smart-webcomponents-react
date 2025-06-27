import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  return (
    <div>
      <SwitchButton className="fluid-theme"></SwitchButton>
      <SwitchButton className="fluid-theme" inverted></SwitchButton>
      <SwitchButton className="fluid-theme" disabled></SwitchButton>
      <SwitchButton className="fluid-theme" inverted disabled></SwitchButton>
    </div>
  );
};

export default App;

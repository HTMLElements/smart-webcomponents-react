import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  return (
    <div>
      <h3>Horizontal Switch Button</h3>
      <SwitchButton switchMode="click"></SwitchButton>
      <br />
      <SwitchButton switchMode="default"></SwitchButton>
      <br />
      <SwitchButton switchMode="drag"></SwitchButton>
      <br />
      <SwitchButton checked={null} switchMode="click"></SwitchButton>

      <h3>Vertical Switch Button</h3>
      <SwitchButton orientation="vertical" switchMode="click"></SwitchButton>
      <SwitchButton checked={null} orientation="vertical" switchMode="click"></SwitchButton>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ButtonGroup } from 'smart-webcomponents-react/buttongroup';

const App = () => {
  const dataSource = ["a", "b", "c"];

  return (
    <div>
      <ButtonGroup dataSource={dataSource}></ButtonGroup>
    </div>
  );
};

export default App;

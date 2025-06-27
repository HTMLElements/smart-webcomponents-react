import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ButtonGroup } from 'smart-webcomponents-react/buttongroup';

const App = () => {
  const dataSource = ["א", "ב", "ג"];

  return (
    <div>
      <ButtonGroup dataSource={dataSource} rightToLeft></ButtonGroup>
    </div>
  );
};

export default App;

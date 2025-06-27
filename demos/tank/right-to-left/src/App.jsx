import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  return (
    <div>
      <Tank
        orientation="horizontal"
        min={0}
        max={10}
        value={5}
        scalePosition="both"
        showUnit
        rightToLeft
        unit="ק\"ג"
      ></Tank>
      <br />
      <br />
      <Tank
        orientation="vertical"
        min={-100}
        max={0}
        value={-50}
        scalePosition="both"
        showUnit
        rightToLeft
        unit="ק\"ג"
      ></Tank>
    </div>
  );
};

export default App;

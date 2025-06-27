import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  return (
    <div>
      <Tank
        id="tank"
        logarithmicScale
        orientation="vertical"
        min={1}
        max={1000}
        value={100}
        scalePosition="both"
        showTooltip
      ></Tank>
    </div>
  );
}

export default App;

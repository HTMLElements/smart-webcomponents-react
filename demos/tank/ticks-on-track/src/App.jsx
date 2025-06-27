import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  return (
    <div>
      <Tank
        id="tank"
        orientation="vertical"
        min={0}
        max={50}
        value={20}
        scalePosition="both"
        ticksPosition="track"
      ></Tank>
    </div>
  );
};

export default App;

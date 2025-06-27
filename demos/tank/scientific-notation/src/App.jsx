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
        max={1000000000}
        value={100}
        scientificNotation
        logarithmicScale
      ></Tank>
    </div>
  );
};

export default App;

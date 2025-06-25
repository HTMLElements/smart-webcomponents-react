import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

const App = () => {
  const handleChange = (event) => {
    console.log("New Color: " + event.detail.value);
  };

  return (
    <div>
      <div className="demo-description">
        <h1>smartColorPicker allows picking a color from a drop-down</h1>
      </div>
      <ColorPicker onChange={handleChange} enableCustomColors />
    </div>
  );
};

export default App;

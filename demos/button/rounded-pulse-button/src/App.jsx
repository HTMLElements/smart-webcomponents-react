import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";  // Import React to use JSX
import { Button } from 'smart-webcomponents-react/button';  // Import Button component

const App = () => {
  return (
    <div>
      <div className="button-demo rounded-pulse-button">
        <label>Rounded Pulse Button</label>
        <div className="demo-buttons-group">
          <div className="text-box">
            <Button className="Button-element btn btn-white btn-animate">click me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

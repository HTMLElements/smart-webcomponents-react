import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";  // Import React to use JSX
import { Button } from 'smart-webcomponents-react/button';  // Import Button component

const App = () => {
  return (
    <div>
      <div className="button-demo simple-button">
        <label>Simple Button</label>
        <div className="demo-buttons-group">
          <Button className="button">button</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";  // Import React to use JSX
import { Button } from 'smart-webcomponents-react/button';  // Import Button component

const App = () => {
  return (
    <div>
      <div className="button-demo sliced-button">
        <label>Sliced Button</label>
        <div className="demo-buttons-group">
          <Button className="btn-slice" href="javascript:void(0)">
            <div className="top">
              <span>Sliced Button</span>
            </div>
            <div className="bottom">
              <span>Sliced Button</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

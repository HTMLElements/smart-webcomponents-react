import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {

  useEffect(() => {
    // You can put any logic that needs to run after the component mounts here.
  }, []);

  return (
    <div>
      <label>Flush button</label>

      <div className="button-demo flush-button">
        <div className="demo-buttons-group">
          <Button className="flush-btn">
            <div className="left"></div>Hover me!
            <div className="right"></div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

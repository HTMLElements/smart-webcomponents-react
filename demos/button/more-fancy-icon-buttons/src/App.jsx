import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {

  useEffect(() => {
    // Any logic that should run after component mounts can go here.
  }, []);

  return (
    <div>
      <div className="button-demo more-fancy-icon-buttons">
        <label>More fancy Icon buttons</label>
        <div className="demo-buttons-group">
          <div className="icon-container">
            <Button className="icon icon-fill"><i className="fa fa-home"></i></Button>
            <Button className="icon icon-enter"><i className="fa fa-user"></i></Button>
            <Button className="icon icon-expand"><i className="fa fa-bars"></i></Button>
            <Button className="icon icon-collapse"><i className="fa fa-sign-in"></i></Button>
            <Button className="icon icon-rotate"><i className="fa fa-phone"></i></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

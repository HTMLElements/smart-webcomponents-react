import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  return (
    <div>
      <div className="button-demo thin-buttons">
        <div className="header">
          <label>Thin Buttons</label>
        </div>
        <div className="buttons-group">
          <div className="box-1">
            <Button className="btn btn-one">
              <span>HOVER ME</span>
            </Button>
          </div>
          <div className="box-2">
            <Button className="btn btn-two">
              <span>HOVER ME</span>
            </Button>
          </div>
          <div className="box-3">
            <Button className="btn btn-three">
              <span>HOVER ME</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

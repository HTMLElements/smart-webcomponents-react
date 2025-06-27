import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  return (
    <div>
      <div className="button-demo threed-touch">
        <br />
        <div className="demo-buttons-group">
          <div className="button">
            <Button>Mobile First</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

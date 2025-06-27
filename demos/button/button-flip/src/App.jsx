import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  return (
    <div>
      <label>Button Flip. Hover the Button to Flip it</label>
      <div className="button-demo button-flip">
        <div className="demo-buttons-group">
          <Button className="flip-btn">
            <a href="javascript:void(0)" className="btn-flip" data-back="Back" data-front="Front"></a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

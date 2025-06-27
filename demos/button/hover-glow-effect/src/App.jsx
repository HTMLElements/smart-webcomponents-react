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
      <label>Hover Glow Effect</label>
      <div className="button-demo hover-glow-effect">
        <div className="demo-buttons-group">
          <Button className="glow-on-hover">Hover me, then click me!</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

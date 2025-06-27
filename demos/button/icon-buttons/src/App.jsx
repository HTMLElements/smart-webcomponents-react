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
      <div className="button-demo icon-buttons">
        <label>Icon buttons</label>
        <br />
        <div className="demo-buttons-group">
          <Button className="btn btn-1 btn-sep icon-info">Button</Button>
          <Button className="btn btn-2 btn-sep icon-cart">Button</Button>
          <Button className="btn btn-3 btn-sep icon-heart">Button</Button>
          <Button className="btn btn-4 btn-sep icon-send">Button</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

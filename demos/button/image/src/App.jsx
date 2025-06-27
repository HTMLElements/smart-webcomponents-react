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
      <Button className="Button-large"><span className="glyphicon glyphicon-ok"></span> OK</Button>
      <Button className="Button"><span className="glyphicon glyphicon-ok"></span> OK</Button>
      <Button className="Button-small"><span className="glyphicon glyphicon-ok"></span> OK</Button>
      <Button className="Button-very-small"><span className="glyphicon glyphicon-ok"></span> OK</Button>
    </div>
  );
};

export default App;

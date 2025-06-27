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
      <Button className="primary large"><i className="material-icons">&#xE53F;</i> Attractions</Button>
      <Button className="secondary"><i className="material-icons">&#xE53F;</i> Attractions</Button>
      <Button className="success small"><i className="material-icons">&#xE53F;</i> Attractions</Button>
      <Button className="very-small"><i className="material-icons">&#xE53F;</i> Attractions</Button>
    </div>
  );
};

export defaul

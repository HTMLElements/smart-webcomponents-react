import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  return (
    <div>
      <Button id="button">Button</Button>
      <Tooltip id="tooltip" selector="button" arrow>
        This is a tooltip for smartButton
      </Tooltip>
    </div>
  );
};

export default App;

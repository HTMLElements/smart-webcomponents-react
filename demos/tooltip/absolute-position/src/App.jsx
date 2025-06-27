import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  return (
    <div>
      <Button id="button">Button</Button>
      <Tooltip id="tooltip1" selector="button" position="absolute" offset={[2, 5]}>
        This is a tooltip with absolute position [2,5]
      </Tooltip>
      <Tooltip id="tooltip2" selector="button" position="absolute" offset={[2, 40]}>
        This is a tooltip with absolute position [2,40]
      </Tooltip>
      <Tooltip id="tooltip3" selector="button" position="absolute" offset={[2, 75]}>
        This is a tooltip with absolute position [2,75]
      </Tooltip>
      <Tooltip id="tooltip4" selector="button" position="absolute" offset={[2, 110]}>
        This is a tooltip with absolute position [2,110]
      </Tooltip>
    </div>
  );
};

export default App;

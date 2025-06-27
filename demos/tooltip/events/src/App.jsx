import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  const tooltip = useRef(null);
  const log = useRef(null);

  const handleChange = (event) => {
    if (tooltip.current) {
      tooltip.current.innerHTML = 'LED is: ' + (event.detail.value ? "ON" : "OFF");
    }
  };

  const handleEvent = (event) => {
    if (log.current) {
      log.current.innerHTML = event.type + ' event fired';
    }
  };

  return (
    <div>
      <Button id="led">Button</Button>
      <Tooltip
        ref={tooltip}
        id="tooltip"
        selector="led"
        arrow
        position="bottom"
        onOpen={handleEvent}
        onClose={handleEvent}
      >
        LED is OFF
      </Tooltip>
      <div className="options">
        <h3>Event log:</h3>
        <div ref={log} id="log"></div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';

const App = () => {
  const log = useRef(null);

  const handleEvent = (event) => {
    if (!event.detail) {
      return;
    }

    function getElement(event) {
      const element = document.createElement('div');

      element.textContent = 'Type: ' + event.type;

      if (event.detail.x) {
        element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
      }

      return element;
    }

    log.current.appendChild(getElement(event));
  };

  return (
    <div>
      <Splitter
        onResize={handleEvent}
        onExpand={handleEvent}
        onCollapse={handleEvent}
        onResizeStart={handleEvent}
        onResizeEnd={handleEvent}
      >
        <SplitterItem collapsible size="150"></SplitterItem>
        <SplitterItem collapsible></SplitterItem>
      </Splitter>
      <div className="options">
        <div>Event Log:</div>
        <div className="option ">
          <div ref={log} id="log">
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
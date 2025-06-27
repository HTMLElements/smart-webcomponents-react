import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
  const windowRef = useRef(null);

  const handleClick = () => {
    if (windowRef.current) {
      windowRef.current.opened ? windowRef.current.close() : windowRef.current.open();
    }
  };

  const handleMaximize = () => {
    if (windowRef.current) {
      windowRef.current.maximized ? windowRef.current.restore() : windowRef.current.maximize();
    }
  };

  const handleMinimize = () => {
    if (windowRef.current) {
      windowRef.current.minimized ? windowRef.current.restore() : windowRef.current.minimize();
    }
  };

  const handlePin = () => {
    if (windowRef.current) {
      windowRef.current.pinned ? windowRef.current.unpin() : windowRef.current.pin();
    }
  };

  const handleCollapse = () => {
    if (windowRef.current) {
      windowRef.current.collapsed ? windowRef.current.expand() : windowRef.current.collapse();
    }
  };

  const handleDisable = () => {
    if (windowRef.current) {
      windowRef.current.disabled = !windowRef.current.disabled;
    }
  };

  return (
    <div>
      <Window ref={windowRef} opened label="Window 1">
        <section>
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </Window>

      <div className="options">
        <div className="caption">Methods:</div>
        <div className="option">
          <Button onClick={handleClick}>Open/Close</Button>
        </div>
        <div className="option">
          <Button onClick={handleMaximize}>Maximize/Restore</Button>
        </div>
        <div className="option">
          <Button onClick={handleMinimize}>Minimize/Restore</Button>
        </div>
        <div className="option">
          <Button onClick={handlePin}>Pin/Unpin</Button>
        </div>
        <div className="option">
          <Button onClick={handleCollapse}>Collapse/Expand</Button>
        </div>
        <div className="option">
          <Button onClick={handleDisable}>Disable/Enable</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from 'react';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

const App = () => {
  const frameRef = useRef(null);
  const frameHeaderRef = useRef(null);
  const frameContentRef = useRef(null);

  const handleHeaderBackgroundChange = useCallback((event) => {
    if (frameHeaderRef.current) {
      frameHeaderRef.current.style.backgroundColor = event.detail.value;
    }
  }, []);

  const handleHeaderColorChange = useCallback((event) => {
    if (frameHeaderRef.current) {
      frameHeaderRef.current.style.color = event.detail.value;
    }
  }, []);

  const handleContentBackgroundChange = useCallback((event) => {
    if (frameContentRef.current) {
      frameContentRef.current.style.backgroundColor = event.detail.value;
    }
  }, []);

  const handleContentColorChange = useCallback((event) => {
    if (frameContentRef.current) {
      frameContentRef.current.style.color = event.detail.value;
    }
  }, []);

  const handleBorderChange = useCallback((event) => {
    if (frameRef.current) {
      frameRef.current.style.borderColor = event.detail.value;
    }
  }, []);

  return (
    <div>
      <div id="demoBox">
        <div ref={frameRef} id="frame">
          <div ref={frameHeaderRef} id="frameHeader">Header</div>
          <div ref={frameContentRef} id="frameContent">Content</div>
        </div>
      </div>
      <br />
      <div>Border Color</div>
      <br />
      <ColorPicker
        dropDownAppendTo="body"
        displayMode="default"
        dropDownWidth="auto"
        placeholder="Border Color"
        id="borderColor"
        onChange={handleBorderChange}
      />
      <br />
      <div>Header Background</div>
      <br />
      <ColorPicker
        dropDownAppendTo="body"
        displayMode="default"
        dropDownWidth="auto"
        placeholder="Header Background Color"
        id="headerBackground"
        onChange={handleHeaderBackgroundChange}
      />
      <div>Header Font Color</div>
      <br />
      <ColorPicker
        dropDownAppendTo="body"
        displayMode="default"
        dropDownWidth="auto"
        placeholder="Header Font Color"
        id="headerColor"
        onChange={handleHeaderColorChange}
      />
      <div>Background</div>
      <br />
      <ColorPicker
        dropDownAppendTo="body"
        displayMode="default"
        dropDownWidth="auto"
        placeholder="Background Color"
        id="background"
        onChange={handleContentBackgroundChange}
      />
      <div>Font Color</div>
      <br />
      <ColorPicker
        dropDownAppendTo="body"
        displayMode="default"
        dropDownWidth="auto"
        placeholder="Font Color"
        id="color"
        onChange={handleContentColorChange}
      />
    </div>
  );
};

export default App;

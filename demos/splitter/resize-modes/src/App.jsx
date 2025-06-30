import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';

function App() {
  const splitter = useRef(null);

  const handleChange = (mode) => {
    if (splitter.current) {
      splitter.current.resizeMode = mode;
    }
  };

  return (
    <div>
      <Splitter ref={splitter} id="horizontalSplitter" resizeMode="adjacent">
        <SplitterItem size="25%">Item 1</SplitterItem>
        <SplitterItem>Item 2</SplitterItem>
        <SplitterItem size="25%">Item 3</SplitterItem>
      </Splitter>
      <div className="options">
        <div className="caption">Resize Mode</div>
        <div className="option">
          <RadioButton onChange={() => handleChange('none')}>none</RadioButton>
          <br />
          <RadioButton checked onChange={() => handleChange('adjacent')}>adjacent</RadioButton>
          <br />
          <RadioButton onChange={() => handleChange('end')}>end</RadioButton>
          <br />
          <RadioButton onChange={() => handleChange('proportional')}>proportional</RadioButton>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
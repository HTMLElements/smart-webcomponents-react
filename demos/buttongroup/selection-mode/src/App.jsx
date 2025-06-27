import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ButtonGroup } from 'smart-webcomponents-react/buttongroup';
import { Input } from 'smart-webcomponents-react/input';

const App = () => {
  const buttonGroup = useRef(null);
  const options = useRef(null);

  const dataSource = ["a", "b", "c"];
  const selectionModes = ["none", "one", "zeroOrOne", "zeroOrMany"];

  useEffect(() => {
    const handleChange = (event) => {
      if (buttonGroup.current) {
        buttonGroup.current.selectionMode = event.detail.value;
      }
    };

    const optionsElement = options.current;
    optionsElement.addEventListener('change', handleChange);

    return () => {
      optionsElement.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div>
      <ButtonGroup ref={buttonGroup} dataSource={dataSource}></ButtonGroup>
      <div className="options" ref={options}>
        <h4>Select a Selection Mode:</h4>
        <div className="option">
          <Input
            readonly
            value="one"
            dataSource={selectionModes}
            dropDownButtonPosition="right"
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default App;

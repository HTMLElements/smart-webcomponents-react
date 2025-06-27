import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  return (
    <div>
      <SwitchButton>
        <span className="smart-true-content">On</span>
        <span className="smart-false-content">Off</span>
      </SwitchButton>
    </div>
  );
};

export default App;

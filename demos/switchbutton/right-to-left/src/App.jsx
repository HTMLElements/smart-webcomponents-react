import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  // You can add init logic here with useEffect if needed
  React.useEffect(() => {
    // init code if necessary
  }, []);

  return (
    <div>
      <h3>מתג אופקי מימין לשמאל</h3>
      <SwitchButton rightToLeft></SwitchButton>
      <h3>מתג אנכי מימין לשמאל</h3>
      <SwitchButton orientation="vertical" rightToLeft></SwitchButton>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {

  // If you want to run any init logic, use useEffect here
  React.useEffect(() => {
    // Your code here (replacing init/componentDidMount)
  }, []);

  return (
    <div>
      <p>
        On/off switches toggle the state of a single settings option. The option
        that the switch controls, as well as the state it’s in, should be made
        clear from the corresponding inline label. Switches take on the same visual
        properties of the radio button.
      </p>
      <br />
      <br />
      <SwitchButton checked></SwitchButton>
      <br />
      <br />
      <SwitchButton></SwitchButton>
    </div>
  );
};

export default App;

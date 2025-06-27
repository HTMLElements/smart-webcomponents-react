import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  return (
    <div>
      <form action="" name="testPost" method="get">
        <SwitchButton id="switchButton" name="switchButton" value="switchButtonValue"></SwitchButton>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;

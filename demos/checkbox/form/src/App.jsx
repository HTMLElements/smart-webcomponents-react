import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const App = () => {
  return (
    <div>
      <form action="" name="testPost" method="get">
        <CheckBox id="checkBox" name="checkBox" value="checkBoxValue">Check Box</CheckBox>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;

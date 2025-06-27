import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { TextBox } from 'smart-webcomponents-react/textbox';

const App = () => {
  return (
    <div>
      <TextBox selectAllOnFocus placeholder="smart Text Box"></TextBox>
    </div>
  );
};

export default App;

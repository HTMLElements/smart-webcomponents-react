import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MultiSplitButton } from 'smart-webcomponents-react/multisplitbutton';

const App = () => {
  const buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];

  // No equivalent of componentDidMount since it is empty

  return (
    <div>
      <MultiSplitButton buttonsDataSource={buttonsDataSource} id="multiSplitButton" />
    </div>
  );
};

export default App;
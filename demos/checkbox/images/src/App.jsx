import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const App = () => {
  useEffect(() => {
    // Equivalent to componentDidMount
    // You can place your initialization code here
  }, []);

  return (
    <div>
      <CheckBox checked className="heart">Check Box</CheckBox>
      <CheckBox className="heart">Check Box 2</CheckBox>
    </div>
  );
};

export default App;

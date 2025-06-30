import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { CountryInput } from 'smart-webcomponents-react/countryinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
  const input = useRef(null);

  useEffect(() => {
    // Equivalent to init() and componentDidMount
    let currentInput = input.current;
    // (You can add logic here if needed)
  }, []);

  return (
    <div>
      <CountryInput ref={input} placeholder="Empty"></CountryInput>
    </div>
  );
}

export default App;
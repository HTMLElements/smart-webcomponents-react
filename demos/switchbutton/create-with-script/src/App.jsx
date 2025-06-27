import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import SwitchButton from "smart-webcomponents-react/switchbutton";

const App = () => {
  useEffect(() => {
    ReactDOM.render(<SwitchButton />, document.getElementById('switchContainer'));
  }, []);

  return <div id="switchContainer"></div>;
};

export default App;

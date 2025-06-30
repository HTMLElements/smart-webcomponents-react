import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { ToggleButton } from 'smart-webcomponents-react/button';

const App = () => {
  const progressbar = useRef(null);
  const togglebutton = useRef(null);

  const handleChange = (event) => {
    const button = togglebutton.current;
    const progressBar = progressbar.current;

    if (button.checked) {
      progressBar.indeterminate = false;
    } else {
      progressBar.indeterminate = true;
    }
  };

  return (
    <div>
      <CircularProgressBar ref={progressbar} indeterminate value={100}>
        <ToggleButton ref={togglebutton} onChange={handleChange}></ToggleButton>
      </CircularProgressBar>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

function App() {
  return (
    <div>
      <ProgressBar id="progressbar1" value={50}></ProgressBar>
      <ProgressBar id="progressbar2" orientation="vertical" value={50}></ProgressBar>
      <CircularProgressBar id="progressbar3" value={50}></CircularProgressBar>
    </div>
  );
}

export default App;
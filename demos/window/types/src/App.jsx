import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { AlertWindow } from 'smart-webcomponents-react/alertwindow';
import { ProgressWindow } from 'smart-webcomponents-react/progresswindow';
import { PromptWindow } from 'smart-webcomponents-react/promptwindow';

const App = () => {
  return (
    <div>
      <AlertWindow opened label="Alert Window">
        Operation Successful !
      </AlertWindow>

      <ProgressWindow opened label="Progress Window" max={50}>
        Loading...
      </ProgressWindow>

      <PromptWindow opened label="Prompt Window" prompt-label="Enter your name:" />
    </div>
  );
};

export default App;

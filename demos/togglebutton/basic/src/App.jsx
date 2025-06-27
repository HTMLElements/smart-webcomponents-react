import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ToggleButton } from 'smart-webcomponents-react/button';

const App = () => {

  // If you need to run any init logic, you can use useEffect here
  React.useEffect(() => {
    // init logic here if needed
  }, []);

  return (
    <div>
      <div className="demo-horizontal-layout">
        <div>
          <div className="demo-buttons-group">
            <ToggleButton className="primary">Toggle Button</ToggleButton>
            <ToggleButton className="primary raised">Raised Toggle Button</ToggleButton>
            <ToggleButton className="primary outlined">Outlined Toggle Button</ToggleButton>
            <ToggleButton className="primary flat">Flat Toggle Button</ToggleButton>
            <ToggleButton className="primary floating">
              <span className="glyphicon glyphicon-cloud"></span>
            </ToggleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

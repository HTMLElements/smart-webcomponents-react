import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";  // Import React and useEffect for lifecycle methods.
import { Button } from 'smart-webcomponents-react/button';  // Import the Button component from Smart UI library.

const App = () => {

  // useEffect hook to replicate componentDidMount, runs after the component is mounted
  useEffect(() => {
    // Code to run once when the component is mounted
  }, []);  // Empty dependency array ensures this runs once after the first render

  return (
    <div>
      {/* Render the demo for swipe-right button */}
      <div className="button-demo swipe-right-button">
        <label>Swipe Right Button</label>
        <div className="demo-buttons-group">
          <div className="wrapper">
            {/* Button with a hover link inside */}
            <Button className="swipe-right-btn">
              <a href="javascript:void(0);">
                <span>Hover Me!</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
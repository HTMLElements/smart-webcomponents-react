import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";  // Import React and useEffect hook for side effects.
import { Button } from 'smart-webcomponents-react/button';  // Import the Button component from Smart UI library.

const App = () => {

  // The init function can be replaced by useEffect for initialization logic
  useEffect(() => {
    // This will act like componentDidMount
    // You can place any initialization logic you need here
  }, []);  // Empty dependency array means this effect runs only once when the component is mounted

  return (
    <div>
      {/* A div container for a rounded button demo */}
      <div className="button-demo rounded-button">
        {/* Label for the button */}
        <label>Rounded Button</label>
        {/* Group of buttons inside a container */}
        <div className="demo-buttons-group">
          {/* A button with a class of 'button' that displays a hover effect */}
          <Button className="button">Hover me</Button>
        </div>
      </div>
    </div>
  );
}

export default App;

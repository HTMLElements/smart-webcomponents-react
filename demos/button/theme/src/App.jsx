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
      {/* Render a Button with a specific class and id */}
      <Button className="smart-material" id="button">Click Me</Button>
    </div>
  );
}

export default App;

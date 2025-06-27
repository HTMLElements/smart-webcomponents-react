import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";  // Import React and useEffect for lifecycle methods.
import { Button } from 'smart-webcomponents-react/button';  // Import the Button component from Smart UI library.

const App = () => {

  // useEffect hook to replace componentDidMount, running after the component is mounted
  useEffect(() => {
    // Code here will run once when the component mounts
    // You can perform side effects like fetching data or initializing other tasks
  }, []);  // Empty array ensures it runs only once after the first render

  return (
    <div>
      {/* Rendering a div element containing a Button component */}
      <Button></Button>
    </div>
  );
}

export default App;

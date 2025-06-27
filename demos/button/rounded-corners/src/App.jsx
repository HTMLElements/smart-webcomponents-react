import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {

  // The init function can be replaced by useEffect for initialization logic
  useEffect(() => {
    // This will act like componentDidMount
    // You can place any logic you need to execute after the component has been mounted here
  }, []);  // Empty dependency array means this effect runs only once when the component is mounted

  return (
    <div>
      <Button className="smart-rounded-corners" id="button">Click Me</Button>
    </div>
  );
}

export default App;

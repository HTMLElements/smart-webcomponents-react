import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";  // Import React and useEffect hook for side effects.
import { Button } from 'smart-webcomponents-react/button';  // Import the Button component from Smart UI library.

const App = () => {

  // This useEffect hook replaces componentDidMount, for running side-effects on mount
  useEffect(() => {
    // This will be executed after the component is mounted
    // You can add any side effects here like fetching data or initializing other tasks
  }, []);  // Empty dependency array means it will only run once when the component is mounted.

  return (
    <div>
      {/* A div container for the group of buttons */}
      <div className="demo-buttons-group">
        {/* A set of Button components with different classes and right-to-left text alignment */}
        <Button rightToLeft>רגיל.</Button>  {/* Normal button */}
        <Button className="raised" rightToLeft>גויס.</Button>  {/* Raised button */}
        <Button className="outlined" rightToLeft>מתואר</Button>  {/* Outlined button */}
        <Button className="flat" rightToLeft>שטוח</Button>  {/* Flat button */}
      </div>
    </div>
  );
}

export default App;

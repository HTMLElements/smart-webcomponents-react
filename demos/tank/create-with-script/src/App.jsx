import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  const tankRef = useRef(null);

  useEffect(() => {
    const tank = tankRef.current;
    if (tank) {
      tank.value = 50;               // number, not string
      tank.orientation = 'vertical';
      tank.focus();
    }
  }, []); // run once after mount

  return (
    <div>
      <Tank ref={tankRef} />
    </div>
  );
}

export default App;

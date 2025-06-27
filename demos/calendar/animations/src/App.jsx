import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  const calendar = useRef(null);

  const [animationOn, setAnimationOn] = useState(true);
  const [animationDirectionLandscape, setAnimationDirectionLandscape] = useState(true);

  useEffect(() => {
    if (calendar.current) {
      calendar.current.animation = animationOn ? 'advanced' : 'none';
    }
  }, [animationOn]);

  useEffect(() => {
    if (calendar.current) {
      calendar.current.scrollButtonsNavigationMode = animationDirectionLandscape ? 'landscape' : 'portrait';
    }
  }, [animationDirectionLandscape]);

  const handleAnimationChange = (event) => {
    setAnimationOn(event.detail.value);
  };

  const handleAnimationDirectionChange = (event) => {
    setAnimationDirectionLandscape(event.detail.value);
  };

  return (
    <div>
      <h3 id="log">smartCalendar animations {animationOn ? 'On' : 'Off'}</h3>
      <br />
      <h3 id="animationSwitchLabel">Toggle animation</h3>
      <SwitchButton
        onChange={handleAnimationChange}
        id="animationSwitch"
        switchMode="click"
        checked={animationOn}
      >
        <span className="smart-true-content">ON</span>
        <span className="smart-false-content">OFF</span>
      </SwitchButton>

      <Calendar ref={calendar} id="calendar"></Calendar>

      <br />
      <h3 id="animationDirectionSwitchLabel">Animation direction</h3>
      <SwitchButton
        onChange={handleAnimationDirectionChange}
        id="animationDirectionSwitch"
        switchMode="click"
        checked={animationDirectionLandscape}
      >
        <span className="smart-true-content">Landscape</span>
        <span className="smart-false-content">Portrait</span>
      </SwitchButton>
    </div>
  );
};

export default App;

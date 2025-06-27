import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Slider } from 'smart-webcomponents-react/slider';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  const slider = useRef(null);
  const tank = useRef(null);
  const gauge = useRef(null);

  const handleRedTicksClick = () => {
    if (slider.current) slider.current.nativeElement.style.setProperty('--smart-tick-color', 'red');
    if (tank.current) tank.current.nativeElement.style.setProperty('--smart-tick-color', 'red');
    if (gauge.current) gauge.current.nativeElement.style.setProperty('--smart-tick-color', 'red');
  };

  const handleBlueTicksClick = () => {
    if (slider.current) slider.current.nativeElement.style.setProperty('--smart-tick-color', 'blue');
    if (tank.current) tank.current.nativeElement.style.setProperty('--smart-tick-color', 'blue');
    if (gauge.current) gauge.current.nativeElement.style.setProperty('--smart-tick-color', 'blue');
  };

  const handleRedLabelsClick = () => {
    if (slider.current) slider.current.nativeElement.style.setProperty('--smart-tick-label-color', 'red');
    if (tank.current) tank.current.nativeElement.style.setProperty('--smart-tick-label-color', 'red');
    if (gauge.current) gauge.current.nativeElement.style.setProperty('--smart-tick-label-color', 'red');
  };

  const handleBlueLabelsClick = () => {
    if (slider.current) slider.current.nativeElement.style.setProperty('--smart-tick-label-color', 'blue');
    if (tank.current) tank.current.nativeElement.style.setProperty('--smart-tick-label-color', 'blue');
    if (gauge.current) gauge.current.nativeElement.style.setProperty('--smart-tick-label-color', 'blue');
  };

  const handleResizeClick = () => {
    if (slider.current) slider.current.nativeElement.style.width = '500px';
    if (tank.current) tank.current.nativeElement.style.height = '100px';
    if (gauge.current) gauge.current.nativeElement.style.width = '200px';
  };

  return (
    <div>
      <Slider
        ref={slider}
        id="slider"
        showTooltip
        orientation="horizontal"
        min={0}
        max={100}
        value={30}
        scalePosition="both"
      ></Slider>
      <Tank
        ref={tank}
        id="tank"
        showTooltip
        min={0}
        max={100}
        value={30}
        scalePosition="both"
      ></Tank>
      <Gauge
        ref={gauge}
        id="gauge"
        analogDisplayType="fill"
        digitalDisplay
        startAngle={-30}
        endAngle={210}
        min={0}
        max={100}
        value={0}
      ></Gauge>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button id="redTicks" onClick={handleRedTicksClick}>
            tick color to <span style={{ color: 'red' }}>red</span>
          </Button>
          <Button id="blueTicks" onClick={handleBlueTicksClick}>
            tick color to <span style={{ color: 'blue' }}>blue</span>
          </Button>
          <br />
          <Button id="redLabels" onClick={handleRedLabelsClick}>
            label color to <span style={{ color: 'red' }}>red</span>
          </Button>
          <Button id="blueLabels" onClick={handleBlueLabelsClick}>
            label color to <span style={{ color: 'blue' }}>blue</span>
          </Button>
          <br />
          <Button id="resize" onClick={handleResizeClick}>
            Resize elements
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

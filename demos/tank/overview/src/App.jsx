import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  const cpuTank = useRef(null);
  const [cpuValue, setCpuValue] = useState(0);
  const [powerSaverValue, setPowerSaverValue] = useState(80);
  const powerSaverRef = useRef(null);

  // Updates the --smart-primary color CSS variable based on the tank's value
  const setTemperature = (event) => {
    const tank = event.target;
    let color = '#0C9F59'; // default green

    if (tank.value === '0') {
      color = '';
    } else if (tank.value < tank.max * 0.25) {
      color = '#DB4534'; // red
    } else if (tank.value > tank.max * 0.2 && tank.value < tank.max * 0.70) {
      color = '#FFEB3B'; // yellow
    }

    tank.style.setProperty('--smart-primary', color);
    setPowerSaverValue(tank.value);
  };

  // Simulate CPU usage updates every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (cpuTank.current) {
        const newValue = Math.random() * 100;
        cpuTank.current.value = newValue;
        setCpuValue(newValue.toFixed(0));
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="smart-demo-container">
      <div id="materialTankContainer">
        <section>
          <div>
            <h2>Tanks similar to the sliders, let users select a value within a range.</h2>
            <div className="module">
              <p>Tanks are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation.</p>
              <p>Tanks have controllable fill area that can be adjusted to the desired level.</p>
            </div>
            <div className="module"></div>
          </div>
        </section>
        <nav>
          <h2>Contents</h2>
          <ul>
            <li><a href="#continuousTanks">Continuous tank</a></li>
            <li><a href="#discreteTanks">Discrete tank</a></li>
            <li><a href="#scaleTanks">Scales</a></li>
            <li><a href="#verticalTanks">Orientation</a></li>
            <li><a href="#demoTank">Demo</a></li>
          </ul>
        </nav>
        <section id="continuousTanks">
          <h2>Continuous tank</h2>
          <div className="module">
            <p>Use continuous tanks for subjective settings that do not require a specific value for the user to make meaningful adjustments.</p>
          </div>
          <Tank scalePosition="none"></Tank>
          <br /><br />
          <Tank value={50} scalePosition="none"></Tank>
          <br /><br />
          <Tank value={100} scalePosition="none"></Tank>
          <br /><br />
        </section>
        <section id="discreteTanks">
          <h2>Discrete tank</h2>
          <div className="module">
            <p>Use for objective settings that require specific values for the user to make meaningful adjustments. Each tick mark should change the setting to a level that’s discernible to the user. The values are predetermined and aren’t user-editable.</p>
            <p>The thumb label can be repositioned on the near or the far side of the tank using the thumbLabelPosition property.</p>
          </div>
          <Tank scaleType="integer" showThumbLabel value={50} coerce></Tank>
        </section>
        <section id="scaleTanks">
          <h2>Scales</h2>
          <div className="module">
            <p>smartTank with a scale.</p>
          </div>
          <div className="module scaleTank">
            <div>
              <Tank scaleType="integer" scalePosition="near" ticks-position="scale" ticksVisibility="major" value={25}></Tank>
              <br /><br />
              <Tank scaleType="integer" ticks-position="track" ticksVisibility="major" value={50}></Tank>
              <br /><br />
              <Tank scaleType="integer" scalePosition="far" ticks-position="scale" ticksVisibility="major" value={75}></Tank>
              <br /><br />
            </div>
            <p>Continuous tanks with scale positions: near, track and far</p>
          </div>
        </section>
        <section id="verticalTanks">
          <h2>Orientation</h2>
          <div className="module">
            <p>smartTank can be horizontal or vertical depending on the orientation property.</p>
            <p>By the default the tank is vertically oriented. The property "orientation" determines the orientation.</p>
          </div>
          <div className="module">
            <div>
              <Tank orientation="horizontal" showThumbLabel scaleType="integer" scalePosition="none" value={50}></Tank>
              <Tank orientation="horizontal" showThumbLabel thumb-label-position="far" scaleType="integer" scalePosition="none" value={50} inverted></Tank>
            </div>
            <p>Horizontal tank, thumbLabelPosition near / Horizontal inverted tank, thumbLabelPosition far</p>
          </div>
          <div className="module">
            <div>
              <Tank orientation="horizontal" showThumbLabel scaleType="integer" scalePosition="near" value={50}></Tank>
              <Tank orientation="horizontal" showThumbLabel thumb-label-position="far" scaleType="integer" scalePosition="far" value={50} inverted></Tank>
            </div>
            <p>Horizontal tank with a near positioned scale, thumbLabelPosition near / Horizontal inverted tank with a far position scale, thumbLabelPosition far</p>
          </div>
        </section>
        <section id="demoTank">
          <h2>Demo</h2>
          <div className="module">
            <p>Tanks are controls that are used for adjusting values precisely.</p>
            <p>Can be used as readonly displays that indicate the current processor usage or as battery controls.</p>
          </div>
          <div className="module media-controls">
            <div>
              <h2>Statistics</h2>
              <div>
                <h3>CPU Usage <b id="cpu">{cpuValue}</b>%</h3>
                <div className="controls">
                  <i className="material-icons">&#xE322;</i>
                  <Tank
                    ref={cpuTank}
                    id="cpuTank"
                    scalePosition="near"
                    value={0}
                    scaleType="integer"
                    labelFormatFunction={label => label + '%'}
                    ticksVisibility="major"
                    readonly
                  ></Tank>
                </div>
              </div>
            </div>
          </div>
          <div className="module power-controls">
            <div>
              <h2>Battery Saver Mode</h2>
              <div>
                <h3>Power saver mode active on <b id="powerSaver">{powerSaverValue}</b>%</h3>
                <div id="alarmControl" className="controls">
                  <Tank
                    onChange={setTemperature}
                    id="powerSaverTank"
                    scalePosition="none"
                    value={powerSaverValue}
                    scaleType="integer"
                    showThumbLabel
                    ref={powerSaverRef}
                  ></Tank>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

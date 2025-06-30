import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
  const gauge = useRef();
  const gauge2 = useRef();
  const gauge3 = useRef();
  const gauge4 = useRef();
  const gauge5 = useRef();
  const gauge6 = useRef();
  const gauge7 = useRef();
  const gauge8 = useRef();
  const gauge9 = useRef();
  const gauge10 = useRef();

  // Will hold the array of gauge instances
  let gauges = [];

  // Initialize gauges array AFTER refs are assigned
  useEffect(() => {
    gauges = [
      gauge.current,
      gauge2.current,
      gauge3.current,
      gauge4.current,
      gauge5.current,
      gauge6.current,
      gauge7.current,
      gauge8.current,
      gauge9.current,
      gauge10.current
    ];
  }, []);

  // Handlers using the up-to-date refs; need to access current refs at use time.
  const getGauges = () => [
    gauge.current,
    gauge2.current,
    gauge3.current,
    gauge4.current,
    gauge5.current,
    gauge6.current,
    gauge7.current,
    gauge8.current,
    gauge9.current,
    gauge10.current
  ];

  const handleAllChange = () => {
    getGauges().forEach(g => {
      if (g) g.labelsVisibility = 'all';
    });
  };

  const handleEndPointsChange = () => {
    getGauges().forEach(g => {
      if (g) g.labelsVisibility = 'endPoints';
    });
  };

  const handleNoneChange = () => {
    getGauges().forEach(g => {
      if (g) g.labelsVisibility = 'none';
    });
  };

  const handleMajorChange = () => {
    getGauges().forEach(g => {
      if (g) g.ticksVisibility = 'major';
    });
  };

  const handleMinorChange = () => {
    getGauges().forEach(g => {
      if (g) g.ticksVisibility = 'minor';
    });
  };

  const handleNoTicksChange = () => {
    getGauges().forEach(g => {
      if (g) g.ticksVisibility = 'none';
    });
  };

  return (
    <div>
      <h3>Gauge with analogDisplayType: 'needle'</h3>
      <div>
        <div className="gauge-container">
          <Gauge ref={gauge} digitalDisplay analogDisplayType="needle" startAngle={-30}
            min="0" max="100" endAngle={210} value="10" scalePosition="outside"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge2} digitalDisplay analogDisplayType="needle" startAngle={-30}
            min="0" max="100" endAngle={210} value="20" scalePosition="inside"></Gauge>
        </div>
      </div>
      <br style={{ clear: 'both' }} />
      <h3>Gauge with analogDisplayType: 'fill'</h3>
      <div>
        <div className="gauge-container">
          <Gauge ref={gauge3} digitalDisplay analogDisplayType="fill" startAngle={-30}
            min="0" max="100" endAngle={210} value="30" scalePosition="outside" ticksPosition="scale"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge4} digitalDisplay analogDisplayType="fill" startAngle={-30}
            min="0" max="100" endAngle={210} value="40" scalePosition="inside" ticksPosition="scale"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge5} digitalDisplay analogDisplayType="fill" startAngle={-30}
            min="0" max="100" endAngle={210} value="50" scalePosition="inside" ticksPosition="track"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge6} digitalDisplay analogDisplayType="fill" startAngle={-30}
            min="0" max="100" endAngle={210} value="60" scalePosition="outside" ticksPosition="track"></Gauge>
        </div>
      </div>
      <br style={{ clear: 'both' }} />
      <h3>Gauge with analogDisplayType: 'line'</h3>
      <div>
        <div className="gauge-container">
          <Gauge ref={gauge7} digitalDisplay analogDisplayType="line" startAngle={-30}
            min="0" max="100" endAngle={210} value="70" scalePosition="outside" ticksPosition="scale"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge8} digitalDisplay analogDisplayType="line" startAngle={-30}
            min="0" max="100" endAngle={210} value="60" scalePosition="inside" ticksPosition="scale"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge9} digitalDisplay analogDisplayType="line" startAngle={-30}
            min="0" max="100" endAngle={210} value="50" scalePosition="inside" ticksPosition="track"></Gauge>
        </div>
        <div className="gauge-container">
          <Gauge ref={gauge10} digitalDisplay analogDisplayType="line" startAngle={-30}
            min="0" max="100" endAngle={210} value="40" scalePosition="outside" ticksPosition="track"></Gauge>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <div className="caption">Labels</div>
          <RadioButton id="all" name="labelsVisibility"
            checked onChange={handleAllChange}>
            <label htmlFor="all">All</label>
          </RadioButton>
          <br />
          <RadioButton id="endPoints" name="labelsVisibility"
            onChange={handleEndPointsChange}>
            <label htmlFor="endPoints">Endpoints</label>
          </RadioButton>
          <br />
          <RadioButton id="none" name="labelsVisibility"
            onChange={handleNoneChange}>
            <label htmlFor="none">None</label>
          </RadioButton>
          <br />
        </div>
        <hr />
        <div className="option">
          <div className="caption">Tick Marks</div>
          <RadioButton id="major" name="ticksVisibility"
            onChange={handleMajorChange}>
            <label htmlFor="major">Major</label>
          </RadioButton>
          <br />
          <RadioButton id="minor" name="ticksVisibility"
            checked onChange={handleMinorChange}>
            <label htmlFor="minor">Minor</label>
          </RadioButton>
          <br />
          <RadioButton id="noTicks" name="ticksVisibility"
            onChange={handleNoTicksChange}>
            <label htmlFor="noTicks">None</label>
          </RadioButton>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
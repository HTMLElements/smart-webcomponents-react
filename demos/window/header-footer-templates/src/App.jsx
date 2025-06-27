import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Window } from 'smart-webcomponents-react/window';
import { PowerButton } from 'smart-webcomponents-react/button';
import ReactDOM from 'react-dom/client';

const App = () => {
  const windowRef = useRef(null);
  const gaugeRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (gaugeRef.current && buttonRef.current) {
      gaugeRef.current.disabled = !buttonRef.current.checked;
    }
  };

  const handleChange = (event) => {
    document.getElementById('value').textContent = event.detail.value;
  };

  const handleReady = () => {
    ReactDOM.createRoot(document.getElementById('powerButtonContainer')).render(
      <PowerButton ref={buttonRef} id="power" checked onClick={handleClick}></PowerButton>
    );
  };

  useEffect(() => {
    const headerTemplate = document.createElement('template');
    const footerTemplate = document.createElement('template');

    headerTemplate.innerHTML = '<div id="powerButtonContainer"></div><label>Gauge</label>';
    footerTemplate.innerHTML = '<div>Value: <span id="value"></span></div>';

    headerTemplate.id = 'headerTemplate';
    footerTemplate.id = 'footerTemplate';

    document.body.appendChild(headerTemplate);
    document.body.appendChild(footerTemplate);

    if (windowRef.current) {
      windowRef.current.headerTemplate = headerTemplate.id;
      windowRef.current.footerTemplate = footerTemplate.id;
    }
  }, []);

  return (
    <div>
      <Window ref={windowRef} opened onReady={handleReady}>
        <section>
          <Gauge
            ref={gaugeRef}
            analogDisplayType="needle"
            startAngle={-30}
            endAngle={210}
            min={0}
            max={100}
            value={0}
            sizeMode="auto"
            onChange={handleChange}
          />
        </section>
      </Window>
    </div>
  );
};

export default App;

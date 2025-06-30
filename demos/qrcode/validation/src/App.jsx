import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const qrcode = useRef();

  const handleBtnClick = useCallback(() => {
    if (qrcode.current) {
      qrcode.current.value = "ABCDEFFГФЩЪ";
    }
  }, []);

  const handleEvent = useCallback((event) => {
    const detail = event.detail;
    document.getElementById('value').textContent = detail.value;
    document.getElementById('pattern').textContent = detail.patternValidity;
    document.getElementById('length').textContent = detail.lengthValidity;
    document.getElementById('chars').textContent = detail.invalidCharacters.join(', ');
  }, []);

  return (
    <div>
      <p>When the QR Code is set to an invalid value, the <b>invalid</b> event will be triggered.</p>
      The event contains information such as
      <ul>
        <li>the validity of the length</li>
        <li>the validity of the pattern</li>
        <li>an array of the illegal characters</li>
      </ul>
      <p>In addition, the <b>isValid</b> method returns a boolean indicating the validity of the QR Code.</p>
      <QRcode
        ref={qrcode}
        id="QRcodeToValidate"
        value="ABCDEF"
        onInvalid={handleEvent}
        labelPosition="bottom"
        labelFontSize={30}
      />
      <br />
      <h3>Event detail:</h3>
      <ul>
        <li>new Value: <b><span id="value"></span></b></li>
        <li>patternValidity: <b><span id="pattern"></span></b></li>
        <li>lengthValidity: <b><span id="length"></span></b></li>
        <li>illegal Characters: <b><span id="chars"></span></b></li>
      </ul>
      <div className="options">
        <div className="caption">Validity</div>
        <div className="option">
          <Button onClick={handleBtnClick} id="btn1">
            Set to invalid value
          </Button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;

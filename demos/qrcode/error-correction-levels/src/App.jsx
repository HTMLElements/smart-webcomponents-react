import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
  const qrcodeRef = useRef();

  const handleLowClick = () => {
    if (qrcodeRef.current) {
      qrcodeRef.current.errorLevel = "L";
    }
  };

  const handleHighClick = () => {
    if (qrcodeRef.current) {
      qrcodeRef.current.errorLevel = "H";
    }
  };

  return (
    <div>
      <p>Use the settings menu to change the error correction level of the QR Code.</p>
      <p>
        The higher the Error Correction Level,
        the higher is the amount of data that can be retrieved if part of the QR Code is damaged or hidden.
      </p>
      <QRcode ref={qrcodeRef} value="HTMLELEMENTS.COM" renderAs="canvas"></QRcode>
      <br />
      <div className="options">
        <div className="caption">Error Correction Level</div>
        <div className="option">
          <RadioButton id="ToLow" onClick={handleLowClick}>Set to Low</RadioButton>
          <br /><br />
          <RadioButton id="ToHigh" onClick={handleHighClick}>Set to High</RadioButton>
        </div>
      </div>
    </div>
  );
}

export default App;
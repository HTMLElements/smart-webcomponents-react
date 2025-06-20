import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useRef, useState, useCallback } from 'react';
import { Barcode } from 'smart-webcomponents-react/barcode';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const barcodeRef = useRef(null);
  const [eventDetails, setEventDetails] = useState({
    value: '',
    patternValidity: '',
    lengthValidity: '',
    invalidCharacters: []
  });

  const handleBtnClick = useCallback(() => {
    if (barcodeRef.current) {
      barcodeRef.current.value = 'A222B@!';
    }
  }, []);

  const handleEvent = useCallback((event) => {
    const { detail } = event;
    setEventDetails({
      value: detail.value,
      patternValidity: detail.patternValidity,
      lengthValidity: detail.lengthValidity,
      invalidCharacters: detail.invalidCharacters
    });
  }, []);

  return (
    <div>
      <p>When the barcode is set to an invalid value, the <b>invalid</b> event will be triggered.</p>
      The event contains information such as:
      <ul>
        <li>the validity of the length</li>
        <li>the validity of the pattern</li>
        <li>an array of the illegal characters</li>
      </ul>
      <p>In addition, the <b>isValid</b> method returns a boolean indicating the validity of the barcode.</p>
      <Barcode
        ref={barcodeRef}
        id="BarcodeToValidate"
        value="A5600B"
        onInvalid={handleEvent}
        labelPosition="bottom"
        labelFontSize={30}
      />
      <br />
      <h3>Event detail:</h3>
      <ul>
        <li>new Value: <b><span>{eventDetails.value}</span></b></li>
        <li>patternValidity: <b><span>{eventDetails.patternValidity}</span></b></li>
        <li>lengthValidity: <b><span>{eventDetails.lengthValidity}</span></b></li>
        <li>illegal Characters: <b><span>{eventDetails.invalidCharacters.join(', ')}</span></b></li>
      </ul>
      <div className="options">
        <div className="caption">Validity</div>
        <div className="option">
          <Button onClick={handleBtnClick} id="btn1">Set to invalid value</Button>
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default App;

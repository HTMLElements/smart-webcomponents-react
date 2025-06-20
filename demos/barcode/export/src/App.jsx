import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const barcode = useRef(null);

  const handleSVGBtnClick = () => {
    barcode.current.export('svg');
  };

  const handlePNGBtnClick = () => {
    barcode.current.export('png');
  };

  const handleJPGBtnClick = () => {
    barcode.current.export('jpg');
  };

  return (
    <div>
      <p>Click on the export buttons to create a downloadable file.</p>
      <Barcode ref={barcode} id="barcodeToExport" value="A5600B" labelPosition="bottom" labelFontSize={30} />
      <br />
      <div className="options">
        <div className="caption">Export</div>
        <div className="option">
          <Button id="btn1" onClick={handleSVGBtnClick}>Export as SVG</Button>
          <br /><br />
          <Button id="btn2" onClick={handlePNGBtnClick}>Export as PNG</Button>
          <br /><br />
          <Button id="btn3" onClick={handleJPGBtnClick}>Export as JPG</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useRef, useState } from "react";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const barcode = useRef(null);
  const backgroundColor = useRef(null);
  const lineColor = useRef(null);
  const lineWidth = useRef(null);
  const lineHeight = useRef(null);
  const labelColor = useRef(null);
  const labelFontSize = useRef(null);

  const handleBtnClick = () => {
    if (barcode.current) {
      barcode.current.backgroundColor = backgroundColor.current.value;
      barcode.current.lineColor = lineColor.current.value;
      barcode.current.lineWidth = lineWidth.current.value;
      barcode.current.lineHeight = lineHeight.current.value;
      barcode.current.labelColor = labelColor.current.value;
      barcode.current.labelFontSize = labelFontSize.current.value;
    }
  };

  return (
    <div>
      <p>The barcode component supports a wide variety of customization options.</p>
      <p>Use the settings menu to style the barcode:</p>
      <Barcode ref={barcode} id="BarcodeToStyle" value="A5600B" />
      <br />
      <div className="options">
        <h4>Background Color:</h4>
        <ColorPicker ref={backgroundColor} id="background-color" className="option" value="white" />
        <br />
        <h4>Line Color:</h4>
        <ColorPicker ref={lineColor} id="line-color" className="option" value="black" />
        <br />
        <h4>Line Width:</h4>
        <NumberInput ref={lineWidth} id="line-width" className="option" value={4} min={1} max={10} />
        <br />
        <h4>Line Height:</h4>
        <NumberInput ref={lineHeight} id="line-height" className="option" value={50} min={25} max={100} />
        <br />
        <h4>Label Color:</h4>
        <ColorPicker ref={labelColor} id="label-color" className="option" value="black" />
        <br />
        <h4>Label Font Size:</h4>
        <NumberInput ref={labelFontSize} id="label-font-size" className="option" value={14} max={60} min={10} />
        <br /><br />
        <Button onClick={handleBtnClick} id="apply-btn">Apply</Button>
      </div>
    </div>
  );
};

export default App;

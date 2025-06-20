import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const [renderAs, setRenderAs] = useState('svg');
  const barcodeRef = useRef(null);
  const elementHTMLRef = useRef(null);

  useEffect(() => {
    elementHTMLRef.current.textContent = barcodeRef.current.nativeElement.firstChild.firstChild.outerHTML;
  }, [renderAs]);

  const handleSVGOptionClick = () => {
    setRenderAs('svg');
  };

  const handleCanvasOptionClick = () => {
    setRenderAs('canvas');
  };

  return (
    <div>
      <p>The barcode component supports &lt;svg&gt; and &lt;canvas&gt; rendering modes.</p>
      <p>Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.</p>
      <Barcode renderAs={renderAs} ref={barcodeRef} id="BarcodeToRender" value="A5600B" labelPosition="bottom" labelFontSize={30} />
      <br />
      <h3>Rendered HTML:</h3>
      <div>
        <code ref={elementHTMLRef} id="element-html" />
      </div>
      <div className="options">
        <div className="caption">Render Mode</div>
        <div className="option">
          <RadioButton onClick={handleSVGOptionClick} id="svg-option" checked={renderAs === 'svg'}>Render as SVG</RadioButton>
          <br /><br />
          <RadioButton onClick={handleCanvasOptionClick} id="canvas-option" checked={renderAs === 'canvas'}>Render as Canvas</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const qrcodeRef = useRef();

  // Helper function to update the code view
  const updateRenderedHtml = () => {
    const smartQrcode = document.querySelector('smart-qrcode');
    if (smartQrcode && smartQrcode.firstChild && smartQrcode.firstChild.firstChild) {
      document.getElementById('element-html').textContent = smartQrcode.firstChild.firstChild.outerHTML;
    }
  };

  const handleSVGOptionClick = () => {
    if (qrcodeRef.current) {
      qrcodeRef.current.renderAs = "svg";
      updateRenderedHtml();
    }
  };

  const handleCanvasOptionClick = () => {
    if (qrcodeRef.current) {
      qrcodeRef.current.renderAs = "canvas";
      updateRenderedHtml();
    }
  };

  useEffect(() => {
    updateRenderedHtml();
  }, []);

  return (
    <div>
      <p>The QR Code component supports &lt;svg&gt; and &lt;canvas&gt; rendering modes.</p>
      <p>Using the <b>svg</b> rendering mode is recommended as the QR Code doesn't lose quality when it is zoomed.</p>
      <QRcode
        ref={qrcodeRef}
        id="QRcodeToRender"
        value="HTMLELEMENTS.COM"
        labelPosition="bottom"
        labelFontSize={30}
      ></QRcode>
      <br />
      <h3>Rendered HTML:</h3>
      <div>
        <code id="element-html"></code>
      </div>
      <div className="options">
        <div className="caption">Render Mode</div>
        <div className="option">
          <RadioButton onClick={handleSVGOptionClick} id="svg-option" checked>
            Render as SVG
          </RadioButton>
          <br /><br />
          <RadioButton onClick={handleCanvasOptionClick} id="canvas-option">
            Render as Canvas
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;
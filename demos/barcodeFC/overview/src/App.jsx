import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  return (
    <div className="smart-demo container">
      <div>
        <section>
          <div>
            <h2>A barcode is a method of representing data in a visual, machine-readable form.</h2>
            <div className="module">
              <p>
                Barcodes are ideal components for programmatically encoding data.
                They are commonly used for storing data such as item serial numbers in retailers and warehouses.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Barcode rendering modes</h2>
          <div className="module">
            <p>
              Barcodes can be rendered as an &lt;svg&lt; and &lt;canvas&lt; element.<br />
              Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.
            </p>
          </div>
          <div className="module">
            <Barcode render-as="svg" type="code128a" value="SVG RENDER" />
            <Barcode render-as="canvas" type="code128a" value="CANVAS REN" />
          </div>
        </section>

        <section>
          <h2>Barcode Types</h2>
          <div className="module">
            <p>
              The barcode element supports a wide range of the most common barcode types available:
              <ul>
                <li><b>PharmaCode</b></li>
                <li><b>CodaBar</b></li>
                <li><b>Code128A | Code128B | Code128C</b></li>
                <li><b>MSI | MSI10 | MSI11 | MSI1010 | MSI1110</b></li>
                <li><b>EAN8 | EAN13</b></li>
                <li><b>Code39</b></li>
                <li><b>Code93</b></li>
              </ul>
            </p>
          </div>
          <div>
            <Barcode type="pharmacode" value="12345" />
            <Barcode type="code128c" value="22481203" />
            <Barcode type="codabar" value="A2402B" />
            <Barcode type="code39" value="*1234*" />
            <Barcode type="code128a" value="EXAMPLE" />
          </div>
        </section>

        <section>
          <h2>Appearance</h2>
          <div className="module">
            <p>The barcode's color, background color and bar dimensions can be customized by their respective properties.</p>
            <p>The label of the barcode can be set to visible or hidden with <b>displayLabel</b>.
              Its color, font, size, margins and position can be customized by their respective properties.
            </p>
          </div>
          <div className="module">
            <Barcode value="A2402B" labelPosition="top" labelFontSize={30} labelColor="orange" labelFont="arial" />
          </div>
        </section>

        <section>
          <h2>Demo</h2>
          <div className="module"></div>
          <div id="barcode-demo-container" className="module">
            <div className="card-container">
              <div className="card-body">
                <h3>Dinner Table</h3>
                <img height="150" alt="Dinner table" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kitchen_table.jpg/1280px-Kitchen_table.jpg" />
                <Button className="success purchase-button">Purchase Now</Button>
              </div>
              <div className="card-footer">
                <Barcode value="23849" type="code128c" labelFont="arial" />
              </div>
            </div>
            <div className="card-container">
              <div className="card-body">
                <h3>Modern Wardrobe</h3>
                <img height="150" alt="Modern Wardrobe" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Sliding-wardrobe.jpg" />
                <Button className="success purchase-button">Purchase Now</Button>
              </div>
              <div className="card-footer">
                <Barcode value="86941" type="code128c" labelFont="arial" />
              </div>
            </div>
            <div className="card-container">
              <div className="card-body">
                <h3>Office Chair</h3>
                <img height="150" alt="Office Chair" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Aeron_chair_JN.jpg" />
                <Button className="success purchase-button">Purchase Now</Button>
              </div>
              <div className="card-footer">
                <Barcode value="03278" type="code128c" labelFont="arial" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Barcode } from 'smart-webcomponents-react/barcode';

const App = () => {
  return (
    <div className="container">
      <h3>The Barcode element supports a wide range of the most common Barcode types available</h3>

      <div>Pharmacode:</div>
      <Barcode id="pharma" type="pharmacode" value="1234" />

      <div>Codabar:</div>
      <Barcode type="codabar" value="A2402B" />

      <div>Code128 A | B | C:</div>
      <Barcode type="code128c" value="22481203" />
      <Barcode type="code128a" value="EXAMPLE" />
      <Barcode type="code128b" value="example" />

      <br />
      <div>MSI 10 | 11:</div>
      <Barcode type="msi10" value="12345" />
      <Barcode type="msi11" value="67890" />

      <div>Code39:</div>
      <Barcode type="code39" value="*1234567AB" lineWidth={2} />
    </div>
  );
};

export default App;

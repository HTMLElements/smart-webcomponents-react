import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';

function App() {
    return (
        <div className="container">
            <h3>
                QR Code is a two-dimensional version of the barcode. It typically contains data that points to a website or application.
            </h3>
            <QRcode value="HTMLELEMENTS.COM" />
        </div>
    );
}

export default App;

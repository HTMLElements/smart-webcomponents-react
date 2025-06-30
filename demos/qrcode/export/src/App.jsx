import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { Button } from 'smart-webcomponents-react/button';

function App() {
    const qrcode = useRef();

    const handleSVGBtnClick = () => {
        qrcode.current.export('svg');
    };

    const handlePNGBtnClick = () => {
        qrcode.current.export('png');
    };

    const handleJPGBtnClick = () => {
        qrcode.current.export('jpg');
    };

    // init and componentDidMount not needed unless side effects are required

    return (
        <div>
            <p>Click on the export buttons to create a downloadable file.</p>
            <QRcode ref={qrcode} id="qrcodeToExport" value="HTMLELEMENTS.COM" labelPosition="bottom" squareWidth={12}></QRcode>
            <br />
            <div className="options">
                <div className="caption">Export</div>
                <div className="option">		
                    <Button id="btn1" onClick={handleSVGBtnClick}>Export as SVG</Button>
                    <br/><br/>
                    <Button id="btn2" onClick={handlePNGBtnClick}>Export as PNG</Button>
                    <br/><br/>
                    <Button id="btn3" onClick={handleJPGBtnClick}>Export as JPG</Button>
                </div>
            </div>
        </div>
    );
}

export default App;

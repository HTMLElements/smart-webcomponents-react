import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { Button } from 'smart-webcomponents-react/button';

function App() {
    return (
        <div className="smart-demo container"> 
            <section>
                <div>
                    <h2>
                        A QR Code is a type of two-dimensional barcode that representing data in a visual, machine-readable form.
                    </h2>
                    <div className="module">
                        <p>
                            QR codes are ideal components for programmatically encoding data.
                            They are often cused to ontain data for a locator, identifier, or tracker that points to a website or application.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2>QR Code rendering modes</h2>
                <div className="module">
                    <p>
                        QR Codes can be rendered as an &lt;svg&gt; and &lt;canvas&gt; element.
                        Using the <b>svg</b> rendering mode is recommended as the QR Code doesn't lose quality when it is zoomed.
                    </p>
                </div>
                <div className="module qrcode-container">
                    <QRcode renderAs="svg" value="SVG RENDER"></QRcode>
                    <QRcode renderAs="canvas" value="CANVAS REN"></QRcode>
                </div>
            </section>

            <section>
                <h2>QR Code Encoding Modes</h2>
                <div className="module">
                    <p>
                        The qrcode element supports the following encoding modes:
                    </p>
                    <ul>
                        <li>
                            <b>Numeric</b>
                        </li>
                        <li>
                            <b>Alphanumeric</b>
                        </li>
                        <li>
                            <b>Byte / Binary</b>
                        </li>
                        <li>
                            <b>Kanji</b>
                        </li>
                    </ul>
                </div>
                <div className="module qrcode-container">
                    <QRcode  value="こんにちは世界" display-label="true" labelPosition="top" labelFontSize={20}></QRcode>
                    <QRcode  value="HELLO WORLD" display-label="true" labelPosition="top" labelFontSize={20}></QRcode>
                </div>
            </section>

            <section>
                <h2>QR Code Error Correction Levels</h2>
                <div className="module">
                    <p>
                        The QR Code component supports all four error correction levels: <b>L</b>, <b>M</b>, <b>Q</b>, and <b>H</b>.
                        The higher the Error Correction Level, the higher is the amount of data that can be retrieved if part of the QR Code is damaged or hidden. 
                    </p>
                </div>
                <div className="module qrcode-container">
                    <div>
                        <h4><b>L</b> level encoding of <b>"Hello world"</b></h4>
                        <QRcode value="Hello world" errorLevel="L"></QRcode>
                    </div>
                    <div>
                        <h4><b>H</b> level encoding of <b>"Hello world"</b></h4>
                        <QRcode value="Hello world" errorLevel="H"></QRcode>
                    </div>
                </div>
            </section>

            <section>
                <h2>QR Code Embed Image</h2>
                <div className="module">
                    <p>
                        When the Error Correction Level is sufficiently high, it is possible to embed an Image inside the QR Code.
                        The maximum size of the image depends on the Error Correction Level and the QR Code value.
                    </p>
                </div>
                <div className="module qrcode-container">
                    <QRcode 
                        value="GITHUB.COM" 
                        embedImage="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                        imageWidth={40} 
                        imageHeight={60}
                    ></QRcode>
                    <QRcode 
                        value="ANGULAR.IO" 
                        embedImage="https://angular.io/assets/images/logos/angular/angular.svg"
                        imageWidth={60} 
                        imageHeight={60}
                    ></QRcode>
                </div>
            </section>

            <section>
                <h2>Appearance</h2>
                <div className="module">
                    <p>The QR Code's color, background color and square dimensions can be customized by their respective properties.</p>
                    <p>The label of the QR Code can be set to visible or hidden with <b>displayLabel</b>.
                        Its color, font, size, margins and position can be customized by their respective properties.</p>
                </div>
                <div className="module qrcode-container">
                    <QRcode
                        value="HTMLELEMENTS.COM"
                        labelPosition="top"
                        labelFontSize={15}
                        labelCOlor="orange"
                        labelFont="arial"
                        lineColor="orange"
                        display-label="true"
                    ></QRcode>
                    <QRcode
                        value="JQWIDGETS.COM"
                        labelPosition="top"
                        labelFontsize="20"
                        labelCOlor="red"
                        labelFont="helvetica"
                        lineColor="darkblue"
                        display-label="true"
                    ></QRcode>
                </div>	
            </section>

            <section>
                <h2>Demo</h2>
                <div id="barcode-demo-container" className="module">
                    <div className="card-container">
                        <div className="card-body">
                            <h3>Rock Concert</h3>
                            <img height="170" alt="Rock Concert" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Interior_del_estadio_Ruca_Che.JPG"/>
                            <h4>For more information:</h4>
                        </div>
                        <div className="card-footer">
                            <QRcode value="Rock Concert" squareWidth={6}></QRcode>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card-body">
                            <h3>7-day Spa Vacation</h3>
                            <img height="170" alt="Spa massage" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Taj_Spa_4.jpg"/>
                            <h4>For more information:</h4>
                        </div>
                        <div className="card-footer">
                            <QRcode value="Spa Vacation" squareWidth={6}></QRcode>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card-body">
                            <h3>10-day Skiing Holiday</h3>
                            <img height="170" alt="Skiing village" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ruka_Village_%288361909910%29.jpg/1280px-Ruka_Village_%288361909910%29.jpg"/>
                            <h4>For more information:</h4>
                        </div>
                        <div className="card-footer">
                            <QRcode value="Skiing Holiday" squareWidth={6}></QRcode>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
    const qrcode = useRef();
    const backgroundColor = useRef();
    const lineColor = useRef();
    const squareWidth = useRef();
    const displayLabel = useRef();
    const labelColor = useRef();
    const labelFontSize = useRef();

    const handleBtnClick = () => {
        if (!qrcode.current) return;

        // Get values from refs
        const bgColor = backgroundColor.current ? backgroundColor.current.value : 'white';
        const lnColor = lineColor.current ? lineColor.current.value : 'black';
        const sqWidth = squareWidth.current ? squareWidth.current.value : 12;
        // For displayLabel, get checked property
        const dispLabel = displayLabel.current ? displayLabel.current.checked : false;
        const lblColor = labelColor.current ? labelColor.current.value : 'black';
        const lblFontSize = labelFontSize.current ? labelFontSize.current.value : 14;

        qrcode.current.backgroundColor = bgColor;
        qrcode.current.lineColor = lnColor;
        qrcode.current.squareWidth = sqWidth;
        qrcode.current.displayLabel = dispLabel;
        qrcode.current.labelColor = lblColor;
        qrcode.current.labelFontSize = lblFontSize;
    };

    return (
        <div>
            <p>The QR Code component supports a wide variety of customization options.</p>
            <p>Use the settings menu to style the QR Code:</p>
            <QRcode ref={qrcode} id="QRcodeToStyle" value="HTMLELEMENTS.COM" squareWidth={12}></QRcode>
            <br />
            <div className="options">
                <h4>Background Color:</h4>
                <ColorPicker ref={backgroundColor} id="background-color" className="option" value="white"></ColorPicker>
                <br />
                <h4>Line Color:</h4>
                <ColorPicker ref={lineColor} id="line-color" className="option" value="black"></ColorPicker>
                <br />
                <h4>Square Width:</h4>
                <NumberInput ref={squareWidth} id="square-width" className="option" value={12} min={8} max={30}></NumberInput>
                <br />
                <h4>Display Label:</h4>
                <CheckBox ref={displayLabel} id="label-display" className="option">Visible</CheckBox>
                <br />
                <h4>Label Color:</h4>
                <ColorPicker ref={labelColor} id="label-color" className="option" value="black"></ColorPicker>
                <br />
                <h4>Label Font Size:</h4>
                <NumberInput ref={labelFontSize} id="label-font-size" className="option" value={14} max={60} min={10}></NumberInput>
                <br /><br />
                <Button onClick={handleBtnClick} id="apply-btn">Apply</Button>
            </div>
        </div>
    );
};

export default App;

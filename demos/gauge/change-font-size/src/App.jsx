import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Gauge } from 'smart-webcomponents-react/gauge';

function App() {
    const gaugeRef = useRef();

    const handleFontSizeButtonClick = () => {
        if (gaugeRef.current) {
            gaugeRef.current.nativeElement.style.fontSize = '20px';
        }
    };

    const handleColorButtonClick = () => {
        if (gaugeRef.current) {
            const svg = gaugeRef.current.nativeElement.getElementsByTagName('svg')[0];
            if (svg) {
                svg.style.stroke = 'red';
                svg.style.fill = 'red';
            }
        }
    };

    const handleResizeButtonClick = () => {
        if (gaugeRef.current) {
            gaugeRef.current.nativeElement.style.width = '500px';
        }
    };

    return (
        <div>
            <Gauge
                ref={gaugeRef}
                id="gauge"
                analogDisplayType="fill"
                digitalDisplay
                startAngle={-30}
                endAngle={210}
                min="0"
                max="100"
                value="0"
            ></Gauge>
            <div className="options">
                <div className="caption">Appearance</div>
                <div className="option">
                    <Button id="fontSizeButton" onClick={handleFontSizeButtonClick}>
                        Set font-size to 20px
                    </Button>
                </div>
                <div className="option">
                    <Button id="colorButton" onClick={handleColorButtonClick}>
                        Set label fill and stroke to red
                    </Button>
                </div>
                <div className="option">
                    <Button id="resizeButton" onClick={handleResizeButtonClick}>
                        Resize Gauge
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;

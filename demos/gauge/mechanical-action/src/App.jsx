import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
    const gauge = useRef();
    const gauge2 = useRef();
    const gauge3 = useRef();

    const handleSwitchWhileDraggingChange = () => {
        if (gauge.current && gauge2.current && gauge3.current) {
            gauge.current.mechanicalAction = 'switchWhileDragging';
            gauge2.current.mechanicalAction = 'switchWhileDragging';
            gauge3.current.mechanicalAction = 'switchWhileDragging';
        }
    };

    const handleSwitchUntilReleasedChange = () => {
        if (gauge.current && gauge2.current && gauge3.current) {
            gauge.current.mechanicalAction = 'switchUntilReleased';
            gauge2.current.mechanicalAction = 'switchUntilReleased';
            gauge3.current.mechanicalAction = 'switchUntilReleased';
        }
    };

    const handleSwitchWhenReleasedChange = () => {
        if (gauge.current && gauge2.current && gauge3.current) {
            gauge.current.mechanicalAction = 'switchWhenReleased';
            gauge2.current.mechanicalAction = 'switchWhenReleased';
            gauge3.current.mechanicalAction = 'switchWhenReleased';
        }
    };

    return (
        <div>
            <Gauge
                ref={gauge}
                id="needleGauge"
                analogDisplayType="needle"
                digitalDisplay
                startAngle={-30}
                endAngle={210}
                min="0"
                max="100"
                value="100"
            />
            <Gauge
                ref={gauge2}
                id="fillGauge"
                analogDisplayType="fill"
                digitalDisplay
                startAngle={-30}
                endAngle={210}
                min="0"
                max="100"
                value="20"
                ticks-position="scale"
            />
            <Gauge
                ref={gauge3}
                id="lineGauge"
                analogDisplayType="line"
                digitalDisplay
                startAngle={-30}
                endAngle={210}
                min="0"
                max="100"
                value="75"
                ticks-position="scale"
            />
            <div className="options">
                <div className="caption">Mechanical action</div>
                <div className="option">
                    <RadioButton
                        id="switchWhileDragging"
                        name="mechanicalAction"
                        checked
                        onChange={handleSwitchWhileDraggingChange}
                    >
                        <label htmlFor="switchWhileDragging">switchWhileDragging</label>
                    </RadioButton>
                    <br />
                    <RadioButton
                        type="radio"
                        id="switchUntilReleased"
                        name="mechanicalAction"
                        onChange={handleSwitchUntilReleasedChange}
                    >
                        <label htmlFor="switchUntilReleased">switchUntilReleased</label>
                    </RadioButton>
                    <br />
                    <RadioButton
                        type="radio"
                        id="switchWhenReleased"
                        name="mechanicalAction"
                        onChange={handleSwitchWhenReleasedChange}
                    >
                        <label htmlFor="switchWhenReleased">switchWhenReleased</label>
                    </RadioButton>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default App;
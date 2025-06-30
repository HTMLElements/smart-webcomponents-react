import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Gauge } from 'smart-webcomponents-react/gauge';

const App = () => {
    const gauge = useRef();
    const gauge2 = useRef();
    const gauge3 = useRef();
    const gauge4 = useRef();

    const gauge4LabelFormatFunction = useCallback((value) => {
        return String.fromCharCode(64 + parseFloat(value));
    }, []);

    const handleToggleCustomIntervalChange = useCallback((event) => {
        const checked = event.detail.value;

        if (gauge.current) gauge.current.customInterval = checked;
        if (gauge2.current) gauge2.current.customInterval = checked;
        if (gauge3.current) gauge3.current.customInterval = checked;
        if (gauge4.current) gauge4.current.customInterval = checked;
    }, []);

    const handleToggleCoerceChange = useCallback((event) => {
        const checked = event.detail.value;

        if (gauge.current) gauge.current.coerce = checked;
        if (gauge2.current) gauge2.current.coerce = checked;
        if (gauge3.current) gauge3.current.coerce = checked;
        if (gauge4.current) gauge4.current.coerce = checked;
    }, []);

    return (
        <div>
            <div className="container">
                <Gauge
                    ref={gauge}
                    id="gauge1"
                    analogDisplayType="fill"
                    coerce
                    scalePosition="outside"
                    min="0"
                    max="10000"
                    value="100"
                    customInterval
                    customTicks={[100, 1000, 5000, 10000]}
                />
                <p>Gauge with floating point scale:</p>
            </div>
            <div className="container">
                <Gauge
                    ref={gauge2}
                    id="gauge2"
                    analogDisplayType="fill"
                    coerce
                    scalePosition="outside"
                    scaleType="integer"
                    significantDigits={3}
                    wordLength="int64"
                    min="-9223372036854775808"
                    max="9223372036854775807"
                    value="-3e18"
                    customInterval
                    customTicks={[-9e18, -3e18, 1e18, 9e18]}
                />
                <p>Gauge with 64-bit Integer scale:</p>
            </div>
            <div className="container">
                <Gauge
                    ref={gauge3}
                    id="gauge3"
                    analogDisplayType="fill"
                    coerce
                    logarithmicScale
                    scalePosition="outside"
                    min="1"
                    max="100"
                    value="55"
                    customInterval
                    customTicks={[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]}
                />
                <p>Gauge with logarithmic scale and Fibonacci numbers as custom ticks:</p>
            </div>
            <div className="container">
                <Gauge
                    ref={gauge4}
                    id="gauge4"
                    analogDisplayType="fill"
                    labelFormatFunction={gauge4LabelFormatFunction}
                    coerce
                    scalePosition="outside"
                    min="1"
                    max="26"
                    value="10"
                    customInterval
                    customTicks={[1, 2, 3, 5, 10, 13, 18, 22, 24, 26]}
                />
                <p>Gauge with letters:</p>
            </div>
            <div className="options">
                <div className="caption">Settings</div>
                <div className="option">
                    <CheckBox
                        id="toggleCustomInterval"
                        checked
                        onChange={handleToggleCustomIntervalChange}
                    >
                        Custom interval
                    </CheckBox>
                </div>
                <div className="option">
                    <CheckBox
                        id="toggleCoerce"
                        checked
                        onChange={handleToggleCoerceChange}
                    >
                        Coerce
                    </CheckBox>
                </div>
            </div>
        </div>
    );
};

export default App;

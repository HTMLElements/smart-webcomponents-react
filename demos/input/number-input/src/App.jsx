import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { NumberInput } from 'smart-webcomponents-react/numberinput';

function App() {
    // Create refs for all NumberInput elements used
    const numberinput = useRef();
    const numberinput3 = useRef();

    const numericInput = useRef();
    const currencyInput = useRef();
    const currencyInputLocalized = useRef();
    const accountingInput = useRef();
    const percentInput = useRef();
    const customInput = useRef();

    useEffect(() => {
        if (numericInput.current) {
            numericInput.current.numberFormat = {
                minimumFractionDigits: 2
            };
        }
        if (currencyInput.current) {
            currencyInput.current.numberFormat = {
                style: 'currency',
                currency: 'USD'
            };
        }
        if (currencyInputLocalized.current) {
            currencyInputLocalized.current.numberFormat = {
                style: 'currency',
                currency: 'EUR'
            };
            currencyInputLocalized.current.locale = 'de';
        }
        if (accountingInput.current) {
            accountingInput.current.numberFormat = {
                style: 'currency',
                currency: 'USD',
                currencySign: 'accounting'
            };
        }
        if (percentInput.current) {
            percentInput.current.numberFormat = {
                style: "percent"
            };
        }
        if (customInput.current) {
            customInput.current.numberFormat = {
                style: "unit",
                unit: "liter",
                unitDisplay: "long"
            };
        }
    }, []); // Runs on mount

    return (
        <div>
            <div className="demo-description">
                <p>
                    <b>Smart.NumberInput</b> is an input that allows you to easily enter and
                    format numbers. It uses the Intl.NumberFormat API for formatting the numbers.
                </p>
            </div>
            <h2>Styling and Appearance</h2>
            <h3>Default "1000"</h3>
            <NumberInput ref={numberinput} placeholder="Please Enter a Number"></NumberInput>
            <h3>Underlined</h3>
            <NumberInput ref={numberinput} className="underlined" placeholder="Please Enter a Number"></NumberInput>
            <h3>Outlined</h3>
            <NumberInput ref={numberinput3} className="outlined" placeholder="Please Enter a Number"></NumberInput>
            <h2>Number Formats</h2>
            <h3>Number "1000.42"</h3>
            <NumberInput ref={numericInput} value={1000.42} id="numericInput" placeholder="Please Enter a Number"></NumberInput>
            <h4>Currency "$1000.42"</h4>
            <NumberInput ref={currencyInput} value={1000.42} id="currencyInput" placeholder="Please Enter a Currency"></NumberInput>
            <h4>Accounting "($1000.42)"</h4>
            <NumberInput ref={accountingInput} value={-1000.42} min={-9999} id="accountingInput"
                placeholder="Please Enter a Currency"></NumberInput>
            <h4>Currency Localized "1000,42 EUR"</h4>
            <NumberInput ref={currencyInputLocalized} value={1000.42} id="currencyInputLocalized"
                placeholder="Please Enter a Currency"></NumberInput>
            <h4>Percent "10%"</h4>
            <NumberInput ref={percentInput} value={10} id="percentInput" placeholder="Please Enter a Percent"></NumberInput>
            <h4>Custom "10 litres"</h4>
            <NumberInput ref={customInput} value={10} id="customInput" placeholder="Please Enter litres"></NumberInput>
            <br />
            <br />
            <br />
        </div>
    );
}

export default App;

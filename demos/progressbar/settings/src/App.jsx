import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

function App() {
    const progressbar = useRef();
    const progressbar2 = useRef();
    const progressbar3 = useRef();
    const input = useRef();
    const button = useRef();
    const button2 = useRef();
    const button3 = useRef();
    const button4 = useRef();
    const button5 = useRef();
    const button6 = useRef();
    const button7 = useRef();

    const setValue = () => {
        const customElement = progressbar.current,
            progressBar2 = progressbar2.current,
            progressBar3 = progressbar3.current,
            inputEl = input.current;
        const value = parseInt(inputEl.value, 10) || 0;

        customElement.value = value;
        progressBar2.value = value;
        progressBar3.value = value;
    };

    const setSettings = (key) => {
        const progressBar1 = progressbar.current,
            progressBar2 = progressbar2.current,
            progressBar3 = progressbar3.current;
        const layoutButtons = [button2.current, button3.current];
        const minButtons = [button4.current, button5.current];
        const maxButtons = [button6.current, button7.current];

        switch (key) {
            case 'normal':
                progressBar1.inverted = false;
                progressBar2.inverted = false;
                progressBar3.inverted = false;
                layoutButtons[0].disabled = true;
                layoutButtons[1].disabled = false;
                break;
            case 'inverted':
                progressBar1.inverted = true;
                progressBar2.inverted = true;
                progressBar3.inverted = true;
                layoutButtons[0].disabled = false;
                layoutButtons[1].disabled = true;
                break;
            case 0:
                progressBar1.min = 0;
                progressBar2.min = 0;
                progressBar3.min = 0;
                minButtons[0].disabled = true;
                minButtons[1].disabled = false;
                break;
            case 50:
                progressBar1.min = 50;
                progressBar2.min = 50;
                progressBar3.min = 50;
                minButtons[0].disabled = false;
                minButtons[1].disabled = true;
                break;
            case 100:
                progressBar1.max = 100;
                progressBar2.max = 100;
                progressBar3.max = 100;
                maxButtons[0].disabled = true;
                maxButtons[1].disabled = false;
                break;
            case 200:
                progressBar1.max = 200;
                progressBar2.max = 200;
                progressBar3.max = 200;
                maxButtons[0].disabled = false;
                maxButtons[1].disabled = true;
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="progress-bar-layout">
                <span className="label">Horizontal</span>
                <ProgressBar
                    ref={progressbar}
                    id="progressbar1"
                    className="smart-unselectable"
                    value={50}
                    showProgressValue
                ></ProgressBar>
                <span className="label">Vertical</span>
                <ProgressBar
                    ref={progressbar2}
                    id="progressbar2"
                    className="smart-unselectable"
                    orientation="vertical"
                    value={50}
                    showProgressValue
                ></ProgressBar>
            </div>
            <div className="options">
                <span className="label">Settings</span>
                <div>
                    <input ref={input} type="text" id="input" defaultValue={30} />
                    <Button ref={button} className="settings-button" onClick={setValue}>Set Value</Button>
                </div>
                <span className="label">Layout:</span>
                <div>
                    <Button ref={button2} className="layout" onClick={() => setSettings('normal')} disabled>
                        Normal
                    </Button>
                    <Button ref={button3} className="layout" onClick={() => setSettings('inverted')}>
                        inverted
                    </Button>
                </div>
                <span className="label">Min:</span>
                <div>
                    <Button ref={button4} className="min" onClick={() => setSettings(0)} disabled>
                        0
                    </Button>
                    <Button ref={button5} className="min" onClick={() => setSettings(50)}>
                        50
                    </Button>
                </div>
                <span className="label">Max:</span>
                <div>
                    <Button ref={button6} className="max" onClick={() => setSettings(100)} disabled>
                        100
                    </Button>
                    <Button ref={button7} className="max" onClick={() => setSettings(200)}>
                        200
                    </Button>
                </div>
            </div>
            <div>
                <span className="label">Circular</span>
                <CircularProgressBar
                    ref={progressbar3}
                    id="progressbar3"
                    className="smart-unselectable"
                    value={50}
                    showProgressValue
                ></CircularProgressBar>
            </div>
        </div>
    );
}

export default App;

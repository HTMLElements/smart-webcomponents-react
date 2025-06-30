import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { RepeatButton } from 'smart-webcomponents-react/button';

function App() {
    const progressBar = useRef(null);
    const circularProgressBar = useRef(null);
    const progressBarCircularControl = useRef(null);

    const handleProgressUpClick = () => {
        const progressBarEl = progressBar.current;
        const circularProgressBarEl = circularProgressBar.current;

        if (progressBarEl && circularProgressBarEl) {
            progressBarEl.value = Math.min(progressBarEl.max, progressBarEl.value + 1);
            circularProgressBarEl.value = Math.min(circularProgressBarEl.max, circularProgressBarEl.value + 1);
        }
    };

    const handleProgressDownClick = () => {
        const progressBarEl = progressBar.current;
        const circularProgressBarEl = circularProgressBar.current;

        if (progressBarEl && circularProgressBarEl) {
            progressBarEl.value = Math.max(progressBarEl.min, progressBarEl.value - 1);
            circularProgressBarEl.value = Math.max(circularProgressBarEl.min, circularProgressBarEl.value - 1);
        }
    };

    const handleIncrementButtonClick = () => {
        const progressBarEl = progressBarCircularControl.current;
        if (progressBarEl) {
            progressBarEl.value = Math.min(progressBarEl.max, progressBarEl.value + 1);
        }
    };

    const handleDecrementButtonClick = () => {
        const progressBarEl = progressBarCircularControl.current;
        if (progressBarEl) {
            progressBarEl.value = Math.max(progressBarEl.min, progressBarEl.value - 1);
        }
    };

    return (
        <div>
            <div className="smart-demo-container">
                <div className="module">
                    <p>Repeat buttons are normal buttons that repeat a single action until release.</p>
                    <p>The repeat button can simply trigger an action multiple times depending
                        on the time interval applied.</p>
                </div>
                <div className="module">
                    <div className="repeat-buttons-container">
                        <RepeatButton><i className="material-icons">keyboard_arrow_left</i></RepeatButton>
                        <RepeatButton><i className="material-icons">keyboard_arrow_right</i></RepeatButton>
                        <RepeatButton><i className="material-icons">keyboard_arrow_up</i></RepeatButton>
                        <RepeatButton><i className="material-icons">keyboard_arrow_down</i></RepeatButton>
                    </div>
                    <p>Repeat buttons can be used for navigation.</p>
                </div>
                <div className="module">
                    <div className="repeat-buttons-container">
                        <RepeatButton><i className="material-icons">replay_10</i></RepeatButton>
                        <RepeatButton><i className="material-icons">forward_10</i></RepeatButton>
                    </div>
                    <p>A repeat button can also be used to configure a range control.</p>
                </div>
                <section id="repeat-button-demo">
                    <div className="module">
                        <h2>Demo usage</h2>
                        <br />
                        <p>Repeating actions can be performed using Repeat buttons.</p>
                    </div>
                    <div className="module">
                        <div className="repeat-buttons-container">
                            <RepeatButton id="progressUp" onClick={handleProgressUpClick}>
                                <i className="material-icons">arrow_upward</i>
                            </RepeatButton>
                            <RepeatButton id="progressDown" onClick={handleProgressDownClick}>
                                <i className="material-icons">arrow_downward</i>
                            </RepeatButton>
                        </div>
                        <p>Repeat buttons that control the fill of the progress bar.</p>
                    </div>
                    <div className="module">
                        <div className="progress-bar-container">
                            <ProgressBar
                                ref={progressBar}
                                id="progressBar"
                                orientation="vertical"
                                inverted
                                showProgressValue
                                value={5}
                            />
                            <CircularProgressBar
                                ref={circularProgressBar}
                                id="progressBarCircular"
                                showProgressValue
                                value={5}
                            />
                        </div>
                        <p>Progress bars : vertical and circular.</p>
                    </div>
                    <div className="module">
                        <p>Repeat button nested inside a Circular progress bar.</p>
                    </div>
                    <div className="module">
                        <div className="progress-bar-container">
                            <CircularProgressBar ref={progressBarCircularControl} id="progressBarCircularControl" value={25}>
                                <RepeatButton id="incrementButton" onClick={handleIncrementButtonClick}>
                                    <i className="material-icons">arrow_upward</i>
                                </RepeatButton>
                                <RepeatButton id="decrementButton" onClick={handleDecrementButtonClick}>
                                    <i className="material-icons">arrow_downward</i>
                                </RepeatButton>
                            </CircularProgressBar>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

function App() {
    // Place any side-effects here if needed
    // React.useEffect(() => {
    //     // Equivalent of componentDidMount
    // }, []);

    return (
        <div>
            <div className="smart-demo-container">
                <section>
                    <div>
                        <h2>Password Text fields allow users to input and edit passwords.</h2>
                        <div className="module">
                            <p>
                                Password Text fields typically reside in forms but can appear in other
                                places, like dialog boxes and search.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="text-box-principles">
                    <h2>Principles</h2>
                    <div className="module">
                        <p>Password Text fields should have the following characteristics:</p>
                    </div>
                    <div className="module">
                        <h2>Identifiable</h2>
                        <p>
                            Using a tappable touch target, password text fields should indicate that
                            users can enter information.
                        </p>
                        <h3>Findable</h3>
                        <p>It should be easy to find a password text field among other elements.</p>
                        <h3>Legible</h3>
                        <p>
                            Password Text fields should indicate their state – whether enabled or
                            disabled, empty or filled, valid or invalid – with clear label, input,
                            and assistive text.
                        </p>
                    </div>
                </section>
                <section id="text-box-layout">
                    <h2>Layout</h2>
                    <p>Password Text fields contain the following elements:</p>
                    <br />
                    <h3>Label</h3>
                    <p>
                        Password Text field labels display the type of input a field requires.
                        Every text field should have a label.
                        <br />Labels are aligned with the input line and always visible. They can be
                        resting (when a field is inactive and empty) or floating.
                    </p>
                    <h3>Password Input line</h3>
                    <p>
                        The input line indicates where to enter text, displayed below the label.
                        <br />
                        When a field is active or contains an error, the line’s color and thickness
                        vary.
                    </p>
                    <h3>Cursor</h3>
                    <p>
                        The cursor indicates the user’s current input position.
                        <br />
                        <br />
                        <br />
                    </p>
                    <div>
                        <div className="module">
                            <PasswordTextBox />
                            <p>Password text box</p>
                            <br />
                            <PasswordTextBox disabled />
                            <p>Disabled</p>
                            <p>Text field states in light and dark themes.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;

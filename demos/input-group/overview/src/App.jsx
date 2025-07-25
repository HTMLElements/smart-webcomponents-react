import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";

const App = () => {

    useEffect(() => {
        // componentDidMount equivalent
        // If you want the init to also run on mount, call it here
        // init();
    }, []);

    // Add the init function if you plan to use it
    // const init = () => { };

    return (
        <div>
            <h3>Basic example</h3>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Recipient's username" />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
            </div>
            <label htmlFor="basic-url">Your vanity URL</label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                </div>
                <input type="text" className="form-control" id="basic-url" />
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">With textarea</span>
                </div>
                <textarea className="form-control"></textarea>
            </div>
            <h3>Multiple inputs</h3>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">First and last name</span>
                </div>
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
            </div>
            <h3>Multiple addons</h3>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                </div>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                </div>
            </div>
        </div>
    );
};

export default App;
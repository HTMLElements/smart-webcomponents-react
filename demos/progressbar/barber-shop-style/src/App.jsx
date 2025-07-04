 import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ProgressBar } from 'smart-webcomponents-react/progressbar';

const App = () => {
    return (
        <div>
            <h1>Progress Bar with Barber Shop Style</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <ProgressBar
                    className="ProgressBar-horizontal barber-shop-effect"
                    value={50}
                ></ProgressBar>
                <ProgressBar
                    orientation="vertical"
                    className="ProgressBar-vertical barber-shop-effect"
                    value={50}
                ></ProgressBar>
            </div>
        </div>
    );
};

export default App;
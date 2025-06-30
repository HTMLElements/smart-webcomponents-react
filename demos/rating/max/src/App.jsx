import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Rating } from 'smart-webcomponents-react/rating';

function App() {
    // No logic necessary for componentDidMount

    return (
        <div>
            <div className="description">
                <h2>Rating 7/10 stars.</h2>
            </div>
            <Rating max={10} value={7}></Rating>
        </div>
    );
}

export default App;
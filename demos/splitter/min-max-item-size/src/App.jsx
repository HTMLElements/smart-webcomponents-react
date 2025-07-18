import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';

const App = () => {
    // You can use useEffect here if you need lifecycle logic:
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);

    return (
        <div>
            <Splitter orientation="horizontal" id="horizontalSplitter" className="animation">
                <SplitterItem min="200" max="350">
                    Min: 200
                    <br />Max: 350
                    <div className="current-size"></div>
                </SplitterItem>
                <SplitterItem min="100" max="200">
                    Min: 100
                    <br />Max: 200
                    <div className="current-size"></div>
                </SplitterItem>
                <SplitterItem min="50" max="300">
                    Min: 50
                    <br />Max: 300
                    <div className="current-size"></div>
                </SplitterItem>
            </Splitter>
        </div>
    );
};

export default App;
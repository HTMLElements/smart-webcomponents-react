import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Rating } from 'smart-webcomponents-react/rating';

function App() {
    // You can use useEffect here if you need componentDidMount logic
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);

    return (
        <div>
            <Rating rightToLeft></Rating>
        </div>
    );
}

export default App;
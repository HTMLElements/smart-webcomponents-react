import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Rating } from 'smart-webcomponents-react/rating';

function App() {
    // Equivalent to componentDidMount
    React.useEffect(() => {
        // componentDidMount logic here (currently empty)
    }, []);

    // init method could be a function here if needed

    return (
        <div>
            <Rating></Rating>
        </div>
    );
}

export default App;
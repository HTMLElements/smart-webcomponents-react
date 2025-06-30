import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Sortable } from 'smart-webcomponents-react/sortable';

const App = () => {
    // If you need init or componentDidMount logic, use useEffect here
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);

    return (
        <div>
            <em>Drag and drop to solve the puzzle</em>
            <br />
            <br />
            <Sortable>
                <img src="https://www.htmlelements.com/demos/images/row-2-col-1.jpg" alt="row-2-col-1" />
                <img src="https://www.htmlelements.com/demos/images/row-4-col-1.jpg" alt="row-4-col-1" />
                <img src="https://www.htmlelements.com/demos/images/row-3-col-1.jpg" alt="row-3-col-1" />
                <img src="https://www.htmlelements.com/demos/images/row-1-col-1.jpg" alt="row-1-col-1" />
            </Sortable>
        </div>
    );
}

export default App;
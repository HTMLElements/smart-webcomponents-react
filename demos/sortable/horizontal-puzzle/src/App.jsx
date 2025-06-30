import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Sortable } from 'smart-webcomponents-react/sortable';

const App = () => {
    // init and componentDidMount logic can be handled here with useEffect if needed

    return (
        <div> 
            <em>Drag and drop to solve the puzzle</em>
            <br />
            <br />
            <Sortable mode="horizontal">
                <img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-5.jpg" alt="piece 5" />
                <img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-1.jpg" alt="piece 1" />
                <img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-4.jpg" alt="piece 4" />
                <img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-3.jpg" alt="piece 3" />
                <img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-2.jpg" alt="piece 2" />
            </Sortable>
        </div>
    );
}

export default App;

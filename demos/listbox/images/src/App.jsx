import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ListBox, ListItem } from 'smart-webcomponents-react/listbox';

const App = () => {
    // useEffect can be added here if you need lifecycle methods later.

    return (
        <div>
            <ListBox id="phoneBook" sorted>
                <ListItem><i className="icon"></i>Andrew Watson</ListItem>
                <ListItem><i className="icon"></i>Anne Kean</ListItem>
                <ListItem><i className="icon"></i>Avril Janin</ListItem>
                <ListItem><i className="icon"></i>Janet Pattenson</ListItem>
                <ListItem><i className="icon"></i>Johanna Svensson</ListItem>
                <ListItem><i className="icon"></i>Johnny Abana</ListItem>
                <ListItem><i className="icon"></i>Laura Thene</ListItem>
                <ListItem><i className="icon"></i>Margaret Vetton</ListItem>
                <ListItem><i className="icon"></i>Maria Sevrano</ListItem>
                <ListItem><i className="icon"></i>Mark Yemen</ListItem>
                <ListItem><i className="icon"></i>Maya Verdara</ListItem>
                <ListItem><i className="icon"></i>Michael Barton</ListItem>
                <ListItem><i className="icon"></i>Monica Oghini</ListItem>
                <ListItem><i className="icon"></i>Nancy Queens</ListItem>
                <ListItem><i className="icon"></i>Robert Drawny</ListItem>
                <ListItem><i className="icon"></i>Steven Fedrichy</ListItem>
                <ListItem><i className="icon"></i>Toni Versachi</ListItem>
            </ListBox>
        </div>
    );
}

export default App;
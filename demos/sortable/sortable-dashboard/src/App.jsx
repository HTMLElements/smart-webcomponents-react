import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Sortable } from 'smart-webcomponents-react/sortable';

const App = () => {

    // Equivalent to componentDidMount
    useEffect(() => {
        // Place side effects or initialization here if needed
    }, []);

    return (
        <div>
            <h3>My Workplace</h3>
            <Sortable id="sortable" mode="horizontal" dragMode="handle" handlePosition="right">
                <div id="square1" className="square">
                    <i className="material-icons">person</i>
                    <div>Employees</div>
                </div>
                <div id="square2" className="square">
                    <i className="material-icons">work_outline</i>
                    <div>Projects</div>
                </div>
                <div id="square3" className="square">
                    <i className="material-icons">attach_money</i>
                    <div>Finance</div>
                </div>
                <div id="square4" className="square">
                    <i className="material-icons">contact_mail</i>
                    <div>Partnerships</div>
                </div>
                <div id="square5" className="square">
                    <i className="material-icons">speaker_phone</i>
                    <div>Connectivity</div>
                </div>
                <div id="square6" className="square">
                    <i className="material-icons">location_on</i>
                    <div>Travel</div>
                </div>
            </Sortable>
        </div>
    );
}

export default App;

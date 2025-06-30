import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Sortable } from 'smart-webcomponents-react/sortable';

const App = () => {
    // If you need side-effects, use useEffect here:
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);

    return (
        <div>
            <h3>מקום עבודתי</h3>
            <Sortable id="sortable" mode="horizontal" dragMode="item" rightToLeft>
                <div id="square1" className="square">
                    <i className="material-icons">
                        person
                    </i>
                    <div>עובדים</div>
                </div>
                <div id="square2" className="square">
                    <i className="material-icons">
                        work_outline
                    </i>
                    <div>פרויקטים</div>
                </div>
                <div id="square3" className="square">
                    <i className="material-icons">
                        attach_money
                    </i>
                    <div>כספים</div>
                </div>
                <div id="square4" className="square">
                    <i className="material-icons">
                        contact_mail
                    </i>
                    <div>שותפויות</div>
                </div>
                <div id="square5" className="square">
                    <i className="material-icons">
                        speaker_phone
                    </i>
                    <div>קישוריות</div>
                </div>
                <div id="square6" className="square">
                    <i className="material-icons">
                        location_on
                    </i>
                    <div>נסיעות</div>
                </div>
            </Sortable>
        </div>
    );
}

export default App;
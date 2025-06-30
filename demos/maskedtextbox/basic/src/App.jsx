import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

function App() {
    // componentDidMount equivalent - not used in this example
    // React.useEffect(() => {
    //     // Put side effects here if needed
    // }, []);

    return (
        <div>
            <MaskedTextBox label="Phone number" hint="" value="" mask="+1 (###) ### - ####"></MaskedTextBox>
        </div>
    );
}

export default App;
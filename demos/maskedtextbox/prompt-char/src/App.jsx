import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

function App() {
    // If you need to run side effects later, use React.useEffect(() => {}, []);
    return (
        <div>
            <MaskedTextBox prompt-char="-"></MaskedTextBox>
        </div>
    );
}

export default App;
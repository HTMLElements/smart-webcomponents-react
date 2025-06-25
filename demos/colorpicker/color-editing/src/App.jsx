import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

const App = () => {
    return (
        <div>
            <ColorPicker editable />
        </div>
    );
};

export default App;

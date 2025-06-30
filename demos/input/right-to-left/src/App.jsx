import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Input } from 'smart-webcomponents-react/input';

function App() {
    return (
        <div>
            <Input
                placeholder="בבקשה תבחר"
                dropDownButtonPosition="left"
                rightToLeft
                dataSource={["פריט 1", "פריט 2", "פריט 3", "פריט 4"]}
            />
        </div>
    );
}

export default App;
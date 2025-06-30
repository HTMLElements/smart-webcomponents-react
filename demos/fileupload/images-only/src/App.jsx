import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

function App() {
    // You can use React.useEffect if you need componentDidMount logic
    // React.useEffect(() => {
    //   // componentDidMount code here
    // }, []);

    return (
        <div>
            <FileUpload accept="image/*" multiple uploadUrl=""></FileUpload>
        </div>
    );
}

export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

function App() {

    // Equivalent of componentDidMount
    useEffect(() => {
        // componentDidMount logic here (currently empty)
    }, []);

    // You can add any additional initialization here if needed

    return (
        <div>
            <div className="demo-description">File Upload | Allows Upload of multiple files</div>
            <FileUpload multiple uploadUrl=""></FileUpload>
        </div>
    );
}

export default App;
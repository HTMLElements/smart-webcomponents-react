import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const App = () => {
    // This would be equivalent to componentDidMount
    useEffect(() => {
        // Place any initialization logic here
    }, []);

    return (
        <div>
            <div id="dropZone"></div>
            <FileUpload dropZone="dropZone" multiple uploadUrl="http://localhost/fileUpload/indexMultiple.php"></FileUpload>
        </div>
    );
};

export default App;
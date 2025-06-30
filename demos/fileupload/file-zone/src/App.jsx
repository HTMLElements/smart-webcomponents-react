import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

function App() {
    // useEffect can be used for componentDidMount/componentDidUpdate equivalents
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);

    return (
        <div>
            <div id="fileZone">
                <h3>Files to upload:</h3>
            </div>
            <FileUpload appendTo="fileZone" multiple uploadUrl="http://localhost/fileUpload/indexMultiple.php"></FileUpload>
        </div>
    );
}

export default App;
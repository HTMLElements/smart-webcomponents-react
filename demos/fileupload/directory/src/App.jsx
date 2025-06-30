import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const App = () => {
    // If you need to run logic on mount, you can use useEffect here.
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);

    return (
        <div>
            <div className="demo-description">File Upload | Upload a Directory</div>
            <FileUpload multiple directory uploadUrl=""></FileUpload>
        </div>
    );
};

export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const App = () => {
    // You can use useEffect if you need lifecycle methods
    // React.useEffect(() => {
    //     // componentDidMount code here
    // }, []);

    return (
        <div>
            <FileUpload showProgress multiple uploadUrl="" />
        </div>
    );
};

export default App;
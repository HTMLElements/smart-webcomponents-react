import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { FileUpload } from 'smart-webcomponents-react/fileupload';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="demo-description">File Upload - Component which allows you to upload one or multiple files.</div>
				<FileUpload
					uploadUrl=""></FileUpload>
			</div>
		);
	}
}



export default App;

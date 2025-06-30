import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

function App() {
	return (
		<div>
			<div className="demo-description">
				File Upload - Component which allows you to upload one or multiple files.
			</div>
			<FileUpload uploadUrl="" />
		</div>
	);
}

export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { FileUpload } from 'smart-webcomponents-react/fileupload';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">File Upload | Allows Upload of multiple files</div>
				<FileUpload multiple uploadUrl=""></FileUpload>
			</div>
		);
	}
}



export default App;

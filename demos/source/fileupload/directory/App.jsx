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
				<div className="demo-description">File Upload | Upload a Directory</div>
				<FileUpload multiple directory uploadUrl=""></FileUpload>
			</div>
		);
	}
}



export default App;

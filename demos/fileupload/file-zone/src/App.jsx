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
				<div id="fileZone">
					<h3>Files to upload:</h3>
				</div>
				<FileUpload appendTo="fileZone" multiple uploadUrl="http://localhost/fileUpload/indexMultiple.php"></FileUpload>
			</div>
		);
	}
}



export default App;

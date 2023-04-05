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
				<FileUpload showProgress multiple uploadUrl=""></FileUpload>
			</div>
		);
	}
}



export default App;

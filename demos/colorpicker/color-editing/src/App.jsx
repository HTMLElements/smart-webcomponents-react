import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ColorPicker  editable></ColorPicker>
			</div>
		);
	}
}



export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import SwitchButton from "smart-webcomponents-react/switchbutton";

class App extends React.Component {

	init() {
		ReactDOM.render(<SwitchButton />, document.getElementById('switchContainer'));
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div id="switchContainer"></div>
		);
	}
}



export default App;

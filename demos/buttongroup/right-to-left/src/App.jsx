import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ButtonGroup } from 'smart-webcomponents-react/buttongroup';

class App extends React.Component {

	dataSource = ["א", "ב", "ג"];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<ButtonGroup dataSource={this.dataSource} rightToLeft></ButtonGroup>
			</div>
		);
	}
}



export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge id="gauge" analogDisplayType="needle" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="100" value="0"></Gauge>
			</div>
		);
	}
}



export default App;

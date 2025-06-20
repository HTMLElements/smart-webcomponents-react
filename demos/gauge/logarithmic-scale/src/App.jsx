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
				<Gauge analogDisplayType="needle" digitalDisplay startAngle={-30}
					endAngle={210} min="1" max="300000" interval="1" value="2" logarithmicScale></Gauge>
			</div>
		);
	}
}



export default App;

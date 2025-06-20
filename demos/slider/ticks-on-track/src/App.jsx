import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider id="slider" showTooltip orientation="horizontal"
					min="0" max="100" value="71" scalePosition="both" ticksPosition="track"></Slider>
			</div>
		);
	}
}



export default App;

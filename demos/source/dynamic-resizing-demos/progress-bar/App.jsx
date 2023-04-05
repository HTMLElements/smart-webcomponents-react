import React from "react";
import ReactDOM from 'react-dom/client';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider  id="horizontalSlider" min="40" max="1000" value="100"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <ProgressBar id="progressbar1" value="50" show-progress-value></ProgressBar>
			    <ProgressBar id="progressbar2" orientation="vertical"
			    value="50" show-progress-value></ProgressBar>
			    <CircularProgressBar id="progressbar3" value="50" show-progress-value></CircularProgressBar>
			</div>
		);
	}
}



export default App;

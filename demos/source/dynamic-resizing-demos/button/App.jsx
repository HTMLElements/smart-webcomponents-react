import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        button = document.querySelector('smart-button');
	    let value;
	    slider.addEventListener('change', function(event) {
	        value = slider.value;
	        button.style.height = value / 2 + 'px';
	        button.style.width = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider  id="horizontalSlider" min="10" max="1000" orientation="horizontal"
			    value="100" scale-position="near" unit="px" show-unit></Slider>
			    <Button>Click Me</Button>
			</div>
		);
	}
}



export default App;

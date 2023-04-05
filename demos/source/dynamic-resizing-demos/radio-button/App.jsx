import React from "react";
import ReactDOM from 'react-dom/client';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        resizedElements = document.querySelectorAll('smart-radio-button');
	    slider.addEventListener('change', function(event) {
	        const resizedElementsCount = resizedElements.length,
	            value = slider.value;
	        for (let i = 0; i < resizedElementsCount; i++) {
	            resizedElements[i].style.width = value + 'px';
	        }
	    });
	    slider.val('100');
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider  id="horizontalSlider" min="40" max="1000" value="100"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <hr />
			    <RadioButton  id="radio0"></RadioButton>
			    <br />
			    <RadioButton  id="radio1">Radio button</RadioButton>
			    <br />
			    <RadioButton  id="radio2" right-to-left>Radio button</RadioButton>
			    <br />
			    <RadioButton  id="radio3" disabled>Radio button</RadioButton>
			    <br />
			    <RadioButton id="radio4" right-to-left disabled>Radio button</RadioButton>
			    <br />
			</div>
		);
	}
}



export default App;

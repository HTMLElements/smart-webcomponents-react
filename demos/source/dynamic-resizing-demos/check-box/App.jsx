import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        resizedElements = document.querySelectorAll('smart-check-box'),
	        value;
	    slider.addEventListener('change', function(event) {
	        const resizedElementsCount = resizedElements.length;
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
			    <Slider  id="horizontalSlider" min="40" max="1000" value="40"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <hr />
			    <CheckBox id="checkbox0"></CheckBox>
			    <br />
			    <CheckBox id="checkbox1">Checkbox</CheckBox>
			    <br />
			    <CheckBox id="checkbox2" right-to-left>Checkbox</CheckBox>
			    <br />
			    <CheckBox id="checkbox3" disabled>Checkbox</CheckBox>
			    <br />
			    <CheckBox id="checkbox4" right-to-left disabled>Checkbox</CheckBox>
			    <br />
			</div>
		);
	}
}



export default App;

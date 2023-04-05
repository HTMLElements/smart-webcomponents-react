import React from "react";
import ReactDOM from 'react-dom/client';
import { ScrollBar } from 'smart-webcomponents-react/scrollbar';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        horizontalScrollBarContainer = document.getElementById('horizontalScrollBarContainer'),
	        verticalScrollBarContainer = document.getElementById('verticalScrollBarContainer');
	    slider.addEventListener('change', function(event) {
	        const size = slider.value + 'px';
	        horizontalScrollBarContainer.style.width = size;
	        verticalScrollBarContainer.style.height = size;
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider  id="resizeSlider" min="200" max="1000" value="200"
			    orientation="horizontal" scale-position="near" show-unit unit="px"></Slider>
			    <br />
			    <br />
			    <div id="horizontalScrollBarContainer">
			        <ScrollBar id="horizontalScrollBar"></ScrollBar>
			    </div>
			    <br />
			    <br />
			    <div id="verticalScrollBarContainer">
			        <ScrollBar id="verticalScrollBar" orientation="vertical"></ScrollBar>
			    </div>
			</div>
		);
	}
}



export default App;

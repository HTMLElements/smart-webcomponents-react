import React from "react";
import ReactDOM from 'react-dom/client';
import { Slider } from 'smart-webcomponents-react/slider';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        textBox = document.getElementById('textBox');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        textBox.style.width = size + 'px';
	        textBox.style.height = size / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider  id="horizontalSlider" min="40" max="1000" value="200"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <TextBox id="textBox" placeholder="smartTextBox"></TextBox>
			</div>
		);
	}
}



export default App;

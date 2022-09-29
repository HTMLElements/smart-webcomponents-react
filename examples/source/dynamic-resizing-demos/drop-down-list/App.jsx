import React from "react";
import ReactDOM from 'react-dom/client';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        dropDownList = document.querySelector('smart-drop-down-list');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        dropDownList.style.width = size + 'px';
	        dropDownList.style.height = size / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider  id="horizontalSlider" min="40" max="1000" value="50"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <DropDownList  data-source="[1,2,3,4,5,6,7,8,9,10]"></DropDownList>
			</div>
		);
	}
}



export default App;

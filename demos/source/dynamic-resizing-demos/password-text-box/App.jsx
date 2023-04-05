import React from "react";
import ReactDOM from 'react-dom/client';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        passwordTextBox = document.getElementById('passwordTextBox');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        passwordTextBox.style.width = size + 'px';
	        passwordTextBox.style.height = size / 2 + 'px';
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
			    <PasswordTextBox id="passwordTextBox" placeholder="smartPasswordTextBox"></PasswordTextBox>
			</div>
		);
	}
}



export default App;

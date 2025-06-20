import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, {useRef} from "react";
import ReactDOM from 'react-dom/client';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
	const horizontalSliderValue = useRef(null);
	const verticalSliderValue = useRef(null);
	const invertedHorizontalSliderValue = useRef(null);
	const invertedVerticalSliderValue = useRef(null);
	
	const handleHorizontalSliderChange = (event) => {
		horizontalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	const handleVerticalSliderChange = (event) => {
		verticalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	const handleInvertedHorizontalSliderChange = (event) => {
		invertedHorizontalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	const handleInvertedVerticalSliderChange = (event) => {
		invertedVerticalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}
	
	return (
		<div>
			<div className="container">
				<div className="underlined">Horizontal slider</div>Value: <span ref={horizontalSliderValue} id="horizontalSliderValue">30.00</span>
				<Slider id="horizontalSlider" showTooltip orientation="horizontal"
					min="0" max="100" value="30" scalePosition="none" onChange={handleHorizontalSliderChange}></Slider>
				<br />
				<div className="underlined">Vertical slider</div>Value: <span ref={verticalSliderValue} id="verticalSliderValue">30.00</span>
				<Slider id="verticalSlider" showTooltip tooltipPosition="far" orientation="vertical"
					min="0" max="100" value="30" scalePosition="none" onChange={handleVerticalSliderChange}></Slider>
			</div>
			<div className="container">
				<div className="underlined">Inverted horizontal slider</div>Value: <span ref={invertedHorizontalSliderValue} id="invertedHorizontalSliderValue">30.00</span>
				<Slider id="invertedHorizontalSlider" showTooltip orientation="horizontal"
					inverted min="0" max="100" value="30" scalePosition="none" onChange={handleInvertedHorizontalSliderChange}></Slider>
				<br />
				<div className="underlined">Inverted vertical slider</div>Value: <span ref={invertedVerticalSliderValue} id="invertedVerticalSliderValue">30.00</span>
				<Slider id="invertedVerticalSlider" showTooltip tooltipPosition="far"
					orientation="vertical" inverted min="0" max="100" value="30" scalePosition="none" onChange={handleInvertedVerticalSliderChange}></Slider>
			</div>
		</div>
	);
}



export default App;

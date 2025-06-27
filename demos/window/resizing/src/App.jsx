import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
	const windowRef = useRef();

	const handleResizeMode = (mode) => {
		if (windowRef.current) {
			windowRef.current.resizeMode = mode;
		}
	};

	const handleResizeIndicator = (value) => {
		if (windowRef.current) {
			windowRef.current.resizeIndicator = value;
		}
	};

	const handleLiveResize = (value) => {
		if (windowRef.current) {
			windowRef.current.liveResize = value;
		}
	};

	return (
		<div>
			<div className="options">
				<div className="caption">smartWindow Resizing Modes:</div>
				<div className="option">
					<RadioButton checked onChange={() => handleResizeMode('none')}>none</RadioButton>
					<RadioButton onChange={() => handleResizeMode('horizontal')}>Horizontal</RadioButton>
					<RadioButton onChange={() => handleResizeMode('vertical')}>Vertical</RadioButton>
					<RadioButton onChange={() => handleResizeMode('both')}>Both</RadioButton>
					<RadioButton onChange={() => handleResizeMode('top')}>Top</RadioButton>
					<RadioButton onChange={() => handleResizeMode('bottom')}>Bottom</RadioButton>
					<RadioButton onChange={() => handleResizeMode('left')}>Left</RadioButton>
					<RadioButton onChange={() => handleResizeMode('right')}>Right</RadioButton>
				</div>
				<div className="caption">Resize indicator:</div>
				<div className="option">
					<RadioButton onChange={() => handleResizeIndicator(false)} checked>Off</RadioButton>
					<RadioButton onChange={() => handleResizeIndicator(true)}>On</RadioButton>
				</div>
				<div className="caption">Live Resize:</div>
				<div className="option">
					<RadioButton onChange={() => handleLiveResize(false)} checked>Off</RadioButton>
					<RadioButton onChange={() => handleLiveResize(true)}>On</RadioButton>
				</div>
			</div>
			<Window ref={windowRef} opened label="Window 1">
				<section>
					<h3>What is Lorem Ipsum?</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially unchanged.
					It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</section>
			</Window>
		</div>
	);
};

export default App;

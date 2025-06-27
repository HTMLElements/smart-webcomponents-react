import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
	const windowRef = useRef();
	const [snappingDisabled, setSnappingDisabled] = useState(false);

	const handleClick = (event) => {
		if (snappingDisabled) {
			windowRef.current.disableSnap = false;
			setSnappingDisabled(false);
			event.target.innerHTML = 'Disable Snapping';
		} else {
			windowRef.current.disableSnap = true;
			setSnappingDisabled(true);
			event.target.innerHTML = 'Enable Snapping';
		}
	};

	return (
		<div>
			<Window ref={windowRef} opened label="Window Snapping Demo">
				<section>
					<h3>What is Window snapping ?</h3>
					<p>
						Window snapping is a feature that allows the window custom element to
						attach or detach quickly to the edges of the viewport. When the element
						is dragged near the edges of the browser so that the mouse pointer is over
						the edge or passing it a snapping animation will appear indicating that
						the window can be snapped to the edge. When snapped-on the window takes
						the dimensions of the viewport but can still be resized. In order to detach
						it from it's snapped state simply drag the window away. The moment the
						user starts dragging, the window will restore itself to it's original dimensions
						(before snapping). Snapping can occure from the left,right or top side
						of the viewport.
					</p>
				</section>
			</Window>
			<div className="options">
				<div className="caption">
					<label>Hint:</label>
				</div>
				<div className="option">
					<p>
						To snap a window on, simply drag it to the left, right or top until the
						mouse pointer reaches the edge of the browser or passes it. An animation
						will appear when the window can be snapped on.
					</p>
				</div>
				<div className="option">
					<Button id="controlSnapping" onClick={handleClick}>Disable Snapping</Button>
				</div>
			</div>
		</div>
	);
};

export default App;

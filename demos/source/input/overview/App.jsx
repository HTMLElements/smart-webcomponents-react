import React, { useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Input } from 'smart-webcomponents-react/input';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
	const inputRef = useRef(null);
	 
	const handleDefault = (event) => {
		if (!event.detail.value) {
			return;
		}
		
		inputRef.current.nativeElement.classList.remove('underlined');
		inputRef.current.nativeElement.classList.remove('outlined');
	}
	
	const handleOutlined = (event) => {
		if (!event.detail.value) {
			return;
		}

		inputRef.current.nativeElement.classList.remove('underlined');
		inputRef.current.nativeElement.classList.add('outlined');
	}
	
	const handleUnderlined = (event) => {
		if (!event.detail.value) {
			return;
		}

		inputRef.current.nativeElement.classList.add('underlined');
		inputRef.current.nativeElement.classList.remove('outlined');
	}
	
	return (
		<div>
			<div className="demo-description">
				<p> <b>Smart.Input</b> is a simple input that can have a predefined options
					list.</p>
				<p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
			</div>
			<Input ref={inputRef} placeholder="Empty"></Input>
			<div className="options">
				<div className="option">
					<div className="description">Render Mode</div>
					<RadioButton onChange={handleDefault}  checked>Default</RadioButton>
					<RadioButton onChange={handleOutlined}>Outlined</RadioButton>
					<RadioButton onChange={handleUnderlined}>Underlined</RadioButton>
				</div>
			</div>
		</div>
	);
}



export default App;

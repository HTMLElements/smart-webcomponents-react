import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { PasswordInput } from 'smart-webcomponents-react/passwordinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App(props) {
	const input = useRef(null);

	useEffect(() => {
		let inputElement = input.current;
		// You can perform additional logic with inputElement if needed
	}, []);

	return (
		<div>
			<PasswordInput ref={input} placeholder="Empty"></PasswordInput>
		</div>
	);
}

export default App;
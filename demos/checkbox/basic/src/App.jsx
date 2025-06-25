import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	render() {
		return (
			<div>
				<CheckBox id="checkBox">Check Box</CheckBox>
			</div>
		);
	}
}

export default App;

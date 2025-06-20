import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ColorInput } from "smart-webcomponents-react/colorinput"

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<ColorInput dropDownButtonPosition="right" readonly></ColorInput>
				<ColorInput displayMode="grid"></ColorInput>
			</div>
		);
	}
}



export default App;

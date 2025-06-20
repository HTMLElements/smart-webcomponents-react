import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NumericTextBox id="myCustomElement" inputFormat="floatingPoint"
					value="100" spinButtons spinButtonsPosition="right" spinButtonsStep="1"
					enableMouseWheelAction></NumericTextBox>
			</div>
		);
	}
}



export default App;

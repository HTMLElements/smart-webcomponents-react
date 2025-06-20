import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.maskedtextbox = React.createRef();
	}

	handleChange(event) {
		this.maskedtextbox.current.isOverwriteMode = event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox ref={this.maskedtextbox} id="maskedTextBox" value="10201" isOverwriteMode
			    resetOnSpace></MaskedTextBox>
			    <br />
			    <CheckBox onChange={this.handleChange.bind(this)} id="checkBox" checked>Is Overwrite Mode</CheckBox>
			</div>
		);
	}
}



export default App;

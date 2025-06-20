import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox hidePromptOnLeave mask="00.00.0000"></MaskedTextBox>
			</div>
		);
	}
}



export default App;

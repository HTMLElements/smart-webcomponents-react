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
			    <MaskedTextBox  prompt-char="-"></MaskedTextBox>
			</div>
		);
	}
}



export default App;

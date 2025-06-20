import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {
	
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Start typing to see the show password icon</div>
			    <PasswordTextBox showPasswordIcon placeholder="Your password"></PasswordTextBox>
			</div>
		);
	}
}



export default App;

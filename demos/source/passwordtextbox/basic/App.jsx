import React from "react";
import ReactDOM from 'react-dom/client';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Simple password field.</div>
			    <PasswordTextBox placeholder="Your password"></PasswordTextBox>
			</div>
		);
	}
}



export default App;

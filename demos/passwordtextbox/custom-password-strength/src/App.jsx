import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {

	passwordStrength = function (password, allowedSymbols) {
		const passwordLength = password.length;

		if (passwordLength < 3) {
			return 'short';
		}
		else if (passwordLength < 10) {
			return 'weak';
		}
		else {
			return 'strong';
		}
	};

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<PasswordTextBox showPasswordStrength showPasswordIcon passwordStrength={this.passwordStrength}
					tooltipArrow placeholder="Password strength callback" tooltipPosition="top"></PasswordTextBox>
			</div>
		);
	}
}



export default App;

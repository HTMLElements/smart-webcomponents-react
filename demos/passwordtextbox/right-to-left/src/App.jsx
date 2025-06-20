import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.passwordtextbox = React.createRef();
	}

	init() {


		const passwordTextBox = this.passwordtextbox.current,
			messages = Object.assign({}, passwordTextBox.messages);

		messages['he'] = {
			'passwordStrength': 'חוזק סיסמה',
			'short': 'קצר',
			'weak': 'חלש',
			'far': 'הוגן',
			'good': 'טוב',
			'strong': 'חזק',
			'showPassword': 'הראה סיסמה'
		};

		passwordTextBox.messages = messages;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<PasswordTextBox ref={this.passwordtextbox} placeholder="סיסמה:" locale="he"
					showPasswordStrength tooltipArrow tooltipPosition="bottom" rightToLeft></PasswordTextBox>
			</div>
		);
	}
}



export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Toast  position="top-left" autoOpen showCloseButton type="mail"
			    className="blink" rightToLeft>יש לך 2 הודעות חדשות.</Toast>
			</div>
		);
	}
}



export default App;

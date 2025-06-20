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
			    className="blink">You have 2 new messages.</Toast>
			</div>
		);
	}
}



export default App;

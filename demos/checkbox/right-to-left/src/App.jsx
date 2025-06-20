import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Checkbox fully supports right-to-left (RTL) language locales. You can
			        enable/disable the right-to-left support using rightToLeft property.</div>
			    <CheckBox id="checkBox" rightToLeft>תיבת הסימון</CheckBox>
			</div>
		);
	}
}



export default App;

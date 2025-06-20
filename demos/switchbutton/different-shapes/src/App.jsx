import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <SwitchButton className="ios-theme" checked inverted></SwitchButton>
			    <br />
			    <SwitchButton className="circle-theme"></SwitchButton>
			    <br />
			    <SwitchButton className="heart-theme"></SwitchButton>
			</div>
		);
	}
}



export default App;

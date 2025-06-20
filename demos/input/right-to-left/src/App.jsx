import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Input } from 'smart-webcomponents-react/input';

class App extends React.Component {
	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <Input placeholder="בבקשה תבחר" dropDownButtonPosition="left"
			    rightToLeft dataSource={["פריט 1", "פריט 2", "פריט 3", "פריט 4"]}></Input>
			</div>
		);
	}
}



export default App;

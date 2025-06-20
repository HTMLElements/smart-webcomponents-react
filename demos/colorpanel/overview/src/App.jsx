import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        <h1> Color Panel</h1> In this example is demonstrated the smartColorPanel Web Component.</div>
			    <ColorPanel></ColorPanel>
			</div>
		);
	}
}



export default App;

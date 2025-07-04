import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.innerHTML += '<b>type:</b> ' + event.type + ', <b>value:</b> ' + event.detail.value + '<br />';
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ColorPanel ref={this.colorpanel} onChange={this.handleChange.bind(this)}></ColorPanel>
			    <div className="options">
			        <div className="option">
			            <div id="eventLog">
			                <div ref={this.log} id="log"></div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;

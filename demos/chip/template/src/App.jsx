import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Chip } from 'smart-webcomponents-react/chip';

class App extends React.Component {

	init() {
		const itemTemplate = document.createElement('template');

		itemTemplate.id = 'itemTemplate';
		itemTemplate.innerHTML = `<div>
									<span className="smart-avatar"></span>
									<span className="smart-value">{{value}} <i className="material-icons">&#xE86A;</i></span>
						   			<span className="smart-close-button"></span>
								</div>`;
		document.body.appendChild(itemTemplate);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Chip avatar="S" value="Steven Buchanan" itemTemplate="itemTemplate"></Chip>
			</div>
		);
	}
}



export default App;

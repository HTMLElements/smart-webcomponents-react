import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
	}

	init() {
		const that = this;

		document.addEventListener('change', function (event) {
			if (event.target.groupName === 'tooltipDisplayMode') {
				that.colorpanel.current.tooltipDisplayMode = event.target.innerHTML;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1> Tooltip Display Mode</h1> In this example are demonstrated different options for Color Panel tooltips.</div>
				<ColorPanel ref={this.colorpanel} id="colorPanel"></ColorPanel>
				<div className="options">
					<div className="caption">Tooltip Display Mode</div>
					<div className="option">
						<RadioButton groupName="tooltipDisplayMode">none</RadioButton>
						<br />
						<RadioButton groupName="tooltipDisplayMode">rgba</RadioButton>
						<br />
						<RadioButton groupName="tooltipDisplayMode">rgb</RadioButton>
						<br />
						<RadioButton groupName="tooltipDisplayMode" checked>hex</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}



export default App;

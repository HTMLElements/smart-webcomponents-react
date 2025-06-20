import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
		this.rgbInput = React.createRef();
	}

	handleChange(event) {
		this.rgbInput.current.value = event.detail.value;
	}

	init() {
		const colorPanel = this.colorpanel.current;

		document.addEventListener('change', function (event) {
			const radioButton = event.target, checkBox = event.target, input = event.target;
			//Set new Grid Item size
			if (radioButton instanceof window.Smart.RadioButton) {
				colorPanel.applyValueMode = radioButton.innerHTML;
				return;
			}
			else if (checkBox instanceof window.Smart.CheckBox) {
				colorPanel[checkBox.id] = event.detail.value;
			}
			else if (input instanceof HTMLInputElement && input.id === 'rgbValue') {
				colorPanel.value = input.value;
			}
		});

		this.rgbInput.current.value = colorPanel.value;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<h1>Display Mode "palette"</h1>
				<ColorPanel ref={this.colorpanel} id="colorPanel" editAlphaChannel displayMode="palette" onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<div className="option">Selected color:
						<input ref={this.rgbInput} type="text" className="Input" placeholder="#RRGGBB"
							id="rgbValue" />
					</div>
					<div className="option">
						<h3>ApplyValueMode</h3>
						<RadioButton groupName="applyValueMode" checked>instantly</RadioButton>
						<br />
						<RadioButton groupName="applyValueMode">useButtons</RadioButton>
					</div>
					<div className="option">
						<h3>Color Editors</h3>
						<CheckBox id="hidePreviewContainer">Hide Preview Container</CheckBox>
						<br />
						<CheckBox id="hideRGBEditor">Hide RGB Editor</CheckBox>
						<br />
						<CheckBox id="hideHEXEditor">Hide HEX Editor</CheckBox>
						<br />
						<CheckBox id="hideAlphaEditor">Hide Alpha Editor</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}



export default App;

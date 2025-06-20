import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
	}

	handleResizeModeButtonClick(mode) {
		const dropDownList = this.dropdownlist.current;

		dropDownList.resizeMode = mode.toLowerCase();
	}

	handleDropDownPositionButtonClick(mode) {

		const dropDownList = this.dropdownlist.current;

		dropDownList.dropDownPosition = mode.toLowerCase();
	}

	componentDidMount() {

	}

	resizeModes = {
		none: 'None',
		horizontal: 'Horizontal',
		both: 'Both',
		vertical: 'Vertical'
	};

	dropDownPositions = {
		bottom: 'Bottom',
		top: 'Top'
	}

	render() {
		return (
			<div>
				<div>
					<h3>Resize Mode:</h3>
					<RadioButton onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.none)}>
						{this.resizeModes.none}
					</RadioButton>
					<RadioButton onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.horizontal)}>
						{this.resizeModes.horizontal}
					</RadioButton>
					<RadioButton onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.both)}>
						{this.resizeModes.both}
					</RadioButton>
					<RadioButton checked onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.vertical)}>
						{this.resizeModes.vertical}
					</RadioButton>
				</div>
				<br />
				<div>
					<h3>DropDown position:</h3>
					<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.bottom)}>
						{this.dropDownPositions.bottom}
					</RadioButton>
					<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.top)}>
						{this.dropDownPositions.top}
					</RadioButton>
				</div>
				<DropDownList ref={this.dropdownlist} resizeMode="vertical">
					<ListItem value="1">Affogato</ListItem>
					<ListItem value="2">Americano</ListItem>
					<ListItem value="3">Bicerin</ListItem>
					<ListItem value="4">Breve</ListItem>
					<ListItem value="5">Cappuccino</ListItem>
					<ListItem value="6">Cafe Crema</ListItem>
					<ListItem value="7">Cafe Corretto</ListItem>
					<ListItem value="8">Cafe macchiato</ListItem>
					<ListItem value="9">Cafe mocha</ListItem>
					<ListItem value="10">Cortado</ListItem>
					<ListItem value="11">Cuban espresso</ListItem>
					<ListItem value="12">Espresso</ListItem>
					<ListItem value="13">Eiskaffee</ListItem>
					<ListItem value="14">Frappuccino</ListItem>
					<ListItem value="15">Galao</ListItem>
					<ListItem value="16">Greek frappe coffee</ListItem>
					<ListItem value="17">Iced Coffee﻿</ListItem>
					<ListItem value="18">Instant Coffee﻿</ListItem>
					<ListItem value="19">Latte</ListItem>
					<ListItem value="20">Liqueur coffee</ListItem>
				</DropDownList>
			</div>
		);
	}
}



export default App;

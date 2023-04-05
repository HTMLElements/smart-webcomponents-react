import React from "react";
import ReactDOM from 'react-dom/client';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
	}

	dataSource = [
		"Affogato",
		"Americano",
		"Bicerin",
		"Breve",
		"Café Bombón",
		"Café au lait",
		"Caffé Corretto",
		"Café Crema",
		"Caffé Latte",
		"Caffé macchiato",
		"Café mélange",
		"Coffee milk",
		"Cafe mocha",
		"Cappuccino",
		"Carajillo",
		"Cortado",
		"Cuban espresso",
		"Espresso",
		"Eiskaffee",
		"The Flat White",
		"Frappuccino",
		"Galao",
		"Greek frappé coffee",
		"Alabala",
		"Indian filter coffee",
		"Instant coffee",
		"Irish coffee",
		"Liqueur coffee"
	];

	handleDropDownPositionButtonClick(mode) {

		const dropDownList = this.dropdownlist.current;

		dropDownList.dropDownPosition = mode.toLowerCase();
		
	}

	dropDownPositions = {
		auto: 'Auto',
		bottom: 'Bottom',
		overlayBottom: 'Overlay-bottom',
		overlayCenter: 'Overlay-center',
		overlayTop: 'Overlay-top',
		top: 'Top',
		centerBottom: 'Center-bottom',
		centerTop: 'Center-top',
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DropDownList ref={this.dropdownlist} className="drop-down-list-modes-demo" dataSource={this.dataSource}></DropDownList>
				<div className="options">
					<div className="caption">DropDown list Position:</div>
					<div className="option">
						<RadioButton checked onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.auto)}>
							{this.dropDownPositions.auto}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.bottom)}>
							{this.dropDownPositions.bottom}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.overlayBottom)}>
							{this.dropDownPositions.overlayBottom}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.overlayCenter)}>
							{this.dropDownPositions.overlayCenter}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.overlayTop)}>
							{this.dropDownPositions.overlayTop}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.top)}>
							{this.dropDownPositions.top}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.centerBottom)}>
							{this.dropDownPositions.centerBottom}
						</RadioButton>
						<br />
						<br />
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.centerTop)}>
							{this.dropDownPositions.centerTop}
						</RadioButton>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}



export default App;

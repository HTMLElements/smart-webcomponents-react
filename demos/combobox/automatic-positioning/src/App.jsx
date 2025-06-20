import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';

class App extends React.Component {

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

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ComboBox  id="first" dataSource={this.dataSource}></ComboBox>
			    <ComboBox  id="last" dataSource={this.dataSource}></ComboBox>
			</div>
		);
	}
}



export default App;

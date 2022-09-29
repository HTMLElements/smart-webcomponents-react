import React from "react";
import ReactDOM from 'react-dom/client';
import { Breadcrumb } from 'smart-webcomponents-react/breadcrumb';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <Breadcrumb id="breadcrumb1" addNewItem allowDrag
			    allowDrop closeButtons dataSource='[{ "label": "Planets", "value": "A" }, { "label": "Continents", "value": "B" }, { "label": "Countries", "value": "C" }, { "label": "States", "value": "D" }, { "label": "Cities", "value": "E" }]'></Breadcrumb>
			    <br />
			    <Breadcrumb id="breadcrumb2" allowDrag allowDrop closeButtons
			    data-source='[{ "label": "Email", "value": "alternate_email" }, { "label": "Phone", "value": "phone" }, { "label": "TV", "value": "tv" }, { "label": "Video game", "value": "videogame_asset" }, { "label": "Laptop", "value": "laptop" }]'
			    ></Breadcrumb>
			    <br />
			    <Breadcrumb id="breadcrumb3" minimizeWidth="150" allowDrag
			    allowDrop closeButtons dataSource='[{ "label": "Planets", "value": "A" }, { "label": "Continents", "value": "B" }, { "label": "Countries", "value": "C" }, { "label": "States", "value": "D" }, { "label": "Cities", "value": "E" }]'></Breadcrumb>
			    
			</div>
		);
	}
}



export default App;

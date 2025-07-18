import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.combobox = React.createRef();
	}

	init() {
		const template = document.createElement('template');
		template.id = 'template';
		template.innerHTML =
			'<span class="glyphicon glyphicon-ok"></span><span style="margin-left:5px;">{{label}}</span>';

		document.body.appendChild(template);
		this.combobox.current.itemTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<ComboBox ref={this.combobox}>
					<ListItemsGroup label="Swedish Cars">
						<ListItem selected value="volvo">Volvo</ListItem>
						<ListItem value="saab">Saab</ListItem>
						<ListItem value="scania">Scania</ListItem>
					</ListItemsGroup>
					<ListItemsGroup label="German Cars">
						<ListItem value="mercedes">Mercedes</ListItem>
						<ListItem value="vw">VW</ListItem>
						<ListItem value="audi">Audi</ListItem>
						<ListItem value="porsche">Porsche</ListItem>
					</ListItemsGroup>
					<ListItemsGroup label="Japanese Cars">
						<ListItem value="mazda">Mazda</ListItem>
						<ListItem value="honda">Honda</ListItem>
						<ListItem value="infinity">Infinity</ListItem>
						<ListItem value="mitsubishi">Mitsubishi</ListItem>
						<ListItem value="toyota">Toyota</ListItem>
					</ListItemsGroup>
				</ComboBox>
			</div>
		);
	}
}

export default App;

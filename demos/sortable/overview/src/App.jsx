import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Sortable } from 'smart-webcomponents-react/sortable';

class App extends React.Component {


	handleChange(event) {
		const sortable = this.refs.sortable;
		if (event.detail.value) {
			sortable.dragMode = 'handle';
			sortable.handleVisibility = 'visible';
		} else {
			sortable.dragMode = 'item';
		}
	}
	componentDidMount() {

	}

	render() {
		return (
			<div> <em>Drag and drop to change list order</em>
				<Sortable id="sortable"
					items="li">
					<ol>
						<li>Strawberries</li>
						<li>Mango</li>
						<li>Watermelon</li>
						<li>Apples</li>
						<li>Bananas</li>
						<li>Grapes</li>
						<li>Pineapples</li>
						<li>Oranges</li>
						<li>Raspberries</li>
						<li>Peaches</li>
						<li>Cherries</li>
						<li>Kiwi</li>
						<li>Blueberries</li>
						<li>Pomegranate</li>
						<li>Lemons</li>
					</ol>
				</Sortable>
				<div className="options">
					<CheckBox  onChange={this.handleChange.bind(this)} id="handle"><code>drag-mode="handle"</code>
					</CheckBox>
				</div>
			</div>
		);
	}
}



export default App;

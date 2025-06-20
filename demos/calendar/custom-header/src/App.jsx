import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { throws } from "assert";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
	}

	init() {
		const template = document.createElement('template');

		template.id = 'headerTemplate';
		template.innerHTML = '<div className="smart-date-element"><span>{{date}}</span></div>';

		document.body.appendChild(template);

		this.calendar.current.headerTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} className="custom-header" selectionMode="one" selectedDates={["2017-08-17"]}></Calendar>
			</div>
		);
	}
}



export default App;

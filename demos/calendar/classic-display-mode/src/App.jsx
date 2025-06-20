import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Calendar calendarMode="classic"></Calendar>
			</div>
		);
	}
}



export default App;

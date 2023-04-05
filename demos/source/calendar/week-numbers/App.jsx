import React from "react";
import ReactDOM from 'react-dom/client';
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Calendar id="calendar" weekNumbers></Calendar>
			</div>
		);
	}
}



export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

const App = () => {
	return (
		<div>
			<DateTimePicker calendarButton enableMouseWheelAction
				dropDownPosition="center-bottom" spinButtons spinButtonsPosition="left"></DateTimePicker>
		</div>
	);
}



export default App;

import React from "react";
import ReactDOM from 'react-dom/client';
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Led id="led" checked={null} falseContent="OFF" indeterminateContent="||" trueContent="ON"></Led>
			</div>
		);
	}
}



export default App;

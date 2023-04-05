import React from "react";
import ReactDOM from 'react-dom/client';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {

		// Your code here
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<RadioButton checked className="heart">On</RadioButton>
				<RadioButton className="heart">Off</RadioButton>
			</div>
		);
	}
}



export default App;

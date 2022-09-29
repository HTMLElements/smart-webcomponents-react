import React from "react";
import ReactDOM from 'react-dom/client';
import { Chip } from 'smart-webcomponents-react/chip';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chip avatar="https://www.htmlelements.com/demos/images/phonebook/mark.jpeg" value="סטיבן בוקנאן"
					closeButton rightToLeft></Chip>
			</div>
		);
	}
}



export default App;

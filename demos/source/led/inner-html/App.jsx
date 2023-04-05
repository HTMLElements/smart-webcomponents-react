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
				<Led><span className="smart-true-content">Hello</span>
					<span className="smart-false-content">Bye</span>
				</Led>
			</div>
		);
	}
}



export default App;

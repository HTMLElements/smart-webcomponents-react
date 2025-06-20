import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Sortable } from 'smart-webcomponents-react/sortable';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div> <em>Drag and drop to solve the puzzle</em>
				<br />
				<br />
				<Sortable mode="horizontal">
					<img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-5.jpg" />
					<img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-1.jpg" />
					<img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-4.jpg" />
					<img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-3.jpg" />
					<img src="https://www.htmlelements.com/demos/images/squirrel-row-1-col-2.jpg" />
				</Sortable>
			</div>
		);
	}
}



export default App;

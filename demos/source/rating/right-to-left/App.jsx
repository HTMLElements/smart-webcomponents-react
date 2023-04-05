import React from "react";
import ReactDOM from 'react-dom/client';
import { Rating } from 'smart-webcomponents-react/rating';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Rating rightToLeft></Rating>
			</div>
		);
	}
}



export default App;

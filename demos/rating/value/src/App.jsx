import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Rating } from 'smart-webcomponents-react/rating';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="description">
			         <h2>Rating 5/5 stars</h2>
			    </div>
			    <Rating value={5}></Rating>
			</div>
		);
	}
}



export default App;

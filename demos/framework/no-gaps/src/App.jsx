import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">No gaps. The gaps between columns and rows in our predefined grid classes
			        can be removed by using .no-gaps. Otherwise, you can use --Grid-layout-col-gap
			        and --Grid-layout-row-gap CSS3 variables</div>
			    <div className="Grid-layout no-gaps">
			        <div className="row">
			            <div className="col-sm-4">1 of 3</div>
			            <div className="col-sm-4">2 of 3</div>
			            <div className="col-sm-4">3 of 3</div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;

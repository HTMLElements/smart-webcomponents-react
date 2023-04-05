import React from "react";
import ReactDOM from 'react-dom/client';
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	mode = "view";
	mapType= "terrain"
	query= "vitosha, cherni vrah";
	apiKey ="";
	zoom = "15";	


	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Terrain Map Overview</h1>
			        <div>In this demo, we show how to use our "Map" component with "terrain" mode.</div>
			    </div>
			    <Map zoom={this.zoom} mode={this.mode} mapType={this.mapType} query={this.query}
			    apiKey={this.apiKey}></Map>
			</div>
		);
	}
}



export default App;

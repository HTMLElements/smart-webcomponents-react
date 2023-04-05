import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	    Smart('smart-greeting', class SmartGreeting extends smartBaseElement {
	        // Declare properties
	        static get properties() {
	            return {
	                'name': {
	                    value: 'World!',
	                    type: 'string'
	                }
	            };
	        }
	        // Define a template
	        template() {
	            return '<p>Hello, <span>{{name}}</span></p>';
	        }
	    });
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <smart-greeting></smart-greeting>
			</div>
		);
	}
}



export default App;

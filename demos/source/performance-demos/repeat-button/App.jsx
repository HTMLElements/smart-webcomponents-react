import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	
	    const fragment = document.createDocumentFragment();
	    for (let i = 0; i < 100; i++) {
	        const button = document.createElement("smart-repeat-button");
	        button.classList.add('testRepeatButton');
	        button.innerHTML = "Click Me";
	        fragment.appendChild(button);
	    }
	    document.body.appendChild(fragment);
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div></div>
		);
	}
}



export default App;

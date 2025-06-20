import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <SwitchButton> <span className="smart-true-content">Hello</span>
 <span className="smart-false-content">Bye</span>
			    </SwitchButton>
			    <br />
			    <SwitchButton orientation="vertical"> <span className="smart-true-content">Hello</span>
 <span className="smart-false-content">Bye</span>
			    </SwitchButton>
			</div>
		);
	}
}



export default App;

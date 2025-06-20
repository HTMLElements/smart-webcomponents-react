import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<SwitchButton className="fluid-theme"></SwitchButton>
				<SwitchButton className="fluid-theme" inverted></SwitchButton>
				<SwitchButton className="fluid-theme" disabled></SwitchButton>
				<SwitchButton className="fluid-theme" inverted
					disabled></SwitchButton>
			</div>
		);
	}
}



export default App;

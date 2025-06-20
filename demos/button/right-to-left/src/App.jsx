import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-buttons-group">
			        <Button  rightToLeft>רגיל.</Button>
			        <Button  className="raised" rightToLeft>גויס.</Button>
			        <Button  className="outlined" rightToLeft>מתואר</Button>
			        <Button  className="flat" rightToLeft>שטוח</Button>
			    </div>
			</div>
		);
	}
}



export default App;

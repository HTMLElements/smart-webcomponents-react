import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="demo-description">
					Checkbox fully supports right-to-left (RTL) language locales. You can enable or disable RTL support using the <code>rightToLeft</code> property.
				</div>
				
				{/* RTL checkbox with Hebrew label */}
				<CheckBox id="checkBox" rightToLeft>
					תיבת הסימון
				</CheckBox>
			</div>
		);
	}
}

export default App;

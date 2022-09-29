import React from "react";
import ReactDOM from 'react-dom/client';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox label="מספר טלפון" mask="+1 (###) ### - ####" rightToLeft></MaskedTextBox>
			</div>
		);
	}
}



export default App;

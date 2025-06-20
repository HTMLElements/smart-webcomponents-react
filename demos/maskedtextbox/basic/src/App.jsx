import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MaskedTextBox label="Phone number" hint="" value="" mask="+1 (###) ### - ####"></MaskedTextBox>
			</div>
		);
	}
}



export default App;

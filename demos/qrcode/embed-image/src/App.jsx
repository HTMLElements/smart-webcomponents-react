import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { QRcode } from 'smart-webcomponents-react/qrcode';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<div className="container">
					<p>When the Error Correction Level is sufficiently high, it is possible to embed an Image inside the QR Code.
        The maximum size of the image depends on the Error Correction Level and the QR Code value.</p>
				<div className="qrcode-container">
						<QRcode value="ANGULAR.IO" embedImage="https://www.htmlelements.com/demos/images/angular.svg"
						imageWidth={60} imageHeight={60}></QRcode>
						<QRcode value="VUEJS.ORG" embed-image="https://www.htmlelements.com/demos/images/vuejs.svg"
						imageWidth={60} imageHeight={60}></QRcode>
				</div>
			</div>
		);
	}
}



export default App;

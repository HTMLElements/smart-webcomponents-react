import React from "react";
import ReactDOM from 'react-dom/client';
import { Barcode } from 'smart-webcomponents-react/barcode';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.barcode = React.createRef();
	}


	handleSVGBtnClick(){
		this.barcode.export('svg')
	}
	
	handlePNGBtnClick(){
		this.barcode.export('png')
	}

	handleJPGBtnClick(){
		this.barcode.export('jpg')
	}

	init() {

	}

	componentDidMount() {
	}

	render() {
		return (
		<div>
			<p>Click on the export buttons to create a downloadable file.</p>
			<Barcode ref={this.barcode} id="barcodeToExport" value="A5600B" labelPosition="bottom" labelFontSize={30}></Barcode>
			<br />
			<div className="options">
				<div className="caption">Export</div>
				<div className="option">		
					<Button id="btn1" onClick={this.handleSVGBtnClick.bind(this)}>Export as SVG</Button>
					<br/><br/>
					<Button id="btn2" onClick={this.handlePNGBtnClick.bind(this)}>Export as PNG</Button>
								<br/><br/>
					<Button id="btn3" onClick={this.handleJPGBtnClick.bind(this)}>Export as JPG</Button>
				</div>
			</div>
		</div>
		);
	}
}



export default App;

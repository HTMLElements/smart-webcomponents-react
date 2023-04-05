import React from "react";
import ReactDOM from 'react-dom/client';
import { Barcode } from 'smart-webcomponents-react/barcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.barcode = React.createRef();
		this.elementHTML = React.createRef();
		this.state = {
			renderAs: 'svg'
		};
	}

	svgChecked = true;
	
	handleSVGOptionClick(){
		this.svgChecked = true;
		this.setState({ renderAs: 'svg' });	
		requestAnimationFrame(() => {
			this.elementHTML.current.textContent = this.barcode.current.nativeElement.firstChild.firstChild.outerHTML;
		});
	}
	
	handleCanvasOptionClick(){
		this.svgChecked = false;
		this.setState({ renderAs: 'canvas'});
		requestAnimationFrame(() => {
			this.elementHTML.current.textContent = this.barcode.current.nativeElement.firstChild.firstChild.outerHTML;
		});
	}

	componentDidMount() {
		this.elementHTML.current.textContent = this.barcode.current.nativeElement.firstChild.firstChild.outerHTML;
	}

	render() {
		return (
			<div>
				<p>The barcode component supports &lt;svg&gt; and &lt;canvas&gt; rendering modes.</p>
				<p>Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.</p>
				<Barcode renderAs={this.state.renderAs} ref={this.barcode} id="BarcodeToRender" value="A5600B" labelPosition="bottom" labelFontSize={30}></Barcode>
				<br />
				<h3>Rendered HTML:</h3>
				<div>
					<code ref={this.elementHTML} id="element-html">
						
					</code>
				</div>
				<div className="options">
					<div className="caption">Render Mode</div>
					<div className="option">		
						<RadioButton onClick={this.handleSVGOptionClick.bind(this)} id="svg-option" checked={this.svgChecked}>Render as SVG</RadioButton >
						<br/><br/>
						<RadioButton onClick={this.handleCanvasOptionClick.bind(this)} id="canvas-option">Render as Canvas</RadioButton >
					</div>
				</div>
			</div>
		);
	}
}



export default App;

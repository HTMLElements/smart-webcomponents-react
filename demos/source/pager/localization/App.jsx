import React from "react";
import ReactDOM from 'react-dom/client';
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {

	messages = {
		en: {
			'firstButton': 'Premier',
			'lastButton': 'Dernier',
			'previousButton': 'Précédent',
			'nextButton': 'Prochain'
		}
	};


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Pager messages={this.messages} showNavigationButtonLabels showPrevNextNavigationButtons
			    showFirstLastNavigationButtons showPageIndexSelectors pagesCount={300}
			    pageIndexSelectors={10}></Pager>
			</div>
		);
	}
}



export default App;

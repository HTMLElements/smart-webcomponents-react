import React from "react";
import ReactDOM from 'react-dom/client';
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Pager  showPageSizeSelector showNavigationInput showPrevNextNavigationButtons
			    pagesCount={10} showSummary></Pager>
			</div>
		);
	}
}



export default App;

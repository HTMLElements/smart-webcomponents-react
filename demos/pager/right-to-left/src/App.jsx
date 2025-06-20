import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.pager = React.createRef();
	}

	init() {
		const pager = this.pager.current,
			messages = Object.assign({}, pager.messages);

		messages['he'] = {
			'firstButton': 'ראשון',
			'lastButton': 'אחרון',
			'previousButton': 'קודם',
			'nextButton': 'הבא',
			'navigateToLabel': 'לך ל:',
			'pageSizeLabel': 'הצג:',
			'navigateToInputPlaceholder': '',
			'ellipsis': '...',
			'summaryString': 'של',
			'summaryPrefix': 'של',
			'summarySuffix': ''
		};

		pager.messages = messages;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Pager ref={this.pager} showNavigationButtonLabels showPrevNextNavigationButtons
					showFirstLastNavigation-buttons showPageIndexSelectors pagesCount={5}
					pageIndexSelectors={5} rightToLeft locale="he"></Pager>
			</div>
		);
	}
}



export default App;

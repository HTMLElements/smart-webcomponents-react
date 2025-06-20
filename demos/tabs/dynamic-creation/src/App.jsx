import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tabsContainer = React.createRef();
	}

	init() {
		ReactDOM.render(<Tabs />, this.tabsContainer.current, function () {
			const tabs = this;

			tabs.nativeElement.innerHTML = `<smart-tab-item label="TAB 1">Content 1</smart-tab-item>
											<smart-tab-item label="TAB 2">Content 2</smart-tab-item>`;
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div ref={this.tabsContainer}></div>
		);
	}
}



export default App;

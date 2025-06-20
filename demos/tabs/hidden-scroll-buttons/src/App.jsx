import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>overflow: 'auto'</p>
				<Tabs  className="demoTabs" selectedIndex={1}
					overflow="auto">
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
					<TabItem label="TAB 5">Content 5</TabItem>
					<TabItem label="TAB 6">Content 6</TabItem>
					<TabItem label="TAB 7">Content 7</TabItem>
				</Tabs>
				<p>overflow: 'hidden'</p>
				<Tabs className="demoTabs" selectedIndex={1}
					overflow="hidden">
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
					<TabItem label="TAB 5">Content 5</TabItem>
					<TabItem label="TAB 6">Content 6</TabItem>
					<TabItem label="TAB 7">Content 7</TabItem>
				</Tabs>
				<p>overflow: 'scroll'</p>
				<Tabs className="demoTabs" selectedIndex={1}
					overflow="scroll">
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
					<TabItem label="TAB 5">Content 5</TabItem>
					<TabItem label="TAB 6">Content 6</TabItem>
					<TabItem label="TAB 7">Content 7</TabItem>
				</Tabs>
			</div>
		);
	}
}



export default App;

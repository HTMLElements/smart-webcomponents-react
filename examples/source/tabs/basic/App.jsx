import React from "react";
import ReactDOM from 'react-dom/client';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

const App = () => {
	return (
		<div>
			<Tabs selectedIndex={1}>
				<TabItem label="TAB 1">Content 1</TabItem>
				<TabItem label="TAB 2">Content 2</TabItem>
				<TabItem label="TAB 3">Content 3</TabItem>
				<TabItem label="TAB 4">Content 4</TabItem>
			</Tabs>
		</div>
	);
}

export default App;

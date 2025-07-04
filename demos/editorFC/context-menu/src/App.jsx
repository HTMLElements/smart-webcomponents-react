import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const log = useRef();

	//Properties
	const contextMenuDataSource = (target, type, defaultItems) => {
		if (type === 'table') {
			defaultItems.splice(defaultItems.indexOf('deleteTable'), 1);
			defaultItems.splice(defaultItems.indexOf('deleteRow'), 1);
			defaultItems.splice(defaultItems.indexOf('deleteColumn'), 1);
		}

		if (!defaultItems.find(i => typeof i === 'object' && i.value === 'custoItem1')) {
			defaultItems.push({
				label: 'Custom Delete All Item',
				value: 'customItem1'
			});
		}

		return defaultItems;
	}

	const handleContextMenuItemClick = (e) => {

		const itemName = e.detail.value;
		
		log.current.innerHTML += `<strong>${itemName}</strong> - Context menu item was clicked <br />`;

		if (itemName === 'customItem1') {
			editor.current.clearContent();
		}
	}

	return (
		<div>
			<Editor
				ref={editor}
				id="editor"
				contextMenuDataSource={contextMenuDataSource}
				onContextMenuItemClick={handleContextMenuItemClick}
			>
				<h3>Smart Editor Context Menu</h3>
				<p>Context menus allow to execute quick actions. A different set of actions
					will appear in the Context menu depending on the current selection. The
					Context menu is customized for the this demo with additional actions depending
					on the click target.</p>
				<p>To open the context menu simply set the <b>contextMenu</b> property to enable
					and right click via the mouse somewhere inside the Editor. A different
					menu options list will appear depending on the click target.</p>
				<p>The context menu is available for the following type of elements:</p>
				<ul>
					<li>
						<h4>Text</h4>
						<p>Right click on text anywhere inside the Editor's content to trigger the
							context menu:</p>You can also click on this text here to invode the Context
						menu.</li>
					<li>
						<h4>Images</h4>
						<p>Right click on the image below to open the context menu for images:</p>
						<img
							src="https://www.htmlelements.com/wp-content/design/assets/images/logo-htmlelements.svg"
							className="logo" />
					</li>
					<li>
						<h4>Tables</h4>
						<p>Right click on a table to open the context menu for tables:</p>
						<table>
							<thead>
								<tr>
									<td style={{ textAlign: 'center', backgroundColor: 'rgb(230, 124, 115)', color: 'white' }}>Column 1</td>
									<td style={{ textAlign: 'center', backgroundColor: 'rgb(230, 124, 115)', color: 'white' }}>Column 2</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td />
									<td />
								</tr>
								<tr>
									<td />
									<td />
								</tr>
							</tbody>
						</table>
					</li>
					<li>
						<h4>Hyperlinks</h4>
						<p>Right click on the link below in order to open the context menu for hyperlinks:</p>
						<a
							href="https://www.htmlelements.com/demos/">A link to right click on in order to open the Context menu for hyperlinks.</a>
					</li>
				</ul>
			</Editor>
			<div className="options">
				<div className="description">
					<h4>Content Filtering</h4>
					<p><b>Smart.Editor</b> context menu allows to execute quick actions. Different
						context menu items are displayed for: text, table, image and hyperlinks.
						The context menu items can be customized depending on the target. It is
						possible to add/remove items or set a completely custom toolbar items list.
						Every time a context menu item is clicked a <strong>contextMenuItemClick</strong> event
						is fired.</p>
					<p>The <strong>contextMenuDataSource</strong> property allows to customize
						the Context menus inside the Editor.</p>
					<p>Right click on the Table/Image or anywhere inside the Editor to open the
						Context menu.</p>
					<p>Some of the items of the context menu for the Table have been removed
						and a new item has been added to all types of context menus.</p>
				</div>
				<div className="option" id="eventLog">
					<h4>Event Log:</h4>
					<div ref={log} id="log"></div>
				</div>
			</div>
		</div>
	)
}
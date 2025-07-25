import 'smart-webcomponents-react/source/styles/smart.default.css';
import { createRoot } from 'react-dom/client'

import { Editor } from 'smart-webcomponents-react/editor';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

export default function App() {

	const toolbarItems = [
		{
			name: 'BackgroundColor',
			disabled: true
		},
		{
			name: 'FontSize',
			dataSource: ['10', '20', '30', '40']
		},
		{
			name: 'ddl',
			value: '2',
			width: 100,
			template: (element, item) => {

				if (item.name === 'ddl') {
					const root = createRoot(element);
					root.render(
						<DropDownList
							dropDownAppendTo="body"
							dataSource={['1', '2', '3']}
							placeholder={'Enter...'}
							className="custom-drop-down-toolbar-item"
						></DropDownList>
					)
				}
			}
		},
		{
			name: 'customButton',
			width: 100,
			template: '<smart-button>Button</smart-button>'
		}, {
			name: 'hyperlink',
			inlineToolbarItems: [{
				width: 100,
				template: '<smart-button>Button</smart-button>'
			}],
			editor: {
				address: 'http://www.',
				target: 'ala'
			}
		}, 'removeLink'
	];


	return (
		<div>
			<Editor id="editor" toolbarItems={toolbarItems}>
				smartEditor represents a ready-for-use HTML text editor which can simplify
				web content creation or be a replacement of your HTML Text Areas.
			</Editor>
			<div
				className="options">
				<div className="description">
					<h4>Description</h4>
					The following demo shows how the user can customize some items and event
					add a custom Toolbar item to the Editor.
					<p>The <b>BackgroundColor</b> item has been disabled.</p>
					<p>The <b>FontSize</b> item has custom drop down options.</p>
					<p>A new <b>Custom</b> Toolbar item named 'ddl' has been added.</p>
					<p>A new <b>Custom</b> Toolbar item named 'customButton' has been added.</p>
					<p>The <b>Hyperlink</b> Toolbar item's window editor has some of it's input
						fields pre-populated.
					</p>
				</div>
			</div>
		</div>
	)
}
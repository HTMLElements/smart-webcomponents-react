import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const toolbarItems = ['fontColor', 'BackgroundColor', 'FontSize',
		{
			name: 'image',
			inlineToolbarItems: [{
				name: 'customButton',
				width: 100,
				template: '<smart-button>Button</smart-button>'
			}, 'delete'],
			//Window Editor settings
			editor: {
				url: 'http://www.',
				height: 200,
				width: '100%'
			}
		}, {
			name: 'table',
			inlineToolbarItems: ['BackgroundColor', 'FontSize', {
				name: 'customButtonGrpup',
				width: 200,
				template: (element, item) => {
					if (!element.customElement) {
						const buttonGroup = document.createElement('smart-button-group');
						buttonGroup.dataSource = ['A', 'B', 'C'];
						//Cache it on the ToolbarItem to avoid re-creation of the element
						element.customElement = buttonGroup;
						//Add an event listener if needed
					}
					if (!element.contains(element.customElement)) {
						element.appendChild(element.customElement);
					}
				}
			}],
			//Window Editor settings
			editor: {
				cols: 3,
				rows: 5,
				tableheader: true
			}
		},
		{
			name: 'hyperlink',
			inlineToolbarItems: [{
				width: 200,
				template: '<smart-button>Action Button</smart-button>'
			}, {
				name: 'customInput',
				width: 100,
				template: (element, item) => {
					if (!element.customElement) {
						const input = document.createElement('smart-input');
						input.dataSource = ['Option 1', 'Option 2', 'Option 3'];
						input.dropDownButtonPosition = 'right';
						input.readonly = true;
						element.customElement = input;
						//Add an event listener if needed
					}
					if (!element.contains(element.customElement)) {
						element.appendChild(element.customElement);
					}
				}
			}, {
				name: 'customCheckBox',
				width: 200,
				template: '<smart-check-box>CheckBox Item</smart-check-box>'
			}],
			//Window Editor settings
			editor: {
				address: 'http://www.',
				target: 'ala'
			}
		}, 'removeLink', 'alignment', 'fontname', 'formats', 'splitmode',
	];

	return (
		<div>
			<Editor id="editor" toolbarItems={toolbarItems}>
				<p>smartEditor represents a ready-for-use HTML text editor which can simplify
					web content creation or be a replacement of your HTML Text Areas.</p>
				<p>
					<h1>HTML Table</h1>
					<table>
						<tr>
							<th>Company</th>
							<th>Contact</th>
							<th>Country</th>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Centro comercial Moctezuma</td>
							<td>Francisco Chang</td>
							<td>Mexico</td>
						</tr>
						<tr>
							<td>Ernst Handel</td>
							<td>Roland Mendel</td>
							<td>Austria</td>
						</tr>
						<tr>
							<td>Island Trading</td>
							<td>Helen Bennett</td>
							<td>UK</td>
						</tr>
						<tr>
							<td>Laughing Bacchus Winecellars</td>
							<td>Yoshi Tannamuri</td>
							<td>Canada</td>
						</tr>
						<tr>
							<td>Magazzini Alimentari Riuniti</td>
							<td>Giovanni Rovelli</td>
							<td>Italy</td>
						</tr>
					</table>
				</p>
				<p>
					<h1>HTML Links</h1>
					<p><a href="https://www.htmlelements.com/">Smart Web Components Library</a>
					</p>
				</p>
				<p>
					<h1>HTML Image</h1>
					<img src="https://www.htmlelements.com/docs/browsers-support/browsers.png"
						alt="Smart HTML Elements Browser Support" />
				</p>
			</Editor>
			<div className="options">
				<div className="description">
					<h4>Description</h4>
					The following demo shows how to customize the inline toolbar for the image,
					table and hyperlink elements.
					<p>Click inside the Table/Image or link to view the customized inline toolbar.</p>
					<p>The Table/Hyperlink/Window has it's input pre-configured via the toolbar
						item object's <b>editor</b>
						propoerty.</p>
					<p>the <b>inlineToolbarItems</b> is supported only on table/image/hyperlink
						toolbar items and allows to set an array of toolbar items, some or all
						of which can be completely custom.</p>
				</div>
			</div>
		</div>
	)
}
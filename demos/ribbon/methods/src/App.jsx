import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Ribbon } from 'smart-webcomponents-react/ribbon';
import { Button } from 'smart-webcomponents-react/button';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.ribbon = React.createRef();
		this.addTabBtn = React.createRef();
		this.addGroupBtn = React.createRef();
		this.addItemBtn = React.createRef();
	}

	dataSource = [{
		label: 'Home',
		ribbonGroups: [{
			label: 'Clipboard',
			icon: 'content_paste material-icons',
			ribbonItems: [{
				label: 'Paste',
				icon: 'content_paste material-icons',
				size: 'normal',
				cssClass: 'flat',
				type: 'button',
				allowedSizes: ['normal']
			},
			{
				type: 'group',
				direction: 'vertical',
				ribbonItems: [{
					label: 'Cut',
					icon: 'content_cut material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall',
				},
				{
					label: 'Copy',
					icon: 'content_copy material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall'
				}
				]
			}
			]
		},
		{
			label: 'Font',
			icon: 'format_bold material-icons',
			ribbonItems: [{
				type: 'group',
				direction: 'vertical',
				ribbonItems: [{
					type: 'group',
					direction: 'horizontal',
					ribbonItems: [{
						label: 'Font',
						type: 'input',
						settings: {
							dataSource: ['Arial', 'Arial Black', 'Calibri'],
							value: 'Arial',
							dropDownButtonPosition: 'right'
						},
						cssClass: 'font-family-input'
					},
					{
						label: 'Font size',
						type: 'input',
						settings: {
							dataSource: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 72],
							value: '11',
							dropDownButtonPosition: 'right'
						},
						cssClass: 'font-size-input'
					},
					]
				},
				{
					type: 'group',
					direction: 'horizontal',
					ribbonItems: [{
						label: 'Bold',
						icon: 'format_bold material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Italic',
						icon: 'format_italic material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Underline',
						icon: 'format_underlined material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						type: 'separator'
					},
					{
						label: '',
						tooltip: 'Font color',
						itemTemplate: '<smart-color-picker></smart-color-picker>',
						settings: {
							value: '#000000',
							valueDisplayMode: 'colorBox',
							dropDownAppendTo: 'body',
						},
					}
					]
				}
				]
			}]
		},
		{
			label: 'Paragraph',
			icon: 'format_align_left material-icons',
			ribbonItems: [{
				type: 'group',
				direction: 'vertical',
				ribbonItems: [{
					type: 'group',
					direction: 'horizontal',
					ribbonItems: [{
						label: 'Align left',
						icon: 'format_align_left material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Align center',
						icon: 'format_align_center material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Align right',
						icon: 'format_align_right material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						type: 'separator'
					},
					{
						label: 'Justify',
						icon: 'format_align_justify material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					}
					]
				},
				{
					type: 'group',
					direction: 'horizontal',
					ribbonItems: [{
						label: 'Numbered list',
						icon: 'format_list_numbered material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Bulleted list',
						icon: 'format_list_bulleted material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						type: 'separator'
					},
					{
						label: 'Decrease indent',
						icon: 'format_indent_decrease material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Increase indent',
						icon: 'format_indent_increase material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					}
					]
				}
				]
			},
			{
				type: 'separator'
			},
			{
				type: 'group',
				direction: 'vertical',
				ribbonItems: [{
					label: 'Wrap text',
					icon: 'wrap_text material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall',
					allowedSizes: ['iconOnly','verySmall']
				},
				{
					label: 'Sort Selection',
					icon: 'sort_by_alpha material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall',
					allowedSizes: ['iconOnly','verySmall']
				}
				]
			}
			]
		},
		{
			label: 'Editing',
			icon: 'edit material-icons',
			ribbonItems: [{
				type: 'group',
				wrapSize: 'verySmall',
				ribbonItems: [{
					label: 'Find',
					icon: 'search material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'normal',
					allowedSizes: ['verySmall', 'normal']
				},
				{
					type: 'group',
					wrapSize: 'small',
					ribbonItems: [
						{
							label: 'Replace',
							icon: 'find_replace material-icons',
							type: 'button',
							cssClass: 'flat',
							size: 'normal',
							allowedSizes: ['verySmall', 'small', 'normal']
						},
						{
							label: 'Select all',
							icon: 'select_all material-icons',
							type: 'button',
							cssClass: 'flat',
							size: 'normal',
							allowedSizes: ['verySmall', 'small', 'normal']
						}
					]
				},
				]
			}]
		}
		]
	},
	{
		label: 'Insert',
		ribbonGroups: [{
			label: 'Tables',
			icon: 'table_chart material-icons',
			ribbonItems: [{
				type: 'group',
				direction: 'vertical',
				ribbonItems: [{
					type: 'group',
					direction: 'horizontal',
					ribbonItems: [{
						label: 'Insert table',
						icon: 'table_chart material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Insert row above',
						icon: 'keyboard_arrow_up material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Insert row below',
						icon: 'keyboard_arrow_down material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Insert column left',
						icon: 'keyboard_arrow_left material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Insert column right',
						icon: 'keyboard_arrow_right material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						type: 'separator'
					},
					{
						label: 'Delete row',
						icon: 'delete_sweep material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Delete column',
						icon: 'delete_sweep material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					},
					{
						label: 'Delete table',
						icon: 'delete_sweep material-icons',
						type: 'button',
						cssClass: 'flat',
						size: 'iconOnly'
					}
					]
				},
				{
					label: 'Table styles',
					itemTemplate: '<smart-drop-down-list></smart-drop-down-list>',
					settings: {
						dataSource: ['Table style 1', 'Table style 2', 'Table style 3', 'Table style 4', 'Table style 5'],
						selectedValues: ['Table style 1'],
						dropDownAppendTo: 'body',
					},
					cssClass: 'table-styles-drop-down'
				}
				]
			}]
		},
		{
			label: 'Illustrations',
			icon: 'insert_photo material-icons',
			ribbonItems: [{
				type: 'group',
				direction: 'vertical',
				ribbonItems: [{
					label: 'Pictures',
					icon: 'insert_photo material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall',
					allowedSizes: ['verySmall']
				},
				{
					label: 'Online pictures',
					icon: 'cloud_upload material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall',
					allowedSizes: ['verySmall']
				},
				{
					label: 'Shapes',
					icon: 'bubble_chart material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'verySmall',
					allowedSizes: ['verySmall']
				},
				]
			},
			{
				type: 'separator'
			},
			{
				type: 'group',
				wrapSize: 'small',
				ribbonItems: [
				{
					label: 'Icons',
					icon: 'insert_emoticon material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'normal',
					allowedSizes: ['small','normal']
				},
				{
					label: '3D models',
					icon: 'aspect_ratio material-icons',
					type: 'button',
					cssClass: 'flat',
					size: 'normal',
					allowedSizes: ['small','normal']
				}]
			}
			]
		}
		]
	},
	{
		label: 'View',
		ribbonGroups: [{
			label: 'Show',
			icon: 'visibility material-icons',
			wrapSize: 'small',
			ribbonItems: [{
				label: 'Gridlines',
				icon: 'grid_on material-icons',
				type: 'button',
				cssClass: 'flat',
				size: 'normal',
				allowedSizes: ['small','normal']
			},
			{
				label: 'Headings',
				icon: 'view_headline material-icons',
				type: 'button',
				cssClass: 'flat',
				size: 'normal',
				allowedSizes: ['small','normal']
			}
			]
		},
		{
			label: 'Zoom',
			icon: 'zoom_out_map material-icons',
			wrapSize: 'small',
			ribbonItems: [{
				label: 'Zoom to page',
				icon: 'pageview material-icons',
				type: 'button',
				cssClass: 'flat',
				size: 'normal',
				allowedSizes: ['small','normal']
			},
			{
				label: 'Zoom to selection',
				icon: 'zoom_out_map material-icons',
				type: 'button',
				cssClass: 'flat',
				size: 'normal',
				allowedSizes: ['small','normal']
			},
			]
		}
		]
	},
	{
		label: 'Help',
		wrapSize: 'small',
		ribbonGroups: [{
			label: 'Help',
			icon: 'help_outline material-icons',
			ribbonItems: [{
				label: 'Help',
				icon: 'help_outline material-icons',
				type: 'button',
				cssClass: 'flat',
				size: 'normal',
				allowedSizes: ['verySmall','small','normal']
			},
			{
				label: 'About',
				icon: 'info_outline material-icons',
				type: 'button',
				cssClass: 'flat',
				size: 'normal',
				allowedSizes: ['verySmall','small','normal']
			}
			]
		}]
	}
	];

	fileMenu = {
		type: 'dropDown',
		items: [{
			label: 'New',
			shortcut: 'Ctrl+N'
		},
		{
			label: 'Open',
			shortcut: 'Ctrl+0'
		},
		{
			label: 'Open Containing Folder',
			items: [{
				label: 'Explorer'
			},
			{
				label: 'cmd'
			}
			]
		},
		{
			label: 'Save',
			shortcut: 'Ctrl+S',
			disabled: true,
			separator: true
		},
		{
			label: 'Exit',
			shortcut: 'Alt+F4'
		}
		]
	};

	addTab = () =>{
		const newTab = {
			label: 'New Tab',
			ribbonGroups: [{
				label: 'New Group',
				ribbonItems: [{
					label: 'New Item',
					icon: 'content_paste material-icons',
					cssClass: 'flat',
					size: 'normal',
					type: 'button',
				},
				{
					label: 'New Item 2',
					icon: 'content_cut material-icons',
					cssClass: 'flat',
					size: 'normal',
					type: 'button',
				},
				{
					label: 'New Item 3',
					icon: 'content_copy material-icons',
					cssClass: 'flat',
					size: 'normal',
					type: 'button',
				}
			]
			}]
		};

		this.ribbon.addTab(newTab);
		this.addTabBtn.current.disabled = true;
	}

	addGroup = () =>{
		const currentTab = this.ribbon.selectedTab;
		const newGroup = {
			label: 'New Group 2',
			ribbonItems: [
				{
					label: 'New Item',
					icon: 'content_paste material-icons',
					cssClass: 'flat',
					size: 'normal',
					type: 'button',
				},
				{
					label: 'New Item 2',
					icon: 'content_cut material-icons',
					cssClass: 'flat',
					size: 'normal',
					type: 'button',
				},
				{
					label: 'New Item 3',
					icon: 'content_copy material-icons',
					cssClass: 'flat',
					size: 'normal',
					type: 'button',
				}
			]
		};

		this.ribbon.addGroup(currentTab, newGroup);
		this.addGroupBtn.current.disabled = true;
	}

	addItem =() => {
		const currentTab = this.ribbon.selectedTab;
		const newItem = {
			label: 'New Item 4',
			icon: 'content_paste material-icons',
			cssClass: 'flat',
			size: 'normal',
			type: 'button',
		};

		this.ribbon.addItem(currentTab, 0, newItem);
		this.addItemBtn.current.disabled = true;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<div class="document-container">
							<Ribbon ref={this.ribbon} dataSource={this.dataSource} fileMenu={this.fileMenu} rightToLeft>
							</Ribbon>
							<div class="document">
							<div>
                Tabs, Groups and Items can be added as an HTML node or an Object<br/>
                <div>
                    <Button ref={this.addTabBtn} onClick={this.addTab}>Add new Tab</Button>
                    <Button ref={this.addGroupBtn}onClick={this.addGroup}>Add Group to current tab</Button>
                    <Button ref={this.addItemBtn} onClick={this.addItem}>Add Item to first group of selected tab</Button>
                </div>
            </div>
							</div>
					</div>
				</div>
			</div >
		);
	}
}



export default App;

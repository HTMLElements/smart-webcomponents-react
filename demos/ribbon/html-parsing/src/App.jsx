import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Ribbon, RibbonTab, RibbonGroup, RibbonItem } from 'smart-webcomponents-react/ribbon';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { Input } from 'smart-webcomponents-react/input';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.ribbon = React.createRef();
	}

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

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<div class="document-container">
						<Ribbon ref={this.ribbon} fileMenu={this.fileMenu}>
							<RibbonTab label="Home" selected>
								<RibbonGroup label="Clipboard" icon="content_paste material-icons">
									<RibbonItem type="button" label="Paste" icon="content_paste material-icons" size="normal"
										css-class="flat" allowedSizes={['normal']}></RibbonItem>
									<RibbonGroup direction="vertical">
										<RibbonItem type="button" label="Cut" icon="content_cut material-icons" size="verySmall"
											css-class="flat"></RibbonItem>
										<RibbonItem type="button" label="Copy" icon="content_copy material-icons" size="verySmall"
											css-class="flat"></RibbonItem>
									</RibbonGroup>
								</RibbonGroup>
								<RibbonGroup label="Font" icon="format_bold material-icons">
									<RibbonGroup direction="vertical">
										<RibbonGroup direction="horizontal">
											<RibbonItem label="Font" class="font-family-input">
												<Input
													dataSource={["Arial","Arial Black","Calibri"]} selectedValue="Arial" drop-down-button-position="right"
													drop-down-append-to="body">
												</Input>
											</RibbonItem>
											<RibbonItem label="Font size" class="font-size-input">
												<Input
													dataSource={[8,9,10,11,12,14,16,18,20,22,24,28,36,48,72]} selectedValue="11" drop-down-button-position="right"
													drop-down-append-to="body">
												</Input>
											</RibbonItem>
										</RibbonGroup>
										<RibbonGroup direction="horizontal">
											<RibbonItem type="button" label="Bold" icon="format_bold material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Italic" icon="format_italic material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Underline" icon="format_underlined material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="separator"></RibbonItem>
											<RibbonItem tooltip="Font color" size="iconOnly">
												<ColorPicker
													value="#000000" value-display-mode="colorBox" drop-down-append-to="body">
												</ColorPicker>
											</RibbonItem>
										</RibbonGroup>
									</RibbonGroup>
								</RibbonGroup>
								<RibbonGroup label="Paragraph" icon="format_align_left material-icons" direction="horizontal">
									<RibbonGroup direction="vertical">
										<RibbonGroup direction="horizontal">
											<RibbonItem type="button" label="Align left" icon="format_align_left material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Align center"
												icon="format_align_center material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Align right"
												icon="format_align_right material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="separator"></RibbonItem>
											<RibbonItem type="button" label="Justify" icon="format_align_justify material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
										</RibbonGroup>
										<RibbonGroup direction="horizontal">
											<RibbonItem type="button" label="Numbered list"
												icon="format_list_numbered material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Bulleted list"
												icon="format_list_bulleted material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="separator"></RibbonItem>
											<RibbonItem type="button" label="Decrease indent"
												icon="format_indent_decrease material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Increase indent"
												icon="format_indent_increase material-icons" size="iconOnly" css-class="flat"></RibbonItem>
										</RibbonGroup>
									</RibbonGroup>
									<RibbonItem type="separator"></RibbonItem>
									<RibbonGroup direction="vertical">
										<RibbonItem type="button" label="Wrap text" icon="wrap_text material-icons"
											size="verySmall" css-class="flat"></RibbonItem>
										<RibbonItem type="button" label="Sort Selection" icon="sort_by_alpha material-icons"
											size="verySmall" css-class="flat"></RibbonItem>
									</RibbonGroup>
								</RibbonGroup>
								<RibbonGroup label="Editing" icon="edit material-icons">
									<RibbonGroup wrap-size="verySmall">
										<RibbonItem type="button" label="Find" icon="search material-icons" size="normal"
											css-class="flat" allowedSizes={['verySmall', 'normal']}></RibbonItem>
										<RibbonGroup wrap-size="small">
											<RibbonItem type="button" label="Replace" icon="find_replace material-icons"
												size="normal" css-class="flat" allowedSizes={['verySmall', 'small', 'normal']}></RibbonItem>
											<RibbonItem type="button" label="Select all" icon="select_all material-icons"
												size="normal" css-class="flat" allowedSizes={['verySmall', 'small', 'normal']}></RibbonItem>
										</RibbonGroup>
									</RibbonGroup>
								</RibbonGroup>
							</RibbonTab>
							<RibbonTab label="Insert">
								<RibbonGroup label="Tables" icon="table_chart material-icons">
									<RibbonGroup direction="vertical">
										<RibbonGroup direction="horizontal">
											<RibbonItem type="button" label="Insert table" icon="table_chart material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Insert row above"
												icon="keyboard_arrow_up material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Insert row below"
												icon="keyboard_arrow_down material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Insert column left"
												icon="keyboard_arrow_left material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Insert column right"
												icon="keyboard_arrow_right material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="separator"></RibbonItem>
											<RibbonItem type="button" label="Delete row" icon="delete_sweep material-icons"
												size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Delete column"
												icon="delete_sweep material-icons" size="iconOnly" css-class="flat"></RibbonItem>
											<RibbonItem type="button" label="Delete table"
												icon="delete_sweep material-icons" size="iconOnly" css-class="flat"></RibbonItem>
										</RibbonGroup>
										<RibbonItem label="Table styles"
											class="table-styles-drop-down">
											<DropDownList data-source='["Table style 1","Table style 2","Table style 3","Table style 4","Table style 5"]'
												selected-values='["Table style 1"]' drop-down-append-to="body">
											</DropDownList>
										</RibbonItem>
									</RibbonGroup>
								</RibbonGroup>
								<RibbonGroup label="Illustrations" icon="insert_photo material-icons">
									<RibbonGroup direction="vertical">
										<RibbonItem type="button" label="Pictures" icon="insert_photo material-icons"
											size="verySmall" css-class="flat" allowedSizes={['verySmall']}></RibbonItem>
										<RibbonItem type="button" label="Online pictures" icon="cloud_upload material-icons"
											size="verySmall" css-class="flat" allowedSizes={['verySmall']}></RibbonItem>
										<RibbonItem type="button" label="Shapes" icon="bubble_chart material-icons"
											size="verySmall" css-class="flat" allowedSizes={['verySmall']}></RibbonItem>
									</RibbonGroup>
									<RibbonItem type="separator"></RibbonItem>
									<RibbonGroup wrap-size="small">
										<RibbonItem type="button" label="Icons" icon="insert_emoticon material-icons"
											size="normal" css-class="flat" allowedSizes={['small', 'normal']}></RibbonItem>
										<RibbonItem type="button" label="3D models" icon="aspect_ratio material-icons"
											size="normal" css-class="flat" allowedSizes={['small', 'normal']}></RibbonItem>
									</RibbonGroup>
								</RibbonGroup>
							</RibbonTab>
							<RibbonTab label="View">
								<RibbonGroup label="Show" wrap-size="small" icon="visibility material-icons">
									<RibbonItem type="button" label="Gridlines" icon="grid_on material-icons" size="normal"
										css-class="flat" allowedSizes={['small', 'normal']}></RibbonItem>
									<RibbonItem type="button" label="Headings" icon="view_headline material-icons" size="normal"
										css-class="flat" allowedSizes={['small', 'normal']}></RibbonItem>
								</RibbonGroup>
								<RibbonGroup label="Zoom" wrap-size="small" icon="zoom_out_map material-icons">
									<RibbonItem type="button" label="Zoom to page" icon="pageview material-icons" size="normal"
										css-class="flat" allowedSizes={['small', 'normal']}></RibbonItem>
									<RibbonItem type="button" label="Zoom to selection" icon="zoom_out_map material-icons"
										size="normal" css-class="flat" allowedSizes={['small', 'normal']}></RibbonItem>
								</RibbonGroup>
							</RibbonTab>
							<RibbonTab label="Help">
								<RibbonGroup label="Help Options" wrap-size="small" icon="help_outline material-icons">
									<RibbonItem type="button" label="Help" icon="help_outline material-icons" size="normal"
										css-class="flat" allowedSizes={['verySmall', 'small', 'normal']}></RibbonItem>
									<RibbonItem type="button" label="About" icon="info_outline material-icons" size="normal"
										css-class="flat" allowedSizes={['verySmall', 'small', 'normal']}></RibbonItem>
								</RibbonGroup>
							</RibbonTab>
						</Ribbon>
						<div class="document">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet lorem est, vel venenatis eros venenatis eu. Nulla facilisi. Phasellus ac orci ullamcorper diam cursus malesuada. Phasellus non interdum massa. Suspendisse varius sapien id facilisis consectetur. Fusce blandit, neque et suscipit tempus, neque lorem congue sem, et sodales lacus sem non ante. Pellentesque id urna vitae nibh pulvinar condimentum. Maecenas finibus egestas hendrerit.
							<br /><br />
							Quisque id imperdiet sapien. Fusce molestie dignissim sollicitudin. Sed dictum velit non volutpat ultricies. Proin lobortis ultricies scelerisque. Aenean consectetur nunc sit amet mauris sollicitudin vehicula. Integer vehicula posuere nisl. Vivamus molestie scelerisque nibh, nec facilisis orci suscipit nec. Suspendisse eget leo fermentum, consequat nunc at, tempus mauris.
							<br /><br />
							Duis efficitur a urna non vulputate. Morbi hendrerit sem non sapien elementum bibendum. Nulla convallis neque nec velit facilisis, in blandit sem eleifend. Vestibulum quis elit eu arcu mollis mollis. Vestibulum est orci, accumsan nec libero quis, mollis placerat erat. Praesent non risus fringilla, mattis leo et, pulvinar leo. Donec blandit maximus feugiat. Donec ut velit eu diam efficitur hendrerit.
						</div>
					</div>
				</div>
			</div >
		);
	}
}



export default App;

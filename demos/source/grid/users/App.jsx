import { useRef } from 'react';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import { MultiComboInput } from 'smart-webcomponents-react/multicomboinput';
import { GetData } from './common/data'

export default function App() {

	const grid = useRef();

	const gridSettings = {
		appearance: {
			alternationCount: 2,
			showRowHeader: true,
			showRowStatus: true,
			showRowHeaderSelectIcon: true,
			showRowHeaderFocusIcon: true,
			showColumnIcon: true,
			allowHover: true,
			showRowNumber: true
		},
		dataSource: new Smart.DataAdapter(
			{
				dataSource: GetData(500),
				dataFields:
					[
						'id: number',
						'firstName: string',
						'lastName: string',
						'available: boolean',
						'date: date',
						'productName: string',
						'quantity: number',
						'price: number',
						'total: number'
					]
			}),
		sorting: {
			enabled: true,
			mode: 'many'
		},
		filtering: {
			enabled: true
		},
		editing: {
			enabled: true,
			addNewRow: {
				visible: true,
				displayMode: 'button'
			}
		},
		selection: {
			enabled: true,
			allowCellSelection: true,
			allowRowHeaderSelection: true,
			allowColumnHeaderSelection: true,
			mode: 'extended'
		},
		behavior: { allowColumnReorder: true, rowResizeMode: 'growAndShrink', columnResizeMode: 'growAndShrink' },
		header: {
			visible: true,
			buttons: ['columns', 'filter', 'sort', 'delete', 'search']
		},
		rowDetail: {
			enabled: true,
			dialog: {
				enabled: true
			}
		},
		columnMenu: {
			dataSource: {
				columnMenuCustomizeType: {
					visible: true
				},
				columnMenuItemDelete: {
					visible: true
				}
			}
		},
		columns: [
			{
				label: 'First Name',
				allowHide: false,
				showDescriptionButton: true,
				description: "First Name Column",
				validationRules: [
					{ type: 'required' },
					{ type: 'minLength', value: 2 },
					{ type: 'maxLength', value: 10 }
				],
				dataField: 'firstName',
				columnGroup: 'name'
			},
			{
				label: 'Last Name',
				description: "Last Name Column",
				dataField: 'lastName',
				showDescriptionButton: true,
				columnGroup: 'name'
			},
			{
				label: 'Product',
				width: 200,
				showDescriptionButton: true,
				dataField: 'productName',
				editor: 'dropDownList',
				template: 'list',
				columnGroup: 'order'
			},
			{
				label: 'Date',
				width: 200,
				showDescriptionButton: true,
				cellsFormat: 'dd-MM-yyyy hh:mm',
				dataField: 'date',
				columnGroup: 'order',
				editor: {
					template: 'dateTimePicker',
					autoOpen: true,
					formatString: 'dd-MM-yyyy hh:mm',
					dropDownDisplayMode: 'auto'
				}
			},
			{
				label: 'Created By',
				template: 'createdBy',
				allowEdit: false,
				dataField: 'createdBy',
				dataType: 'string'
			},
			{
				label: 'Modified By',
				template: 'modifiedBy',
				allowEdit: false,
				dataField: 'modifiedBy',
				dataType: 'string'
			}

		],
		columnGroups: [
			{ label: 'Customer Name', align: 'center', name: 'name' },
			{ label: 'Order Detals', align: 'center', name: 'order' }
		],
		currentUser: 1,
		users: [
			{ id: 0, color: '#8E24AA', name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
			{ id: 1, color: '#41B883', name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
			{ id: 2, color: '#53B9E6', name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
			{ id: 3, color: '#FFCD42', name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
			{ id: 4, color: '#DD5347', name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
		]
	}

	const singleSelect = true;
	const pills = true;
	const readonly = true;
	const dropDownButtonPosition = "right";
	const comboUsers = [
		{ value: 0, color: '#8E24AA', label: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
		{ value: 1, color: '#41B883', label: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
		{ value: 2, color: '#53B9E6', label: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
		{ value: 3, color: '#FFCD42', label: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
		{ value: 4, color: '#DD5347', label: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
	];

	const selectedValues = [1];

	const handleChange = (e) => grid.current.currentUser = Number(e.detail.value)

	return (
		<div>
			<div class="demo-description">
				In that example, the DataGrid shows how it can operate in multi-user mode. The "users" array property works together with the "currentUser" index property.
				When "users" is set, the current user may write row comments and additional columns such as "CreatedBy", "ModifiedBy" and "Collaborator" can be used. The 'CreatedBy' column displays
				the user information for the user who created the row. The 'ModifiedBy' displays the user information for the user who last edited the row. The 'Collaborator' column type can be used for setting a user(s) per row. That is useful
				when you want to assign tasks and the row data is a task. You can switch between different users by setting the "currentUser" property to an index from 0 to the count of users. The DataGrid's sorting, filtering, editing, searching, row header and add new row features are enabled.
			</div>
			<Grid
				ref={grid}
				{...gridSettings}
			>
			</Grid>
			<MultiComboInput
				id='users'
				selectedValues={selectedValues}
				singleSelect={singleSelect}
				pills={pills}
				readonly={readonly}
				dropDownButtonPosition={dropDownButtonPosition}
				dataSource={comboUsers}
				onChange={handleChange}>
			</MultiComboInput>
		</div >
	)
}
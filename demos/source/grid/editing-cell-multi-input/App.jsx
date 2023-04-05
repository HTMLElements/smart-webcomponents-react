import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	const editing = {
		enabled: true,
		mode: 'cell'
	};

	const selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};

	const columns = [{
		label: 'First Name',
		dataField: 'firstName',
		template: 'dropDownList',
		editor: 'dropDownList'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		template: 'dropDownList',
		editor: 'dropDownList'
	},
	{
		label: 'Product',
		allowEdit: true,
		width: 150,
		dataField: 'productName',
		template: 'tags',
		editor: {
			template: 'multiComboInput'
		}
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
		cellsFormat: 'c2'
	},
	{
		label: 'Supplier',
		width: 150,
		dataField: 'custom',
		template: 'tags',
		editor: {
			template: 'multiComboInput',
			readonly: true,
			dropDownButtonPosition: 'right',
			autoOpen: true,
			pills: true,
			singleSelect: true,
			dataSource: [{
				value: 0,
				color: '#8E24AA',
				label: 'Andrew',
				image: '../../images/people/andrew.png'
			},
			{
				value: 1,
				color: '#41B883',
				label: 'Anne',
				image: '../../images/people/anne.png'
			},
			{
				value: 2,
				color: '#53B9E6',
				label: 'Janet',
				image: '../../images/people/janet.png'
			},
			{
				value: 3,
				color: '#FFCD42',
				label: 'John',
				image: '../../images/people/john.png'
			},
			{
				value: 4,
				color: '#DD5347',
				label: 'Laura',
				image: '../../images/people/laura.png'
			}
			]
		}
	}
	];

	return (
		<div>
			<Grid
				id="grid"
				dataSource={dataSource}
				editing={editing}
				selection={selection}
				columns={columns}
			></Grid>
		</div>
	)
}
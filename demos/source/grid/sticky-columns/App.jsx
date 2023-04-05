import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const behavior = {
		columnResizeMode: 'growAndShrink'
	};

	const appearance = {
		alternationCount: 2,
		allowColumnStickyPosition: true
	};

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	const columns = [
		'id',
		{
			label: 'First Name',
			dataField: 'firstName'
		},
		{
			label: 'Last Name',
			dataField: 'lastName'
		},
		{
			label: 'Product',
			dataField: 'productName'
		},
		{
			label: 'Quantity',
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Data Grid Sticky Columns Header</h1>
				<p>When the Grid's height is 'auto', the height is a sum of the total rows
					height. The Grid does not have vertical scrollbars in this mode and to
					scroll up, down, the web page's scrollbars are used. The Sticky Columns
					feature, allows the Grid's Columns to be visible, while the user scrolls
					up/down with the web page's scrollbars.</p>
			</div>
			<Grid
				id="grid"
				behavior={behavior}
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}
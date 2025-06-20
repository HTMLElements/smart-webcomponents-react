import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data'



function App() {

	const behavior = {
		columnResizeMode: 'growAndShrink'
	}

	const appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true
	}

	const paging = {
		enabled: true
	}

	const pager = {
		visible: true
	}

	const sorting = {
		enabled: true
	}

	const editing = {
		enabled: true
	}

	const selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	}

	const dataSource = new Smart.DataAdapter({
		dataSource: GetData(500),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			columnGroup: 'name'
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			columnGroup: 'name'
		},
		{
			label: 'Product',
			dataField: 'productName',
			columnGroup: 'order'
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			columnGroup: 'order'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2',
			columnGroup: 'order',
			formatFunction(settings) {
				if (settings.value >= 4) {
					settings.cell.background = '#00A45A';
					settings.cell.color = '#fff';
				} else if (settings.value < 2) {
					settings.cell.background = '#DF3800';
					settings.cell.color = '#fff';
				} else {
					settings.cell.background = '#FFFDE1';
					settings.cell.color = '#333';
				}
				settings.value = '$' + settings.value;
			}
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2',
			columnGroup: 'order',
			formatFunction(settings) {
				if (settings.value >= 20) {
					settings.cell.background = '#00A45A';
					settings.cell.color = '#fff';
				}
				if (settings.value <= 5) {
					settings.cell.background = '#DF3800';
					settings.cell.color = '#fff';
				} else {
					settings.cell.background = '#FFFDE1';
					settings.cell.color = '#333';
				}
				settings.value = '$' + settings.value;
			}
		}
	]

	const columnGroups = [
		{
			label: 'Customer Name',
			align: 'center',
			name: 'name'
		},
		{
			label: 'Order Detals',
			align: 'center',
			name: 'order'
		}
	]

	return (
		<div>
			<div>The Grid in this demo displays data in a series of rows and columns. This
				is the simplest case when the Grid is bound to a local data source.
			</div>
			<Grid
				dataSource={dataSource}
				columns={columns}
				columnGroups={columnGroups}
				appearance={appearance}
				behavior={behavior}
				selection={selection}
				paging={paging}
				pager={pager}
				sorting={sorting}
				editing={editing}
			>
			</Grid>
		</div>
	);
}



export default App;

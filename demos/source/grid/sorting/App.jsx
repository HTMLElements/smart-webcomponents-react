import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

	const sorting = {
		enabled: true
	};

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetCountriesData(),
		dataFields: [
			'ID: number',
			'Country: string',
			'Area: number',
			'Population_Urban: number',
			'Population_Rural: number',
			'Population_Total: number',
			'GDP_Agriculture: number',
			'GDP_Industry: number',
			'GDP_Services: number',
			'GDP_Total: number'
		]
	});

	const columns = [
		{
			label: 'Country',
			dataField: 'Country',
			sortOrder: 'desc'
		},
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	return (
		<div>
			<div className="demo-description">Click on a column header to Sort by it.</div>
			<Grid
				id="grid"
				sorting={sorting}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}
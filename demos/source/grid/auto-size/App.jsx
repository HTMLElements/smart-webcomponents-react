import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

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
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];
	return (
		<div>
			<Grid id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}
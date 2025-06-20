import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

	const sorting = {
		enabled: true
	};

	const dataSource = GetCountriesData();

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
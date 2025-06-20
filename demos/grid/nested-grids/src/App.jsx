import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { createRoot } from 'react-dom/client';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true,
		allowRowDetailToggleAnimation: true
	};

	const onRowInit = (index, row) =>
		index === 0 ? row.showDetail = true : {}

	const onRowDetailInit = (index, row, detail) => {

		const detailRoot = createRoot(detail);
		detailRoot.render
			(
				<Grid
					dataSource={GetCountriesData().filter((data) => data.ID === row.data.ID)
					}
					columns={
						[
							'Population_Urban',
							'Population_Rural',
							'Population_Total',
							'GDP_Total'
						]
					}
				/>
			)
	};

	const rowDetail = {
		enabled: true,
		visible: true,
		height: 120
	};

	const dataSource = GetCountriesData();

	const columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	return (
		<div>
			<div className="demo-description">smartGrid can display nested Grids by using the Row Detail functionality.
				By expanding a Grid row in this demo, a Nested Grid is displayed showing
				additional details about data. That is achieved by enabling row details
				and implementing the 'onRowDetailInit' callback function.
			</div>
			<Grid
				id="grid"
				appearance={appearance}
				onRowInit={onRowInit}
				onRowDetailInit={onRowDetailInit}
				rowDetail={rowDetail}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}
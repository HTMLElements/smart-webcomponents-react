import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true
	};

	const columnWidth = 100;

	const dataSource = 10000;

	const onCellValue = (cell) => {
		cell.value = cell.row.index + '.' + cell.column.index;
	}

	return (
		<div>
			<div className="demo-description">The Grid in this example is with 1000 columns, 10,000 rows</div>
			<Grid id="grid"
				appearance={appearance}
				columnWidth={columnWidth}
				dataSource={dataSource}
				onCellValue={onCellValue}
			></Grid>
		</div>
	)
}

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data'

export default function App() {

	const eventsLog = useRef();

	const appearance = {
		showRowHeader: true
	};

	const selection = {
		enabled: true,
		mode: 'extended',
		allowCellSelection: true
	};

	const dataSource = GetData(3000);

	const columns = [{
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
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	const handleChange = (e) => {

		const detail = e.detail;
		const log = document.createElement('div');

		log.innerHTML = `change - started: ${detail.started}, finished: ${detail.finished}`;

		if (detail.started) {
			eventsLog.current.innerHTML = '';
		}
		
		eventsLog.current.appendChild(log);
	}

	return (
		<div>
			<div className="demo-description">This demo demonstrates the Grid's "change" event. The "change" event occurs
				when the user selects cells, rows or columns. The "change" event has two
				boolean arguments: "started" and "finished". When the selection starts,
				the "started" boolean argument value is "true". When the selection ends,
				the "finished" boolean argument value is "true". If the selection is with
				dragging, the values of "started" and "finished" is false.</div>
			<br />
			<Grid id="grid" onChange={handleChange}
				appearance={appearance}
				selection={selection}
				dataSource={dataSource}
				columns={columns}></Grid>
			<div className="options">
				<div className="caption">Events</div>
				<div ref={eventsLog} className="option" id="eventsLog"></div>
			</div>
		</div>
	)
}
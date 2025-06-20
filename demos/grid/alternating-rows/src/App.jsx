import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const grid = useRef(null);

	const behavior = {
		columnResizeMode: 'growAndShrink'
	};

	const appearance = {
		alternationCount: 2
	};

	const dataSource = GetData(15);


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

	const handleAlternationStartChange = (event) => {

		const value = event.detail.value;
		
		if (value) {

			grid.current.appearance.alternationStart = 1;

		} else {

			grid.current.appearance.alternationStart = 0;

		}
	}

	const handleAlternationEndChange = (event) => {

		const value = event.detail.value;

		if (value) {

			grid.current.appearance.alternationEnd = 10;

		} else {

			grid.current.appearance.alternationEnd = 0;

		}
	}

	const handleAlternationCountChange = (event) => {

		const value = event.detail.value;

		if (value) {

			grid.current.appearance.alternationCount = 5;

		} else {

			grid.current.appearance.alternationCount = 2;

		}
	}

	return (
		<div>
			<div className="demo-description">
				<h1>Data Grid Alternating Rows</h1>
				<p>The Data Grid provides Alternating Rows options. It can render alternation
					by one or multiple rows. It can have custom alternation start and end.
					This is controlled by the 'appearance.alternationStart', 'appearance.alternationEnd',
					'appearance.alternationCount' properties. In this demo, use the checkboxes
					to change the alternation style.</p>
			</div>
			<Grid ref={grid} id="grid"
				behavior={behavior}
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}></Grid>
			<div className="options">
				<div className="caption">Appearance</div>
				<div className="option">
					<CheckBox id="alternationStart" onChange={handleAlternationStartChange}>alternationStart = 1</CheckBox>
					<br />
					<br />
					<CheckBox id="alternationEnd" onChange={handleAlternationEndChange}>alternationEnd = 10</CheckBox>
					<br />
					<br />
					<CheckBox id="alternationCount" onChange={handleAlternationCountChange}>AlternationCount = 5</CheckBox>
					<br />
					<br />
				</div>
			</div>
		</div>
	)
}
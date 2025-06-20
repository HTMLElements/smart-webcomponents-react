import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useEffect, useRef } from "react";

import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GeneratePivotData } from './common/data';

export default function App() {

	const pivottable = useRef();

	useEffect(() => {

		const messagesEn = Object.assign({}, pivottable.current.messages.en, {
			total: 'Revenue'
		});

		pivottable.current.messages = Object.assign({}, pivottable.current.messages, {
			en: messagesEn
		});

	}, [])

	const columnTotals = true;

	const columnTotalsPosition = 'far';

	const dataSource = GeneratePivotData(300, 3);

	const freezeHeader = true;

	const grandTotal = true;

	const keyboardNavigation = true;

	const rowTotals = true;

	const sortMode = 'one';

	const columns = [
		{
			label: 'Continent',
			dataField: 'continent',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
		},
		{
			label: 'City',
			dataField: 'city',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
		},
		{
			label: 'Year',
			dataField: 'year',
			dataType: 'number',
			allowPivot: true,
			pivot: true
		},
		{
			label: 'Quarter',
			dataField: 'quarter',
			dataType: 'string',
			allowPivot: true,
			pivot: true
		},
		{
			label: 'Month',
			dataField: 'month',
			dataType: 'string',
			allowPivot: true,
			pivot: true
		},
		{
			label: 'Revenue',
			dataField: 'revenue',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				prefix: '$'
			}
		}
	];

	return (
		<div>
			<div className="demo-description">This demo showcases a Pivot Table bound to a simple array.</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				columnTotals={columnTotals}
				columnTotalsPosition={columnTotalsPosition}
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				grandTotal={grandTotal}
				keyboardNavigation={keyboardNavigation}
				rowTotals={rowTotals}
				sortMode={sortMode}
				columns={columns}
			></PivotTable>
		</div>
	)
}
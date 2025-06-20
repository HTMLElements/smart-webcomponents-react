import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef, useEffect } from "react";

import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GeneratePivotData } from './common/data';

export default function App() {

	const pivottable = useRef();

	useEffect(() => {

		const messagesEn = Object.assign({}, pivottable.current.messages.en, {
			total: 'Revenue'
		});

		pivottable.current.messages = Object.assign({}, pivottable.current.messages,
			{
				en: messagesEn
			}
		)

	}, [])

	const columnTotals = true;
	const columnTotalsPosition = 'far';
	const dataSource = GeneratePivotData(300, 3);
	const freezeHeader = true;
	const grandTotal = true;
	const groupLayout = 'classic';
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
			formatFunction(settings) {
				settings.cell.classList.remove('small', 'medium', 'large');
				if (settings.value < 100000 / 3) {
					settings.cell.classList.add('small');
				} else if (settings.value < 2 * 100000 / 3) {
					settings.cell.classList.add('medium');
				} else {
					settings.cell.classList.add('large');
				}
				if (!isNaN(settings.value) && settings.value !== null) {
					settings.template = '$' + settings.value;
				}
			}
		}
	];

	return (
		<div>
			<div className="demo-description">This demo showcases how to customize and style cells in Pivot Table based
				on their values.</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				columnTotals={columnTotals}
				columnTotalsPosition={columnTotalsPosition}
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				grandTotal={grandTotal}
				groupLayout={groupLayout}
				keyboardNavigation={keyboardNavigation}
				rowTotals={rowTotals}
				sortMode={sortMode}
				columns={columns}
			></PivotTable>
		</div>
	)
}
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';
import { GeneratePivotData } from './common/data';

export default function App() {

	const pivottable = useRef();

	const dataSource = GeneratePivotData(300, 2);

	const drillDown = true;

	const freezeHeader = true;

	const grandTotal = true;

	const keyboardNavigation = true;

	const selection = true;

	const selectionMode = 'cell';

	const toolbar = true;

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
			dataType: 'string',
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
			label: 'Revenue',
			dataField: 'revenue',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				prefix: '$',
				negativesInBrackets: true
			}
		},
		{
			label: 'Expenses',
			dataField: 'expense',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				prefix: '$',
				negativesInBrackets: true
			}
		}
	];

	const readyHandler = () => {
		const pivotTable = pivottable.current;
		const rows = pivotTable.nativeElement.rows;

		const dynamicColumns = pivotTable.getDynamicColumns()

		pivotTable.select(rows[0].$.id, dynamicColumns[1].id);
		pivotTable.select(rows[0].$.id, dynamicColumns[2].id);
	}

	const changeHandler = (event) => {
		pivottable.current.hideCellSelectionTooltip = event.detail.value;
	}

	return (
		<div>
			<div className="demo-description">This demo showcases the cell selection functionality of PivotTable. Click-drag
				in order to select multiple cells. When multiple cells with non-null summary
				values are selected, a tooltip showng the Average, Count, and Sum of the
				values is displayed.</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				dataSource={dataSource}
				drillDown={drillDown}
				freezeHeader={freezeHeader}
				grandTotal={grandTotal}
				keyboardNavigation={keyboardNavigation}
				selection={selection}
				selectionMode={selectionMode}
				toolbar={toolbar}
				columns={columns}
				onReady={readyHandler}></PivotTable>
			<div className="options">
				<div className="option">
					<ToggleButton id="toggleButton" onChange={changeHandler}>Hide cell selection tooltip</ToggleButton>
				</div>
			</div>
		</div>
	)
}
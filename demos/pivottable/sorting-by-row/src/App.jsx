import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';
import { GeneratePivotData } from './common/data';

export default function App() {

	const pivottable = useRef();
	const toggleButtonLabel = useRef();

	const columnTotals = true;
	const dataSource = GeneratePivotData(300, 1);
	const freezeHeader = true;
	const grandTotal = true;
	const keyboardNavigation = true;
	const onInit = function () {
		this.rows[0].expanded = true;
	};
	const rowSort = true;
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

	const changeHandler = (е) => {
		if (е.detail.value) {
			pivottable.current.groupLayout = 'classic';
			toggleButtonLabel.current.innerHTML = 'default';
		} else {
			pivottable.current.groupLayout = 'default';
			toggleButtonLabel.current.innerHTML = 'classic';
		}
	}

	return (
		<div>
			<div className="demo-description">This demo shows the sorting by row functionality of PivotTable. Click
				on a cell from the Group column to sort by its respective row.
			</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				columnTotals={columnTotals}
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				grandTotal={grandTotal}
				keyboardNavigation={keyboardNavigation}
				onInit={onInit}
				rowSort={rowSort}
				columns={columns}
			></PivotTable>
			<div className="options">
				<div className="option">
					<ToggleButton
						id="toggleButton"
						onChange={changeHandler.bind(this)}
					>
						Change <strong>groupLayout</strong> to '<span ref={toggleButtonLabel} id="toggleButtonLabel">classic</span>'
					</ToggleButton>
				</div>
			</div>
		</div>
	)
}
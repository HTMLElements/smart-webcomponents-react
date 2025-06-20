import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useEffect, useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const pivottable = useRef();

	const handlePivotTableInit = () => {
		const dynamicColumns = pivottable.current.getDynamicColumns();

		pivottable.current.sortBy(dynamicColumns[2], 'desc');
	}

	const dataSource = GetData(50);

	const freezeHeader = true;

	const keyboardNavigation = true;

	const sortMode = 'one';

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string'
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
		},
		{
			label: 'Product Name',
			dataField: 'productName',
			dataType: 'string',
			allowPivot: true,
			pivot: true
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			dataType: 'number',
			summary: 'sum'
		},
		{
			label: 'Price',
			dataField: 'price',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				prefix: '$',
				decimalPlaces: 2
			}
		},
		{
			label: 'Date Purchased',
			dataField: 'date',
			dataType: 'date'
		} // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
	];

	const handleChange = (e) => {
		pivottable.current.sortMode = e.detail.value ? 'many' : 'one';
	}

	return (
		<div>
			<div className="demo-description">This demo showcases the sorting capabilities of PivotTable which are enabled
				via the property <strong>sortMode</strong> which can be set to 'none', 'one',
				or 'many'.
			</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				sortMode={sortMode}
				columns={columns}
				onInit={handlePivotTableInit}
			></PivotTable>
			<div className="options">
				<div className="option">
					<CheckBox onChange={handleChange}>sortMode: 'many'</CheckBox>
				</div>
			</div>
		</div>
	)
}

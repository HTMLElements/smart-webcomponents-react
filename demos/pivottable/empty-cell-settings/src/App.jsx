import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';
import { GetData } from './common/data';

export default function App() {

	const pivottable = useRef();
	const toggleButtonLabel = useRef();

	const dataSource = GetData(50)

	const freezeHeader = true;

	const keyboardNavigation = true;
	const nullDefaultValue = 0;
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

	const changeHandler = (event) => {

		if (event.detail.value) {
			pivottable.current.nullDefaultValue = null;
			toggleButtonLabel.current.innerHTML = '0';
		} else {
			pivottable.current.nullDefaultValue = 0;
			toggleButtonLabel.current.innerHTML = 'null';
		}
	}

	return (
		<div>
			<div className="demo-description">This demo shows how to change the value shown in cells that do not have
				aggregated data to display. This behavior is controlled by the property <strong>nullDefaultValue</strong> which
				is <em>null</em> by default and displays empty cells. In this example, the
				property is set to <em>0</em>.
			</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				nullDefaultValue={nullDefaultValue}
				columns={columns}></PivotTable>
			<div className="options">
				<div className="option">
					<ToggleButton
						id="toggleButton"
						onChange={changeHandler}
					>
						Change <strong>nullDefaultValue</strong> to <span ref={toggleButtonLabel} id="toggleButtonLabel">null</span>
					</ToggleButton>
				</div>
			</div>
		</div>
	)
}
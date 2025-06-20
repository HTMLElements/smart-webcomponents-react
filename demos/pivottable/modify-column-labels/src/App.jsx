import 'smart-webcomponents-react/source/styles/smart.default.css';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(50;
	
	const freezeHeader = true;

	const keyboardNavigation = true;

	const onColumnRender = (settings) => {
		if (settings.text === 'Group') {
			settings.text = settings.column.originalColumn.label.toUpperCase();
			return;
		}
		if (settings.column.summary) {
			settings.text = 'Σ(' + settings.column.originalColumn.label + ')';
		}
		if (settings.fullDefinition.dataFields[0].label.toLowerCase().indexOf('espresso') !== -1) {
			settings.cell.classList.add('highlight');
		}
	};

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
			rowGroup: true,
			formatFunction(settings) {
				settings.template = `<strong>${settings.value}</strong>`;
			}
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

	return (
		<div>
			<div className="demo-description">This demo shows how modify labels displayed in the PivotTable by implementing
				the <strong>onColumnRender</strong> and <strong>formatFunction</strong> callback
				functions.</div>
			<PivotTable
				id="pivotTable"
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				onColumnRender={onColumnRender}
				columns={columns}
			></PivotTable>
		</div>
	)
}

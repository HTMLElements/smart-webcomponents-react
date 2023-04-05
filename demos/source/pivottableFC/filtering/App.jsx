import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const pivottable = useRef();
	const button = useRef();
	const button2 = useRef();
	const button3 = useRef();
	const button4 = useRef();

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(25),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});

	const freezeHeader = true;

	const keyboardNavigation = true;

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
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

	const enableAll = () => {
		button.current.disabled = false;
		button2.current.disabled = false;
		button3.current.disabled = false;
		button4.current.disabled = false;
	}

	const handleFilter1Click = () => {

		const filterGroup = new window.Smart.Utilities.FilterGroup();
		const filterObject = filterGroup.createFilter('string', 'espresso', 'CONTAINS');

		filterGroup.addFilter('or', filterObject);

		pivottable.current.clearFilters();
		pivottable.current.addFilter('productName', filterGroup);

		enableAll();

		button.currentdisabled = true;
	}

	const handleFilter2Click = () => {

		const filterGroup = new window.Smart.Utilities.FilterGroup();
		const filterObject = filterGroup.createFilter('number', 5, 'GREATER_THAN');

		filterGroup.addFilter('or', filterObject);

		pivottable.current.clearFilters();
		pivottable.current.addFilter('quantity', filterGroup);

		enableAll();

		button2.current.disabled = true;
	}

	const handleFilter3Click = () => {

		const filterGroup1 = new window.Smart.Utilities.FilterGroup();
		const filterObject1 = filterGroup1.createFilter('string', 'Andrew', 'EQUAL');
		const filterGroup2 = new window.Smart.Utilities.FilterGroup();
		const filterObject2 = filterGroup2.createFilter('string', 'Ohno', 'EQUAL');

		filterGroup1.addFilter('or', filterObject1);
		filterGroup2.addFilter('or', filterObject2);

		pivottable.current.clearFilters();
		pivottable.current.addFilter('firstName', filterGroup1);
		pivottable.current.addFilter('lastName', filterGroup2);

		enableAll();

		button3.current.disabled = true;
	}

	const handleClearFiltersClick = () => {

		pivottable.current.clearFilters();

		enableAll();
		
		button4.current.disabled = true;
	}

	return (
		<div>
			<div className="demo-description">This demo shows how to filter PivotTable programmatically.</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></PivotTable>
			<div className="options">
				<div className="caption">Filter Pivot Table:</div>
				<div className="option">
					<Button ref={button} id="filter1" onClick={handleFilter1Click}>"Espresso" only</Button>
				</div>
				<div className="option">
					<Button ref={button2} id="filter2" onClick={handleFilter2Click}>Quantity greater than 5 only</Button>
				</div>
				<div className="option">
					<Button ref={button3} id="filter3" onClick={handleFilter3Click}>First name "Andrew" or last name "Ohno"</Button>
				</div>
				<div className="option">
					<Button ref={button4} id="clearFilters" disabled onClick={handleClearFiltersClick}>Clear filters</Button>
				</div>
			</div>
		</div>
	)
}
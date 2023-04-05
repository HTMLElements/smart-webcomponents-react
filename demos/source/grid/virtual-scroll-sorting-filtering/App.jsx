import { useMemo } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridData = useMemo(() => GetData(100000), []);

	const sorting = {
		enabled: true
	};

	const filtering = {
		enabled: true
	};

	const scrolling = 'virtual';

	const pager = {
		position: 'far',
		visible: true
	};

	let timer = null;
	let sortedData = null;
	let filteredData = null;

	const dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 100000,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {

			if (timer) { clearTimeout(timer) }

			// Timer simulates AJAX data request.
			timer = setTimeout(function () {
				let data = gridData.slice(0);
				/*
					The details argument has the following properties: 'sorting', 'filtering', 'grouping' and 'action'.
					The 'action' could be 'dataBind', 'scroll', 'sort', 'filter', 'group', 'pageIndexChange' and 'pageSizeChange'.
					'sorting' is an array with sorted columns and sort orders.
					'filtering' is an array with filtered columns and smartFilterGroup objects.
					'grouping' is an array of grouped columns.
				*/
				// Sorts the data.
				if (
					details.sorting.length > 0
					&& (details.action === 'sort' || details.action === 'dataBind')
				) {

					let sortColumns = [];
					let sortOrders = [];

					for (let dataField in details.sorting) {

						const sortOrder = details.sorting[dataField].sortOrder;
						sortColumns.push(dataField);
						sortOrders.push(sortOrder);

					}

					sortedData = window.Smart.DataAdapter.Sort(data, sortColumns, sortOrders);

				} else if (details.sorting.length === 0) { sortedData = null }

				if (sortedData) { data = sortedData }

				// Filters the data.
				if (
					details.filtering.length > 0
					&& (
						details.action === 'sort'
						|| details.action === 'filter'
						|| details.action === 'dataBind'
					)
				) {

					let filterColumns = [];
					let filters = [];

					for (let dataField in details.filtering) {

						const filter = details.filtering[dataField];

						filterColumns.push(dataField);
						filters.push(filter);

					}

					filteredData = window.Smart.DataAdapter.Filter(data, filterColumns, filters);

				} else if (details.filtering.length === 0) { filteredData = null }
				
				if (filteredData) { data = filteredData }

				// This callback returns the data to be displayed in the Grid. If virtualDataSourceLength is changed, updates the scroll height and pages count, too.
				resultCallbackFunction({
					dataSource: data.slice(details.first, details.last),
					virtualDataSourceLength: data.length
				});

			}, 100);
		},
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

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

	return (
		<div>
			<div className="demo-description">Data in this demo is loaded on demand when you Scroll, Sort or Filter.
				This is achieved by using the Grid's Data Virtualization in combination
				with DataAdapter's "virtualDataSource".</div>
			<Grid id="grid"
				sorting={sorting}
				filtering={filtering}
				scrolling={scrolling}
				pager={pager}
				dataSource={dataSource}
				columns={columns}></Grid>
		</div>
	)
}
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef, useEffect } from "react";

import { Chart } from 'smart-webcomponents-react/chart';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GeneratePivotData } from './common/data';

export default function App() {

	const pivottable = useRef();
	const chart = useRef();

	const aggregatedData = useRef([])
	const expandedColumns = useRef([])
	const expandedRows = useRef([])

	useEffect(() => {

		if (!pivottable.current) { return }

		const messagesEn = Object.assign({}, pivottable.current.messages.en, {
			total: 'Revenue'
		});

		pivottable.current.messages = Object.assign({}, pivottable.current.messages, {
			en: messagesEn
		});

	}, [])

	const columnTotals = true;
	const dataSource = GeneratePivotData(300, 3);
	const freezeHeader = true;
	const keyboardNavigation = true;
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
			label: 'Revenue',
			dataField: 'revenue',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				prefix: '$'
			}
		}
	];

	const caption = '';
	const description = '';
	const showLegend = true;
	const legendLayout = {
		flow: 'vertical',
		width: 100,
		height: 500,
		left: 1070,
		top: 50
	};
	const padding = {
		left: 5,
		top: 5,
		right: 150,
		bottom: 5
	};
	const titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	const borderLineWidth = 0;
	const xAxis = {
		dataField: 'Period',
		gridLines: {
			visible: false
		},
		type: 'basic'
	};
	const colorScheme = 'scheme28';
	const seriesGroups = [{
		type: 'column',
		columnsGapPercent: 50,
		seriesGapPercent: 0,
		valueAxis: {
			description: 'Revenue',
			axisSize: 'auto'
		},
		series: []
	}];

	const continents = ['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];
	const currentYear = new Date().getFullYear();
	const years = [currentYear - 2, currentYear - 1, currentYear];

	const getInitialData = () => {

		const continentsDataOnly = aggregatedData.current.filter(dataPoint => dataPoint.level === 0);

		const series = continents.map(continent => ({
			dataField: continent,
			displayText: continent
		}))

		const dataSource = [];

		years.forEach(year => dataSource.push({
			Period: year
		}));

		for (const aggregatedDataPoint of continentsDataOnly) {
			for (const column in aggregatedDataPoint) {
				if (column.indexOf('TOTAL') !== -1 && /_Q\d_/.test(column) === false) {
					// process only year total columns
					const dataPoint = dataSource
						.find(dP => dP.Period === parseFloat(column.slice(0, 4)));

					const value = aggregatedDataPoint[column];

					dataPoint[aggregatedDataPoint.id.slice(0, aggregatedDataPoint.id.length - 1)] = value;
				}
			}
		}

		chart.current.seriesGroups[0].series = series;
		chart.current.dataSource = dataSource;
	}

	const getDataBasedOnExpandedGroups = () => {

		if (
			expandedColumns.current.length === 0
			&& expandedRows.current.length === 0
		) {
			getInitialData();
			return;
		}

		const dataSource = [];

		let series = [];
		let yearsToDisplay = [];

		if (expandedColumns.current.length > 0) {

			yearsToDisplay = expandedColumns.current
				.sort()
				.map(col => parseFloat(col.slice(0, 4)));

			yearsToDisplay.forEach(year => {
				for (let i = 1; i <= 4; i++) {
					// Create a data point for each quarter (Q) of each year to display
					dataSource.push({
						Period: `${year}/Q${i}`
					});
				}
			});
		} else {
			yearsToDisplay = years;
			years.forEach(year => dataSource.push({
				Period: year
			}));
		}

		if (expandedRows.current.length === 0) {
			series = continents.map(continent => ({
				dataField: continent,
				displayText: continent
			}));
		}
		
		aggregatedData.current.forEach(sourceDataPoint => {
			if (
				(sourceDataPoint.level === 0 && expandedRows.current.length > 0) ||
				(sourceDataPoint.level === 1 && expandedRows.current.length === 0)
			) { return }
			
			if (
				expandedRows.current.length > 0 &&
				expandedRows.current
					.indexOf(sourceDataPoint.id.replace(/^(.+0).+/, '$1')) !== -1
			) {
				// Create a Chart series for each expanded continent's city
				const city = sourceDataPoint.id.replace(/.+0(.+)1/, '$1');
				series.push({
					dataField: city,
					displayText: city
				});
			}
			for (const column in sourceDataPoint) {
				if (
					column.indexOf('TOTAL') === -1 ||
					(/_Q\d_/.test(column) === false && expandedColumns.current.length > 0) 
					|| (/_Q\d_/.test(column) === true && expandedColumns.current.length === 0)
				) { continue; }

				let dataPoint;

				if (expandedColumns.current.length > 0) {
					dataPoint = dataSource
						.find(dP => dP.Period === column.slice(0, 7).replace('_', '/'));
				} else {
					dataPoint = dataSource
						.find(dP => dP.Period + '_TOTAL' === column);
				}

				if (!dataPoint) { continue }

				let value = sourceDataPoint[column];
				
				if (expandedRows.current.length > 0) {
					const city = sourceDataPoint.id.replace(/.+0(.+)1/, '$1');
					dataPoint[city] = value;
				} else {
					dataPoint[sourceDataPoint.id.slice(0, sourceDataPoint.id.length - 1)] = value;
				}
			}
		});

		chart.current.seriesGroups[0].series = series;
		chart.current.dataSource = dataSource;
	}

	const collapseTotalColumnHandler = (e) => {
		expandedColumns.current = expandedColumns.current
			.filter(col => col !== e.detail.columnDefinition.id);

		getDataBasedOnExpandedGroups();
	}

	const expandTotalColumnHandler = (e) => {
		expandedColumns.current.push(e.detail.columnDefinition.id);
		getDataBasedOnExpandedGroups();
	}

	const expandHandler = (e) => {
		expandedRows.current.push(e.detail.record.id);
		getDataBasedOnExpandedGroups();
	}

	const collapseHandler = (e) => {
		expandedRows.current = expandedRows.current
			.filter(row => row !== e.detail.record.id);

		getDataBasedOnExpandedGroups();
	}

	const readyHandler = () => {
		aggregatedData.current = pivottable.current.nativeElement.rows.toArray();
		getInitialData();
	}

	return (
		<div>
			<div className="demo-description">This demo shows how to integrate PivotTable with Chart, synchronising
				the Chart's data source and series when total columns and rows of the Pivot
				Table are toggled.</div>
			<Chart
				ref={chart}
				id="revenueChart"
				caption={caption}
				description={description}
				showLegend={showLegend}
				legendLayout={legendLayout}
				padding={padding}
				titlePadding={titlePadding}
				borderLineWidth={borderLineWidth}
				xAxis={xAxis}
				colorScheme={colorScheme}
				seriesGroups={seriesGroups}
			></Chart>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				columnTotals={columnTotals}
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
				onCollapseTotalColumn={collapseTotalColumnHandler}
				onExpandTotalColumn={expandTotalColumnHandler}
				onCollapse={collapseHandler}
				onExpand={expandHandler}
				onReady={readyHandler}
			></PivotTable>
		</div>
	)
}
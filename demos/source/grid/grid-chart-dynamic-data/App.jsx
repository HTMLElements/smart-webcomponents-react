import { useEffect, useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { Chart } from 'smart-webcomponents-react/chart';

export default function App() {

	const gridRef = useRef(null);
	const chartRef = useRef(null);

	const today = new Date();
	const tradingData = useRef([
		{ commodity: 'Crude Oil', price: 38.1900, day: -2.00, week: 2.63, month: 58.53, year: -28.16, date: today },
		{ commodity: 'Brent', price: 40.5200, day: -1.63, week: 2.04, month: 37.02, year: -34.82, date: today },
		{ commodity: 'Natural Gas', price: 1.7370, day: 0.58, week: -4.35, month: -4.92, year: -27.55, date: today },
		{ commodity: 'Gasoline', price: 1.2073, day: -0.49, week: 8.36, month: 29.60, year: -31.07, date: today },
		{ commodity: 'Gold', price: 1720.00, day: 0.23, week: 1.30, month: 1.43, year: 29.67, date: today },
		{ commodity: 'Silver', price: 17.6600, day: 0.56, week: 0.20, month: 13.83, year: 20.41, date: today },
		{ commodity: 'Wheat', price: 506.2500, day: 0.40, week: -0.93, month: -1.65, year: -1.98, date: today },
		{ commodity: 'Palm Oil', price: 2306.00, day: -6.07, week: -5.69, month: 2.40, year: -5.57, date: new Date(today.getTime() - 86400000) },
		{ commodity: 'Cheese', price: 2.1620, day: 1.84, week: 65.67, month: 72.96, year: 27.70, date: today },
		{ commodity: 'Rice', price: 16.3200, day: -7.09, week: -20.64, month: -2.91, year: 40.99, date: new Date(today.getTime() - 86400000) },
		{ commodity: 'Copper', price: 2.6180, day: 0.67, week: 5.46, month: 10.32, year: -1.87, date: today },
		{ commodity: 'Steel', price: 3716.00, day: 0.19, week: 3.65, month: 9.07, year: -0.91, date: new Date(today.getTime() - 2 * 86400000) },
		{ commodity: 'Aluminum', price: 1605.50, day: 0.03, week: 3.78, month: 7.21, year: -9.70, date: today },
		{ commodity: 'Tin', price: 16922, day: 1.54, week: 5.70, month: 11.04, year: -11.68, date: new Date(today.getTime() - 2 * 86400000) }
	]);

	useEffect(() => {

		if (!gridRef.current) {
			return;
		}

		const updateValues = function () {

			const grid = gridRef.current;
			
			grid.beginUpdate();

			for (let i = 0; i < grid.rows.length; i++) {

				const cells = grid.rows[i].cells;
				const cell = cells[1];
				const date = cells[5].value;

				if (date.getDate() !== new Date().getDate()) { continue; }

				if (Math.random() > 3 / 5) {

					cell.value = cell.value + 1e-10;
					grid.dataSource[i].priceChange = 0;

					continue;
				}

				let valueChange =
					(Math.random() > 0.5 ? 1 : -1)
					* cell.value
					* ((Math.random() * 15 + 1) / 100)

				valueChange = parseFloat(valueChange.toFixed(2));

				cell.value = Math.max(1, parseFloat((cell.value + valueChange).toFixed(2)));

				cells[5].value = new Date();

				tradingData.current[i].price = cell.value;

				grid.dataSource[i].priceChange = valueChange;

			}
			
			grid.endUpdate();
			chartRef.current.update();
		};

		// update every second.
		setInterval(function () {
			updateValues();
		}, 1000);

	}, []);

	const changeTemplate = (formatObject) => {

		const value = formatObject.value, opacity = Math.abs(value) / 100;

		if (value < 0) { formatObject.cell.background = `rgba(229, 57, 53, ${opacity})`; }
		else if (value > 0) { formatObject.cell.background = `rgba(67, 160, 71, ${opacity})`; }

		formatObject.template = value + '%';

	}

	const gridSettings = {
		appearance: {
			alternationCount: 2,
			showColumnLines: false,
			showColumnHeaderLines: false
		},
		behavior: { columnResizeMode: 'growAndShrink' },
		dataSource: new window.Smart.DataAdapter({
			dataSource: tradingData.current,
			dataFields: [
				'commodity: string',
				'price: number',
				'priceChange: number',
				'day: number',
				'week: number',
				'month: number',
				'year: number',
				'date: date'
			]
		}),
		columns: [
			{ label: 'Commodity', dataField: 'commodity' },
			{
				label: 'Price',
				dataField: 'price',
				align: 'left',
				cellsAlign: 'left',
				template: function (formatObject) {

					const value = formatObject.value.toFixed(2);

					const priceChange = gridRef.current.dataSource[formatObject.row.index]
						.priceChange;

					if (priceChange === 0 || !priceChange) {
						formatObject.template = value;
					}
					else {

						formatObject.template = `
						<div 
							class="change-container ${priceChange < 0 ? 'negative' : 'positive'}"
						>
							${priceChange}
						</div>
						<div class="value-container">
							${value}
						</div>`;
					}
				}
			},
			{ label: 'Weekly', dataField: 'week', template: changeTemplate },
			{ label: 'Monthly', dataField: 'month', template: changeTemplate },
			{ label: 'Yearly', dataField: 'year', template: changeTemplate },
			{
				label: 'Date',
				dataField: 'date',
				align: 'right',
				cellsAlign: 'right',
				template: function (formatObject) {

					const value = formatObject.value;

					if (value.getDate() === new Date().getDate()) {

						formatObject.template = new window.Smart.Utilities.DateTime(value).toString('HH:mm:ss');

					}
					else {

						formatObject.template = new window.Smart.Utilities.DateTime(value).toString('MMM/dd');

					}
				}
			}
		]
	}

	const colors = ['#EE6352', '#59CD90', '#3FA7D6', '#FAC05E', '#F79D84', '#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#fdc5f5', '#BFD200', '#E07A5F', '#FFFF3F', '#81B29A'];

	const chartSettings = {
		caption: '',
		description: '',
		showLegend: false,
		showToolTips: false,
		padding: { left: 5, top: 15, right: 5, bottom: 5 },
		dataSource: tradingData.current,
		xAxis: {
			dataField: 'commodity',
			gridLines: {
				visible: true,
				dashStyle: '4,4'
			}
		},
		colorScheme: 'scheme29',
		seriesGroups: [
			{
				type: 'column',
				columnsGapPercent: 50,
				seriesGapPercent: 0,
				valueAxis: {
					logarithmicScale: true,
					logarithmicScaleBase: 10,
					displayValueAxis: true,
					axisSize: 'auto',
					gridLines: {
						visible: true,
						dashStyle: '4,4'
					}
				},
				series: [
					{
						dataField: 'price', displayText: 'Price',
						labels: {
							visible: true,
							verticalAlignment: 'top',
							offset: { x: 0, y: -20 }
						},
						colorFunction: (value, itemIndex) => {
							return colors[itemIndex];
						}
					}
				]
			}
		]
	}

	return (
		<div>
			<div className="demo-description">
				This example shows a Grid displaying dynamic trading data, which is also reflected on a Chart.
			</div>
			<div id="container">
				<Grid
					id="grid"
					ref={gridRef}
					{...gridSettings}
				></Grid>
				<Chart
					id="chart"
					ref={chartRef}
					{...chartSettings}
				></Chart>
			</div>
		</div>
	)
}

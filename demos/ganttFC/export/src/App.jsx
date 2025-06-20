import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttchart = useRef();

	const treeSize = '30%';

	const durationUnit = 'hour';

	const nonworkingHours = [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23];
	const nonworkingDays = [0, 6];
	
	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '50%'
		},
		{
			label: 'Date Start',
			value: 'dateStart',
			size: '25%'
		},
		{
			label: 'Date End',
			value: 'dateEnd'
		}
	];

	const dataSource = [
		{
			label: 'Market Research',
			dateStart: '2021-01-10',
			dateEnd: '2021-03-10',
			class: 'product-team',
			type: 'project',
			expanded: true,
			tasks: [{
				label: 'Questions and Answers',
				dateStart: '2021-01-10',
				dateEnd: '2021-02-10',
				type: 'task'
			},
			{
				label: 'Data Analysis',
				dateStart: '2021-02-11',
				dateEnd: '2021-03-09',
				type: 'task'
			}
			]
		},
		{
			label: 'Architecture & Planning',
			dateStart: '2021-03-10',
			dateEnd: '2021-03-31',
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Developing',
			dateStart: '2021-04-01',
			dateEnd: '2021-10-31',
			class: 'product-team',
			type: 'project',
			expanded: true,
			tasks: [{
				label: 'UI Designing',
				dateStart: '2021-04-01',
				dateEnd: '2021-08-31',
				type: 'task'
			},
			{
				label: 'Business Logic Coding',
				dateStart: '2021-04-01',
				dateEnd: '2021-10-01',
				type: 'project',
				tasks: [{
					label: 'Data Transfer and Security',
					duration: 200,
					type: 'task'
				},
				{
					label: 'Data Manipulation',
					duration: 400,
					type: 'task'
				}
				]
			},
			{
				label: 'Database Connectivity',
				dateStart: '2021-04-01',
				dateEnd: '2021-05-30',
				type: 'task'
			}
			]
		},
		{
			label: 'Quality Assurance',
			dateStart: '2021-11-01',
			dateEnd: '2021-12-31',
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Release v1',
			dateStart: '2022-01-01',
			dateEnd: '2022-01-31',
			class: 'design-team',
			type: 'task'
		}
	];

	const handleClick = (type) => {
		ganttchart.current.exportData(type);
	}

	return (
		<div>
			<div className="demo-description">GanttChart's can be exported to a PDF or XLSX file via the <b>exportData</b> method
				by clicking on the corresponding button.</div>
			<GanttChart
				ref={ganttchart}
				id="gantt"
				treeSize={treeSize}
				durationUnit={durationUnit}
				nonworkingDays={nonworkingDays}
				nonworkingHours={nonworkingHours}
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<div className="option">
					<Button id="exportToXLSX" onClick={handleClick.bind(this, 'xlsx')}>Export to XLSX</Button>
				</div>
				<div className="option">
					<Button id="exportToPDF" onClick={handleClick.bind(this, 'pdf')}>Export to PDF</Button>
				</div>
				<div className="option">
					<Button id="exportToHTML" onClick={handleClick.bind(this, 'html')}>Export to HTML</Button>
				</div>
				<div className="option">
					<Button id="exportToCSV" onClick={handleClick.bind(this, 'csv')}>Export to CSV</Button>
				</div>
				<div className="option">
					<Button id="exportToTSV" onClick={handleClick.bind(this, 'tsv')}>Export to TSV</Button>
				</div>
				<div className="option">
					<Button id="exportToXML" onClick={handleClick.bind(this, 'xml')}>Export to XML</Button>
				</div>
			</div>
		</div>
	)
}
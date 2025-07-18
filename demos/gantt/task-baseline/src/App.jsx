import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const treeSize = '30%';

	const durationUnit = 'hour';

	const showBaseline = true;

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '60%'
		},
		{
			label: 'Duration (hours)',
			value: 'duration',
			formatFunction: (date) => parseInt(date)
		}
	];

	const dataSource = [
		{
			label: 'Project Start',
			dateStart: '2021-01-10',
			type: 'milestone'
		},
		{
			label: 'PRD & User-Stories',
			dateStart: '2021-01-10',
			dateEnd: '2021-03-10',
			class: 'product-team',
			planned: {
				dateStart: '2021-01-10',
				dateEnd: '2021-03-10'
			},
			type: 'task'
		},
		{
			label: 'Persona & Journey',
			dateStart: '2021-03-01',
			dateEnd: '2021-04-30',
			class: 'marketing-team',
			planned: {
				dateStart: '2021-03-01',
				dateEnd: '2021-04-30'
			},
			type: 'task'
		},
		{
			label: 'Architecture',
			dateStart: '2021-04-11',
			dateEnd: '2021-05-16',
			class: 'product-team',
			planned: {
				dateStart: '2021-04-11',
				dateEnd: '2021-05-16'
			},
			type: 'task'
		},
		{
			label: 'Prototyping',
			dateStart: '2021-05-17',
			dateEnd: '2021-07-01',
			class: 'dev-team',
			planned: {
				dateStart: '2021-05-17',
				dateEnd: '2021-07-01'
			},
			type: 'task'
		},
		{
			label: 'Design',
			dateStart: '2021-07-02',
			dateEnd: '2021-08-01',
			class: 'design-team',
			planned: {
				dateStart: '2021-07-02',
				dateEnd: '2021-08-01'
			},
			type: 'task'
		},
		{
			label: 'Development',
			dateStart: '2021-08-01',
			dateEnd: '2021-09-10',
			class: 'dev-team',
			planned: {
				dateStart: '2021-08-01',
				dateEnd: '2021-09-10'
			},
			type: 'task'
		},
		{
			label: 'Testing & QA',
			dateStart: '2021-09-11',
			dateEnd: '2021-10-10',
			class: 'qa-team',
			planned: {
				dateStart: '2021-09-11',
				dateEnd: '2021-10-10'
			},
			type: 'task'
		},
		{
			label: 'UAT Test',
			dateStart: '2021-10-12',
			dateEnd: '2021-11-11',
			class: 'product-team',
			planned: {
				dateStart: '2021-10-12',
				dateEnd: '2021-11-11'
			},
			type: 'task'
		},
		{
			label: 'Handover & Documentation',
			dateStart: '2021-10-17',
			dateEnd: '2021-11-31',
			class: 'marketing-team',
			planned: {
				dateStart: '2021-10-17',
				dateEnd: '2021-11-31'
			},
			type: 'task'
		},
		{
			label: 'Release',
			dateStart: '2021-11-01',
			dateEnd: '2021-12-31',
			class: 'release-team',
			planned: {
				dateStart: '2021-11-01',
				dateEnd: '2021-12-31'
			},
			type: 'task'
		},
		{
			label: 'Project End',
			dateStart: '2021-11-31',
			type: 'milestone'
		}
	];

	return (
		<div>
			<GanttChart
				id="gantt"
				treeSize={treeSize}
				durationUnit={durationUnit}
				showBaseline={showBaseline}
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>
		</div>
	)
}
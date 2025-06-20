import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const ganttChart = useRef();
	const resourcePanelHeaderTemplateRef = useRef();

	const dataSource = [
		{
			label: 'Company Acqusition',
			synchronized: true,
			expanded: true,
			type: 'task',
			disableResources: true,
			connections: [{
				target: 17,
				type: 1
			}],
			tasks: [{
				label: 'Rebranding',
				synchronized: true,
				expanded: true,
				type: 'project',
				disableResources: true,
				tasks: [{
					label: 'Software rebranding',
					synchronized: true,
					expanded: true,
					type: 'project',
					disableResources: true,
					tasks: [{
						label: 'Website refresh',
						dateStart: '2020-06-01',
						dateEnd: '2020-06-30',
						progress: 25,
						type: 'task',
						connections: [{
							target: 4,
							type: 0
						}],
						resources: {
							id: 'lana',
							label: 'Lana',
							type: 'worker'
						}
					},
					{
						label: 'Services refresh',
						dateStart: '2020-06-01',
						dateEnd: '2020-07-30',
						progress: 15,
						type: 'task',
						resources: {
							id: 'brian',
							label: 'Brian',
							type: 'worker'
						}
					}
					]
				},
				{
					label: 'Physical rebranding',
					synchronized: true,
					expanded: true,
					type: 'project',
					disableResources: true,
					tasks: [{
						label: 'Building refresh',
						dateStart: '2020-06-01',
						dateEnd: '2020-09-30',
						progress: 5,
						type: 'task',
						connections: [{
							target: 7,
							type: 0
						}],
						resources: {
							id: 'buildCompany',
							label: 'Building Company',
							type: 'outsource'
						}
					},
					{
						label: 'Company vehicles refresh',
						dateStart: '2020-06-01',
						dateEnd: '2020-08-31',
						progress: 10,
						type: 'task',
						resources: {
							id: 'carCompany',
							label: 'Car Company',
							type: 'outsource'
						}
					}
					]
				}
				]
			},
			{
				label: 'Contracting',
				synchronized: true,
				expanded: true,
				type: 'project',
				disableResources: true,
				tasks: [{
					label: 'Review Current Staff',
					dateStart: '2020-06-01',
					dateEnd: '2020-07-30',
					progress: 50,
					type: 'task',
					connections: [{
						target: 10,
						type: 1
					}],
					resources: {
						id: 'rachel',
						label: 'Rachel',
						type: 'manager'
					}
				},
				{
					label: 'Find More Clients',
					dateStart: '2020-08-01',
					dateEnd: '2020-12-01',
					type: 'task',
					resources: {
						id: 'maria',
						label: 'Maria',
						type: 'manager'
					}
				}
				]
			},
			{
				label: 'Commercialization',
				synchronized: true,
				expanded: true,
				type: 'project',
				disableResources: true,
				tasks: [{
					label: 'TV Commercials',
					dateStart: '2020-06-01',
					dateEnd: '2020-09-01',
					progress: 30,
					type: 'task',
					connections: [{
						target: 13,
						type: 0
					}],
					resources: [{
						id: 'nate',
						label: 'Nate',
						type: 'commerce'
					},
					{
						id: 'miguel',
						label: 'Miguel',
						type: 'commerce'
					}
					]
				},
				{
					label: 'Internet Commercials',
					dateStart: '2020-06-01',
					dateEnd: '2020-12-31',
					progress: 60,
					type: 'task',
					resources: {
						id: 'commerceCompany',
						label: 'Online Commercials',
						type: 'outsource'
					}
				}
				]
			},
			{
				label: 'Investments',
				synchronized: true,
				expanded: true,
				type: 'project',
				disableResources: true,
				tasks: [{
					label: 'Bank Loans',
					dateStart: '2020-05-01',
					dateEnd: '2020-12-31',
					progress: 70,
					type: 'task',
					connections: [{
						target: 16,
						type: 0
					}],
					resources: {
						id: 'bank',
						label: 'Bank',
						type: 'investor'
					}
				},
				{
					label: 'Direct Investors',
					dateStart: '2020-06-01',
					dateEnd: '2021-01-01',
					progress: 30,
					type: 'task',
					resources: {
						id: 'shareholders',
						label: 'Shareholders',
						type: 'investor'
					}
				}
				]
			}
			]
		},
		{
			label: 'Phase 1 Completed',
			dateStart: '2021-01-10',
			type: 'milestone'
		}];

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '45%'
		},
		{
			label: 'Start Date',
			value: 'dateStart',
			size: '20%'
		},
		{
			label: 'End Date',
			value: 'dateEnd',
			size: '20%'
		},
		{
			label: 'Assigned',
			value: 'resources',
			formatFunction: function (data, taskIndex) {
				return `<span>${data.length > 0 ? '&#10003' : '&#10007'}</span>`;
			}
		}];

	const resourceColumns = [
		{
			label: 'Employees',
			value: 'label'
		},
		{
			label: 'Position',
			value: 'type',
			size: '25%'
		}];

	const treeSize = '30%';

	const resourcePanelSize = 200;

	const durationUnit = 'day';

	const view = 'month';

	const resourcePanelHeaderTemplate = (t) => {
		t.appendChild(resourcePanelHeaderTemplateRef.current)
	}

	const timelineHeaderFormatFunction = (date, type, isHeaderDetails) => {

		const gantt = ganttChart.current;

		const weekStartDate = new Date(date);

		if (isHeaderDetails) {
			return weekStartDate.toLocaleDateString(gantt.locale, {
				month: gantt.monthFormat,
				year: gantt.yearFormat
			});
		} else {
			return weekStartDate.toLocaleDateString(gantt.locale, {
				day: 'numeric',
				month: gantt.monthFormat
			});
		}
	}

	const handleDropDownListChange = (event) => {

		const gantt = ganttChart.current;

		const filter = event.detail.value;
		const resources = gantt.resources;

		//Important Note: Begins a batch update
		gantt.beginUpdate();

		if (filter === 'all') {
			for (let i = 0; i < resources.length; i++) {

				const resource = resources[i];

				if (resource.hidden) {
					gantt.updateResource(resource, {
						hidden: false
					});
				}
			}
		}
		else {
			for (let i = 0; i < resources.length; i++) {
				const resource = resources[i];

				if (resource.type !== filter) {
					gantt.updateResource(resource, {
						hidden: true
					});
				}
				else {
					gantt.updateResource(resource, {
						hidden: false
					});
				}
			}
		}

		//Important Note: Ends the batch update
		gantt.endUpdate();
	}

	const handleChangeRadioButtonChange = (value, event) => {

		if (event.detail.value) {
			ganttChart.current.resourceTimelineView = value;
		}

	}

	return (
		<div>
			<div id="description">
				<p> <b>Description:</b> The following demo displays a Company Acqusition process
					where the Timeline is in months by displaying the weeks of the months from
					their starting date. Some of the Tasks have Resources assigned to them.
					Selecting a resource from the Resource Tree will highligh the assigned
					task and vice versa. The Resource Timeline indicates the working hours
					for each week by resource. A Custom Header is applied to the Resource Panel
					and it contains controls that allow to filter the resources by type or
					change the Resource Timeline view.</p>
			</div>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				taskColumns={taskColumns}
				resourcePanelSize={resourcePanelSize}
				resourceColumns={resourceColumns}
				dataSource={dataSource}
				treeSize={treeSize}
				durationUnit={durationUnit}
				view={view}
				resourcePanelHeaderTemplate={resourcePanelHeaderTemplate}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
			></GanttChart>
			<div ref={resourcePanelHeaderTemplateRef} className="custom-resource-panel-header">
				<div className="treeHeader" id="treeHeaderTemplateContainer">
					<label>Resources Type:</label>
					<DropDownList
						id="resourceFilter"
						dropDownAppendTo="body"
						onChange={handleDropDownListChange}
						dataSource={[
							{
								label: 'All',
								value: 'all'
							},
							{
								label: 'Investors',
								value: 'investor'
							},
							{
								label: 'Managers',
								value: 'manager'
							},
							{
								label: 'Workers',
								value: 'worker'
							},
							{
								label: 'External Company',
								value: 'outsource'
							},
						]}
						selectedValues={['all']}
					>
					</DropDownList>
				</div>
				<div className="timelineHeader" id="timelineHeaderTemplateContainer">
					<RadioButton
						onChange={handleChangeRadioButtonChange.bind(this, 'hours')}
						checked
						value="hours"
					>Hours per week</RadioButton>
					<RadioButton
						onChange={handleChangeRadioButtonChange.bind(this, 'tasks')}
						value="tasks"
					>Tasks per week</RadioButton>
				</div>
			</div>
		</div>
	)
}
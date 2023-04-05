import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { TextBox } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();

		this.customEditorRef = React.createRef();

		this.descriptionRef = React.createRef();
		this.dayInputRef = React.createRef();
		this.taskLabelRef = React.createRef();
		this.dayPickerRef = React.createRef();
		this.monthPickerRef = React.createRef();
		this.yearPickerRef = React.createRef();
		this.dayIncrementBtnRef = React.createRef();
		this.dayDecrementBtnRef = React.createRef();
		this.totalDateRef = React.createRef();
		this.dateOptionsRef = React.createRef();
	}

	durationUnit = 'day';

	view = 'week';

	treeSize = '30%';

	dateStart = '2021-04-01';

	timelineHeaderFormatFunction(date, type, isHeaderDetailsContainer) {
		const gantt = this.ganttchart.current;

		if (isHeaderDetailsContainer) {
			let startDate = new Date(date),
				endDate = new Date(date),
				formatDate = (date) => date.toLocaleDateString(gantt.locale, {
					day: '2-digit',
					month: 'short'
				}).toUpperCase();
			//the view is set to 'week' so add 6 days to the first to get the last
			endDate.setDate(endDate.getDate() + 6);
			//Validate the endDate according to timeline end
			endDate = new Date(Math.min(gantt.dateEnd.getTime(), endDate.getTime()));
			return formatDate(startDate) + ' - ' + formatDate(endDate);
		}
		else {
			return new Date(date)
				.toLocaleDateString(gantt.locale, {
					weekday: 'short'
				}).toUpperCase();
		}
	};

	taskColumns = [{
		label: 'TASK NAME',
		value: 'label',
		size: '50%'
	},
	{
		label: 'START TIME',
		value: 'dateStart',
		size: '30%',
		formatFunction: function (dateString) {
			const date = new Date(dateString),
				formatNumber = (number) => ('0' + number).slice(-2);
			return date.getFullYear() + '-' + formatNumber(date.getMonth() + 1) + '-' + formatNumber(date.getDate());
		}
	},
	{
		label: 'DURATION',
		value: 'duration',
		formatFunction: (duration) => parseInt(duration)
	}
	];

	dataSource = [{
		type: 'project',
		label: 'Office Preparation',
		synchronized: true,
		expanded: true,
		progress: 35,
		tasks: [{
			label: 'Office Inspection',
			synchronized: true,
			expanded: true,
			progress: 55,
			type: 'project',
			connections: [{
				target: 'furnitureInArrangement',
				type: 1
			}],
			tasks: [{
				label: 'Interior Arrangement',
				dateStart: '2021-04-02',
				duration: 3,
				type: 'task'
			},
			{
				label: 'Climate Control Installation',
				dateStart: '2021-04-05',
				duration: 2,
				type: 'task'
			}
			]
		},
		{
			id: 'furnitureInArrangement',
			label: 'Furniture Arrangement',
			synchronized: true,
			progress: 55,
			type: 'project',
			connections: [{
				target: 'employeePositioning',
				type: 1
			}],
			tasks: [{
				label: 'Workstations Positioning',
				dateStart: '2021-04-08',
				duration: 2,
				type: 'task'
			}]
		},
		{
			id: 'employeePositioning',
			label: 'Employee Positioning',
			synchronized: true,
			expanded: true,
			progress: 50,
			type: 'project',
			tasks: [{
				label: 'Workplaces Allocation',
				dateStart: '2021-04-10',
				duration: 3,
				progress: 50,
				connections: [{
					target: 'workstationsAssembly',
					type: 1
				}],
				type: 'task'
			},
			{
				id: 'workstationsAssembly',
				label: 'Workstations Assembly',
				dateStart: '2021-04-13',
				duration: 3,
				progress: 50,
				connections: [{
					target: 'workstationsInspection',
					type: 1
				}],
				type: 'task'
			},
			{
				id: 'workstationsInspection',
				label: 'Workstations Inspection',
				dateStart: '2021-04-16',
				duration: 3,
				progress: 50,
				type: 'task'
			}
			]
		}
		]
	},
	{
		type: 'project',
		label: 'Product Release',
		synchronized: true,
		expanded: true,
		progress: 65,
		tasks: [{
			label: 'Planning',
			dateStart: '2021-04-02',
			duration: 5,
			progress: 100,
			type: 'task'
		},
		{
			label: 'Development',
			synchronized: true,
			expanded: true,
			progress: 50,
			type: 'project',
			connections: [{
				target: 'releasev1',
				type: 1
			}],
			tasks: [{
				label: 'Developing/Coding',
				dateStart: '2021-04-03',
				duration: 5,
				type: 'task',
				progress: 100,
				connections: [{
					target: 'betaRelease',
					type: 1
				}]
			},
			{
				id: 'betaRelease',
				label: 'Beta Release',
				dateStart: '2021-04-08',
				type: 'milestone',
				connections: [{
					target: 'integrateSystem',
					type: 1
				}]
			},
			{
				id: 'integrateSystem',
				label: 'Integration',
				dateStart: '2021-04-08',
				duration: 4,
				type: 'task',
				progress: 100,
				connections: [{
					target: 'test',
					type: 1
				}]
			},
			{
				id: 'test',
				label: 'Testing',
				dateStart: '2021-04-12',
				duration: 3,
				type: 'task',
				progress: 15,
				connections: [{
					target: 'marketing',
					type: 1
				}]
			},
			{
				id: 'marketing',
				label: 'Marketing and Sales',
				dateStart: '2021-04-15',
				duration: 4,
				type: 'task'
			}
			]
		},
		{
			label: 'Feedback Analysis and QA',
			dateStart: '2021-04-02',
			duration: 4,
			type: 'task',
			progress: 75,
			connections: [{
				target: 'design',
				type: 1
			}]
		},
		{
			id: 'design',
			label: 'Design',
			synchronized: true,
			expanded: true,
			progress: 25,
			type: 'project',
			tasks: [{
				label: 'Database',
				dateStart: '2021-04-06',
				duration: 4,
				progress: 50,
				type: 'task'
			},
			{
				label: 'User Interface',
				dateStart: '2021-04-08',
				duration: 4,
				progress: 10,
				type: 'task'
			}
			]
		},
		{
			label: 'Documentation',
			dateStart: '2021-04-11',
			duration: 5,
			type: 'task',
			connections: [{
				target: 'releasev1',
				type: 1
			}]
		},
		{
			id: 'releasev1',
			label: 'Release v1',
			dateStart: '2021-04-19',
			type: 'milestone'
		}
		]
	}
	];

	updateTotalDate() {
		let newDateEnd = new Date(
			parseInt(this.yearPickerRef.current.value),
			parseInt(this.monthPickerRef.current.value),
			parseInt(this.dayPickerRef.current.value)
		);
		newDateEnd.setDate(newDateEnd.getDate() + parseInt(this.dayInputRef.current.value));

		if (isNaN(newDateEnd.getTime())) {
			this.totalDateRef.current.textContent = '';
			return;
		}
		this.totalDateRef.current.textContent = newDateEnd.toDateString();
	}

	deleteTask() {

		this.ganttchart.current.removeTask(this.task);
		this.ganttchart.current.closeWindow();

		this.task = undefined;

	};

	cancelTask() {
		this.ganttchart.current.closeWindow();
	};

	saveTask() {

		let dateStart = new Date(
			parseInt(this.yearPickerRef.current.value),
			parseInt(this.monthPickerRef.current.value),
			parseInt(this.dayPickerRef.current.value)
		);

		const duration = parseInt(this.dayInputRef.current.value);

		this.ganttchart.current.updateTask(this.task, {
			label: this.descriptionRef.current.value,
			dateStart: dateStart,
			duration: duration
		});

		this.ganttchart.current.closeWindow();
		this.task = undefined;
	};

	handleDayIncrementBtn() {

		this.dayInputRef.current.value = (
			Math.min(
				31,
				(parseInt(this.dayInputRef.current.value) || 0) + 1
			)
		)
			.toString();

		this.updateTotalDate();
	};

	handleDayDecrementBtn() {

		this.dayInputRef.current.value = Math.max(
			1,
			(parseInt(this.dayInputRef.current.value) || 0) - 1
		)
			.toString();

		this.updateTotalDate();
	};

	popupWindowCustomizationFunction(target, type, targetTask) {

		const gantt = this.ganttchart.current;

		if (type === 'task' && targetTask) {
			//Hide the header
			target.headerPosition = 'none';
			target.footerPosition = 'none';

			target.appendChild(this.customEditorRef.current)

			this.descriptionRef.current.value = targetTask.label;
			this.dayInputRef.current.value = targetTask.duration.toString();

			this.task = targetTask;

			//Configure the content
			const dateStart = targetTask.dateStart;
			const dateEnd = targetTask.dateEnd;

			if (!dateStart || !dateEnd) {
				this.taskLabelRef.current.textContent = '';
			}
			else {
				this.taskLabelRef.current.textContent =
					dateStart.toLocaleDateString(gantt.locale) + ' - ' + dateEnd.toLocaleDateString(gantt.locale);
			}

			this.dayPickerRef.current.value = dateStart.getDate().toString();
			this.monthPickerRef.current.value = dateStart.getMonth().toString();
			this.yearPickerRef.current.value = dateStart.getFullYear().toString();
			this.totalDateRef.current.textContent = targetTask.dateEnd.toDateString();

		}

		if (targetTask.type === 'project' && targetTask.synchronized) {
			this.dateOptionsRef.current.disabled = true;
		}
		else {
			this.dateOptionsRef.current.disabled = false;
		}
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<GanttChart
					ref={this.ganttchart}
					id="gantt"
					durationUnit={this.durationUnit}
					dataSource={this.dataSource}
					view={this.view}
					treeSize={this.treeSize}
					dateStart={this.dateStart}
					timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}
					taskColumns={this.taskColumns}
					popupWindowCustomizationFunction={this.popupWindowCustomizationFunction.bind(this)}
				></GanttChart>
				<div className="custom-window-content" ref={this.customEditorRef}>
					<div className="custom-window-content-section">
						<label ref={this.taskLabelRef} id="taskLabel"></label>
					</div>
					<div className="custom-window-content-section">
						<b>Description</b>
					</div>
					<div className="custom-window-content-section" id="multilineTextBoxContainer">
						<MultilineTextBox
							ref={this.descriptionRef}
							id="description"
						></MultilineTextBox>
					</div>
					<div className="custom-window-content-section">
						<b>Time Period</b>
					</div>
					<div
						ref={this.dateOptionsRef}
						className="custom-window-content-section date-controls"
					>
						<div className="custom-window-content-section">
							<select ref={this.dayPickerRef} id="dayPicker">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
							</select>
							<select ref={this.monthPickerRef} id="monthPicker">
								<option value="0">January</option>
								<option value="1">February</option>
								<option value="2">March</option>
								<option value="3">April</option>
								<option value="4">May</option>
								<option value="5">June</option>
								<option value="6">July</option>
								<option value="7">August</option>
								<option value="8">September</option>
								<option value="9">October</option>
								<option value="10">November</option>
								<option value="11">December</option>
							</select>
							<select ref={this.yearPickerRef} id="yearPicker">
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</select>
						</div>
						<div className="custom-window-content-section" id="buttonContainer">
							<RepeatButton
								id="dayDecrementBtn"
								onClick={this.handleDayDecrementBtn.bind(this)}
							>
								<span className="glyphicon glyphicon-minus"></span>
							</RepeatButton>
							<TextBox
								ref={this.dayInputRef}
								id="dayInput"
							></TextBox>
							<RepeatButton
								id="dayIncrementBtn"
								onClick={this.handleDayIncrementBtn.bind(this)}
							>
								<span className="glyphicon glyphicon-plus"></span>
							</RepeatButton>
							<label>Days</label>
						</div>
						<div className="custom-window-content-section">
							<label ref={this.totalDateRef} id="totalDate"></label>
						</div>
					</div>
					<div className="custom-window-content-section buttons" id="buttonContainer2">
						<Button className="error flat" ref={this.deleteBtn} id="deleteBtn" onClick={this.deleteTask.bind(this)}>Delete</Button>
						<Button className="primary flat" ref={this.cancelBtn} id="cancelBtn" onClick={this.cancelTask.bind(this)}>Cancel</Button>
						<Button className="primary" ref={this.saveBtn} id="saveBtn" onClick={this.saveTask.bind(this)}>Save</Button>
					</div>
				</div>

			</div>
		);
	}
}

export default App;

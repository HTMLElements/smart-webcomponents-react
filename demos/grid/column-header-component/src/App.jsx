import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Grid } from "smart-webcomponents-react/grid";
import { Button } from "smart-webcomponents-react/button";
import "smart-webcomponents-react/source/styles/smart.default.css";
import "./App.css";

const Demo = () => {
	const gridRef = useRef(null);

	// Columns definition
	const columns = [
		{
			labelTemplate: function() {
				return `
					<smart-button>
						Add
					</smart-button>
					<span>ID</span>
				`
			},
			allowEdit: false,
			dataField: "taskId",
			dataType: "number",
			template: "autoNumber",
			width: 150,
			headerTemplate: (header) => {
				// header is a HTMLElement of the header cell
				// We need to add event listener to the Button inside header
				const button = header.querySelector("smart-button");
				if (button) {
					button.addEventListener("pointerdown", (event) => {
						gridRef.current.addNewRow();
						event.stopPropagation();
					});
				}
			},
		},
		{ label: "Task Name", dataField: "taskName" },
		{
			label: "Assignee",
			dataField: "assignee",
			template: "tags",
			icon: "smart-icon-user",
			options: [
				{ color: "#FFB74D", label: "Jane Smith", value: "Jane Smith" },
				{ color: "#4DB6AC", label: "John Doe", value: "John Doe" },
				{ color: "#81C784", label: "Nancy Johnson", value: "Nancy Johnson" },
				{ color: "#64B5F6", label: "Peter Parker", value: "Peter Parker" },
				{ color: "#BA68C8", label: "George Wilson", value: "George Wilson" },
				{ color: "#FF7043", label: "New Assignee", value: "New Assignee" },
			],
		},
		{ label: "Start Date", dataField: "startDate", dataType: "date" },
		{ label: "Due Date", dataField: "dueDate", dataType: "date" },
		{ label: "Progress", dataField: "progress", dataType: "number" },
		{
			label: "Status",
			dataField: "status",
			template: "tags",
			options: [
				{ color: "#EDEDED", label: "Not Started", value: "Not Started" },
				{ color: "#FFEBB6", label: "In Progress", value: "In Progress" },
				{ color: "#FF6F61", label: "At Risk", value: "At Risk" },
				{ color: "#D1F7C4", label: "Done", value: "Done" },
			],
		},
		{
			label: "Priority",
			dataField: "priority",
			template: "tags",
			options: [
				{ color: "#DD5347", label: "High", value: "High" },
				{ color: "#039BE5", label: "Medium", value: "Medium" },
				{ color: "#33B679", label: "Low", value: "Low" },
			],
		},
	];

	// Data source: transform array of arrays into array of objects with keys matching dataField
	const dataSource = [
		["", "Design mockups", "Jane Smith", "2025-06-01", "2025-06-07", 0, "Not Started", "High"],
		["", "Write specs", "John Doe", "2025-06-03", "2025-06-10", 10, "In Progress", "Medium"],
		["", "Dev setup", "Nancy Johnson", "2025-06-05", "2025-06-08", 0, "Not Started", "High"],
		["", "Frontend development", "Peter Parker", "2025-06-09", "2025-06-20", 25, "In Progress", "High"],
		["", "Backend development", "George Wilson", "2025-06-11", "2025-06-22", 20, "In Progress", "High"],
		["", "Testing", "Peter Parker", "2025-06-21", "2025-06-25", 0, "Not Started", "Medium"],
		["", "Deployment", "Nancy Johnson", "2025-06-26", "2025-06-28", 0, "Not Started", "Low"],
		["", "Project review", "Jane Smith", "2025-06-29", "2025-06-30", 0, "Not Started", "Low"],
		["", "Client feedback", "John Doe", "2025-07-01", "2025-07-03", 0, "Not Started", "Medium"],
		["", "Final adjustments", "Nancy Johnson", "2025-07-04", "2025-07-05", 0, "Not Started", "Medium"],
		["", "Project closure", "George Wilson", "2025-07-06", "2025-07-07", 0, "Not Started", "Low"],
		["", "Documentation", "Jane Smith", "2025-06-15", "2025-06-20", 15, "In Progress", "Medium"],
		["", "Code review", "John Doe", "2025-06-18", "2025-06-22", 5, "In Progress", "High"],
		["", "User training", "Peter Parker", "2025-06-23", "2025-06-25", 0, "Not Started", "Low"],
		["", "Post-launch support", "George Wilson", "2025-07-08", "2025-07-15", 0, "Not Started", "Medium"],
	].map(
		([
			taskId,
			taskName,
			assignee,
			startDate,
			dueDate,
			progress,
			status,
			priority,
		]) => ({
			taskId,
			taskName,
			assignee,
			startDate,
			dueDate,
			progress,
			status,
			priority,
		})
	);

	// useEffect to force update grid headerTemplate after first render
	useEffect(() => {
		// The grid will call headerTemplate automatically on render
		// No extra initialization needed here
	}, []);

	return (
		<div>
			<Grid
				ref={gridRef}
				id="grid"
				columns={columns}
				dataSource={dataSource}
				sorting={{ enabled: true, mode: "many" }}
				layout={{ rowHeight: 40 }}
				filtering={{ enabled: true }}
				editing={{ enabled: true }}
				selection={{
					enabled: true,
					allowCellSelection: true,
					allowRowHeaderSelection: true,
					allowColumnHeaderSelection: true,
					mode: "extended",
				}}
				summaryRow={{ visible: true, editing: true }}
				grouping={{ enabled: true }}
				behavior={{ rowResizeMode: "growAndShrink", columnResizeMode: "growAndShrink" }}
				appearance={{
					showRowNumberColumn: true,
					rowNumberColumnWidth: 50,
					alternationCount: 2,
					gridLines: { horizontal: true, vertical: false },
				}}
			></Grid>
		</div>
	);
};

export default Demo;


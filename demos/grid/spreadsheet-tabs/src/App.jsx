import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Grid } from "smart-webcomponents-react/grid";
import { Tabs, TabItem } from "smart-webcomponents-react/tabs";

const getGridProperties = () => {
	const dataFields = [];
	const columns = [];
	for (let i = 0; i < 26; i++) {
		const letter = String.fromCharCode(65 + i);
		dataFields.push(`${letter}: string`);
		columns.push({ label: letter, dataField: letter, align: "center", width: 100 });
	}

	return {
		selection: {
			enabled: true,
			allowCellSelection: true,
			mode: "extended",
			allowColumnHeaderSelection: true,
			allowRowHeaderSelection: true,
		},
		header: {
			visible: true,
			buttons: ["formatting", "search"],
		},
		formulas: true,
		editing: {
			enabled: true,
		},
		behavior: {
			rowResizeMode: "growAndShrink",
			columnResizeMode: "growAndShrink",
		},
		appearance: {
			showRowHeaderNumber: true,
		},
		dataSource: new window.Smart.DataAdapter({
			dataSource: 50,
			dataFields,
		}),
		columns,
	};
};

const Demo = () => {
	const gridRef = useRef(null);
	const tabsRef = useRef(null);

	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;

		const rows = grid.rows;

		grid.beginUpdate();

		// Row 0, first cell
		const firstCell = rows[0].cells[0];
		firstCell.value = "Monthly Housing and Transportation Expenses";
		firstCell.background = "#FFCB20";
		firstCell.fontWeight = "bold";
		firstCell.fontSize = "20px";
		firstCell.colSpan = 5;
		firstCell.align = "center";
		rows[0].height = 50;

		// Row 1
		const r1c0 = rows[1].cells[0];
		r1c0.value = "Primary Residence";
		r1c0.colSpan = 2;
		r1c0.rowSpan = 2;
		r1c0.align = "center";
		r1c0.verticalAlign = "middle";
		r1c0.background = "#95FF00";
		r1c0.color = "#000";

		const r1c3 = rows[1].cells[3];
		r1c3.value = "Transportation Expenses";
		r1c3.colSpan = 2;
		r1c3.rowSpan = 2;
		r1c3.align = "center";
		r1c3.verticalAlign = "middle";
		r1c3.background = "#95FF00";
		r1c3.color = "#000";

		// Row 3
		rows[3].cells[0].value = "Mortgage Payment";
		rows[3].cells[1].value = "$1,459.76";
		rows[3].cells[3].value = "Vehicle 1 Payment";
		rows[3].cells[4].value = "$351.34";

		// Row 4
		rows[4].cells[0].value = "Property tax";
		rows[4].cells[1].value = "$212.76";
		rows[4].cells[3].value = "Vehicle 1 Insurance";
		rows[4].cells[4].value = "$55.12";

		// Row 5
		rows[5].cells[0].value = "Insurance";
		rows[5].cells[1].value = "$49.21";
		rows[5].cells[3].value = "Vehicle 1 Gas";
		rows[5].cells[4].value = "$129.21";

		// Row 6
		rows[6].cells[0].value = "Electricity";
		rows[6].cells[1].value = "$73.44";
		rows[6].cells[3].value = "Vehicle 1 Maintenance";
		rows[6].cells[4].value = "$55.17";

		// Row 7
		rows[7].cells[0].value = "Water";
		rows[7].cells[1].value = "$41.48";
		rows[7].cells[3].value = "Vehicle 2 Lease";
		rows[7].cells[4].value = "$55.17";

		// Row 8
		rows[8].cells[0].value = "Cabel TV Service";
		rows[8].cells[1].value = "$22.14";
		rows[8].cells[3].value = "Vehicle 2 Insurance";
		rows[8].cells[4].value = "$109.35";

		// Row 9
		rows[9].cells[0].value = "High Speed Internet";
		rows[9].cells[1].value = "$24.99";
		rows[9].cells[3].value = "Vehicle 2 Gas";
		rows[9].cells[4].value = "$114.99";

		// Row 10
		rows[10].cells[3].value = "Vehicle 2 Maintenance";
		rows[10].cells[4].value = "$35.19";

		// Row 12, first cell - formulas header
		const formulaCell = rows[12].cells[0];
		formulaCell.value = "Formulas";
		formulaCell.background = "#FFCB20";
		formulaCell.fontWeight = "bold";
		formulaCell.fontSize = "20px";
		formulaCell.colSpan = 5;
		formulaCell.align = "center";

		// Row 13 headers
		rows[13].cells[0].value = "Formula";
		rows[13].cells[1].value = "Result";
		rows[13].cells[2].value = "Value";

		// Rows 14-17 values in column 2
		rows[14].cells[2].value = "1";
		rows[15].cells[2].value = "2";
		rows[16].cells[2].value = "Hello";
		rows[17].cells[2].value = "World";

		// Formulas in column 0 for rows 14-20
		rows[14].cells[0].value = "=C15+1";
		rows[15].cells[0].value = "=C16+1";
		rows[16].cells[0].value = "=SUM(C15:C16)";
		rows[17].cells[0].value = "=8+2";
		rows[18].cells[0].value = "=PI()";
		rows[19].cells[0].value = "=MAX(C15:C17)";
		rows[20].cells[0].value = '=C17 & " " & C18';

		// Background for formula column cells (rows 13-20)
		for (let i = 13; i <= 20; i++) {
			rows[i].cells[0].background = "#F5F5F5";
		}

		// Formulas in column 1 for rows 14-20
		rows[14].cells[1].formula = "=C15+1";
		rows[15].cells[1].formula = "=C16+1";
		rows[16].cells[1].formula = "=SUM(C15:C16)";
		rows[17].cells[1].formula = "=8+2";
		rows[18].cells[1].formula = "=PI()";
		rows[19].cells[1].formula = "=MAX(C15:C17)";
		rows[20].cells[1].formula = '=C17 & " " & C18';

		grid.endUpdate();

		// Tabs addNewTabClick event

	
	}, []);

	const onAddNewTabClick = (event) => {
		const tabs = tabsRef.current;
		if (!tabs) return;
		
		const newTab = event.detail.item;
		const tabIndex = event.detail.index;
		newTab.label = "Sheet " + (tabIndex + 1);

		const newGridId = "sheet" + (tabIndex + 1);
		const newGrid = document.createElement("smart-grid");
		newGrid.id = newGridId;
		newTab.appendChild(newGrid);
		// Initialize new smartGrid with properties
		// eslint-disable-next-line no-undef
		new window.smartGrid("#" + newGridId, getGridProperties());
	};
	
	return (
		<>
			<div className="demo-scription">
				Spreadsheet functionality can be easily achieved with smartGrid. In this demo, the Grid operates in Unbound
				mode, allowing you to set cell and row values, styles, as well as rowspan and colspan during initialization.
				Features such as row and column resizing are enabled for flexible layout adjustments. Selection and editing
				behave similarly to Excel, providing a familiar user experience. Additionally, you can add new sheets using
				the tab interface, and each sheet can have its own independent grid configuration. The demo also supports
				keyboard navigation, copy-paste operations, and custom cell formatting to further enhance productivity and
				usability.
			</div>

			<Tabs onAddNewTabClick={onAddNewTabClick} addNewTab tabPosition="bottom" ref={tabsRef} style={{ maxWidth: 800, width: "100%", height: 800 }}>
				<TabItem label="Sheet 1" selected>
					<Grid id="grid" {...getGridProperties()} ref={gridRef} />
				</TabItem>
				<TabItem label="Sheet 2">
					<Grid id="grid2" {...getGridProperties()} />
				</TabItem>
			</Tabs>
		</>
	);
};

export default Demo;

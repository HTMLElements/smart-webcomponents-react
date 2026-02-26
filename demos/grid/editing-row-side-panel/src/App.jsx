import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';

import React, { useRef } from "react";
import "smart-webcomponents-react/source/styles/smart.default.css";
import "./App.css";
import { Grid } from "smart-webcomponents-react/grid";
import { Button } from "smart-webcomponents-react/button";

// User data for the "Contact Person" column
const users = [
  { id: 0, color: "#8E24AA", name: "Andrew", image: "../../images/people/andrew.png" },
  { id: 1, color: "#41B883", name: "Anne", image: "../../images/people/anne.png" },
  { id: 2, color: "#53B9E6", name: "Janet", image: "../../images/people/janet.png" },
  { id: 3, color: "#FFCD42", name: "John", image: "../../images/people/john.png" },
  { id: 4, color: "#DD5347", name: "Laura", image: "../../images/people/laura.png" }
];

// Data for the grid
const data = [
  ["Acme Corp", "0", "info@acme.com", "555-0101", "Customer", "2025-07-20"],
  ["Beta Ltd", "1", "office@beta.com", "555-0102", "Prospect", "2025-07-18"],
  ["Gamma Inc", "2", "sales@gamma.com", "555-0103", "Lead", "2025-07-15"],
  ["Delta Co", "3", "contact@delta.com", "555-0104", "Customer", "2025-07-10"],
  ["Epsilon LLC", "4", "info@epsilon.com", "555-0105", "Prospect", "2025-07-05"],
  ["Zeta Group", "0", "info@zeta.com", "555-0106", "Lead", "2025-07-01"],
  ["Eta Enterprises", "1", "info@eta.com", "555-0107", "Customer", "2025-06-30"],
  ["Theta Solutions", "2", "info@theta.com", "555-0108", "Prospect", "2025-06-25"],
  [],
  [],
  []
];

// Column definitions
const columns = [
  { label: "Client Name", dataField: "clientName" },
  {
    label: "Contact Person",
    dataField: "contactPerson",
    template: "collaborator",
    icon: "smart-icon-user",
    // Smart.Grid will use the users prop for collaborators
  },
  {
    label: "Email",
    dataField: "email",
    template: "email",
    placeholder: "user@example.com"
  },
  {
    label: "Phone",
    dataField: "phone",
    editor: "phone",
    placeholder: "###-####"
  },
  {
    label: "Status",
    dataField: "status",
    template: "tags",
    options: [
      { color: "#FFA500", label: "Lead", value: "Lead" },
      { color: "#1E90FF", label: "Prospect", value: "Prospect" },
      { color: "#28A745", label: "Customer", value: "Customer" }
    ]
  },
  {
    label: "Last Contacted",
    dataField: "lastContacted",
    dataType: "date"
  }
];

// Map the array data to objects for the grid
const dataFields = [
  "clientName",
  "contactPerson",
  "email",
  "phone",
  "status",
  "lastContacted"
];
const dataSource = data.map(row =>
  row.length
    ? Object.fromEntries(dataFields.map((f, i) => [f, row[i]]))
    : {}
);

const Demo = () => {
  const gridRef = useRef();

  // Header buttons handlers
  const handleAdd = () => {
    gridRef.current.addRow({});
  };
  const handleInsert = () => {
    gridRef.current.addRow({}, false);
  };
  const handleDelete = () => {
    gridRef.current.deleteSelectedRows();
  };

  // Custom header buttons as JSX
  const headerButtons =  [
		{
			innerHTML: '<smart-button><span style="font-family: FontAwesome;" class="fa-plus-circle"></span><span style="margin-left: 10px;">Add</span></smart-button>',
			command: function () {
				gridRef.current.addRow({});
			},
			style: {
				marginLeft: '10px',
				marginTop: '6px'
			},
			className: 'add-client-button',
			title: 'Adds a new client at bottom',
		},
		{
			innerHTML: '<smart-button><span style="font-family: FontAwesome;" class="fa-plus-square"></span><span style="margin-left: 10px;">Insert</span></smart-button>',
			command: function () {
				gridRef.current.addRow({}, false);
			},
			style: {
				marginLeft: '-10px',
				marginTop: '6px'
			},
			className: 'insert-client-button',
			title: 'Adds a new client at top',
		},
		{
			innerHTML: '<smart-button><span style="font-family: FontAwesome;" class="fa-trash"></span><span style="margin-left: 10px;">Delete</span></smart-button>',
			command: function () {
				gridRef.current.deleteSelectedRows();
			},
			style: {
				marginLeft: '20px',
				marginTop: '6px'
			},
			className: 'delete-client-button',
			title: 'Deletes the selected client',
		}
	]

  return (
    <div className="viewport">
      <div className="demo-description">
        <h1>Editing Row Side Panel</h1>
        <section>
          <p>
            This demo demonstrates how to implement row editing in <strong>Smart.Grid</strong> using
            a side panel that opens on double click. Instead of editing data directly inside the grid cells,
            the selected row is edited in a dedicated panel positioned beside the grid.
          </p>
        </section>
        <section>
          <h2>How It Works</h2>
          <ul>
            <li>The user double-clicks a row in the grid.</li>
            <li>A side panel opens automatically.</li>
            <li>The panel is populated with the selected row’s data.</li>
            <li>The user edits the fields inside the panel.</li>
            <li>Changes are saved and reflected back in the grid.</li>
          </ul>
        </section>
        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Clean and focused editing experience</li>
            <li>Prevents accidental inline edits</li>
            <li>Supports complex forms and validation</li>
            <li>Easy integration with external components</li>
            <li>Improved layout for forms with many fields</li>
          </ul>
        </section>
        <section>
          <h2>Benefits of Side Panel Editing</h2>
          <p>
            Using a side panel for editing provides a more structured and user-friendly
            experience, especially when working with records that contain multiple fields
            or require validation logic. It separates data visualization from data editing,
            reducing clutter inside the grid.
          </p>
          <p>
            Developers can fully customize the panel’s layout, validation behavior,
            and save logic. The double-click event acts as a trigger to load the selected
            record into the panel, allowing precise control over when editing begins.
          </p>
        </section>
        <div id="grid">
          <Grid
            ref={gridRef}
            dataSource={dataSource}
            columns={columns}
            users={users}
            appearance={{
              alternationCount: 2,
              showRowHeader: true,
              showRowStatus: false,
              showRowComments: true,
              showRowHeaderSelectIcon: true,
              showRowHeaderFocusIcon: true,
              showColumnIcon: true,
              allowHover: true,
              allowColumnAutoPlaceholder: true,
              showRowHeaderNumber: true,
              showColumnHeaderDragIcon: true,
              showViewBarAsDropdown: true,
              showViewBar: true
            }}
            sorting={{ enabled: true }}
            layout={{ rowHeight: 45 }}
            header={{
              visible: true,
              buttons: headerButtons
            }}
            selection={{ enabled: true }}
            editing={{
              enabled: true,
              mode: "row",
              dialog: {
                enabled: true,
                sidePanel: true
              },
              addNewRow: {
                visible: true,
                displayMode: "button"
              }
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;

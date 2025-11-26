import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Grid } from "smart-webcomponents-react/grid";
import { ListBox } from "smart-webcomponents-react/listbox";

import "./App.css";

const App = () => {
  const gridRef = useRef(null);
  const ownerRef = useRef(null);
  const statusRef = useRef(null);
  const priorityRef = useRef(null);

  // Owners, Statuses, Priorities options
  const ownerOptions = [
    { color: "#FFB900", label: "Andrew", value: "Andrew" },
    { color: "#D83B01", label: "Michelle", value: "Michelle" },
    { color: "#107C10", label: "Sofia", value: "Sofia" },
    { color: "#008272", label: "Liam", value: "Liam" },
    { color: "#5C2D91", label: "Emma", value: "Emma" },
  ];

  const statusOptions = [
    { color: "#FFB900", label: "Planned", value: "Planned" },
    { color: "#5C2D91", label: "In Dev", value: "In Dev" },
    { color: "#28A745", label: "Released", value: "Released" },
  ];

  const priorityOptions = [
    { color: "#DD5347", label: "Must-have", value: "Must-have" },
    { color: "#FFC107", label: "Should-have", value: "Should-have" },
    { color: "#33B679", label: "Nice-to-have", value: "Nice-to-have" },
  ];

  // Data source
  const dataSource = [
    ["User Authentication", "Andrew", "2025-07-15", "In Dev", "Must-have"],
    ["Beta Dashboard", "Michelle", "2025-08-01", "Planned", "Should-have"],
    ["Notifications", "Sofia", "2025-07-30", "Planned", "Nice-to-have"],
    ["Reporting Module", "Liam", "2025-09-10", "In Dev", "Must-have"],
    ["Data Export", "Emma", "2025-08-20", "Released", "Should-have"],
    ["Mobile App", "Andrew", "2025-10-05", "Planned", "Must-have"],
    ["API Integration", "Michelle", "2025-09-15", "In Dev", "Should-have"],
    ["User Profiles", "Sofia", "2025-07-25", "Released", "Nice-to-have"],
    ["Search Functionality", "Liam", "2025-08-30", "Planned", "Must-have"],
    ["Settings Page", "Emma", "2025-09-05", "In Dev", "Should-have"],
    ["Help Center", "Andrew", "2025-10-15", "Planned", "Nice-to-have"],
    ["Live Chat Support", "Michelle", "2025-09-25", "In Dev", "Must-have"],
    ["Performance Optimization", "Sofia", "2025-11-01", "Planned", "Should-have"],
    ["Multi-language Support", "Liam", "2025-10-20", "Released", "Nice-to-have"],
    ["Dark Mode", "Emma", "2025-08-10", "In Dev", "Should-have"],
    ["Accessibility Features", "Andrew", "2025-09-30", "Planned", "Must-have"],
    ["Audit Logs", "Michelle", "2025-10-25", "In Dev", "Nice-to-have"],
    ["Two-Factor Authentication", "Sofia", "2025-11-15", "Planned", "Must-have"],
    ["File Uploads", "Liam", "2025-08-05", "Released", "Should-have"],
    ["Activity Feed", "Emma", "2025-09-12", "In Dev", "Nice-to-have"],
    ["Calendar Integration", "Andrew", "2025-10-30", "Planned", "Should-have"],
    ["Task Management", "Michelle", "2025-11-20", "In Dev", "Must-have"],
    ["Email Templates", "Sofia", "2025-08-18", "Released", "Nice-to-have"],
    ["Subscription Plans", "Liam", "2025-09-22", "Planned", "Should-have"],
    ["Data Backup", "Emma", "2025-10-12", "In Dev", "Must-have"],
    ["Integration with Third-Party Services", "Andrew", "2025-11-30", "Planned", "Nice-to-have"],
    ["Custom Dashboards", "Michelle", "2025-08-28", "In Dev", "Should-have"],
    ["User Onboarding", "Sofia", "2025-09-18", "Released", "Must-have"],
    ["Feedback System", "Liam", "2025-10-08", "Planned", "Nice-to-have"],
    ["Bug Tracking", "Emma", "2025-11-10", "In Dev", "Should-have"],
  ].map(([Feature, Owner, TargetRelease, Status, Priority]) => ({
    Feature,
    Owner,
    "Target Release": new Date(TargetRelease),
    Status,
    Priority,
  }));

  // Grid columns
  const columns = [
    { label: "Feature", dataField: "Feature" },
    {
      label: "Owner",
      dataField: "Owner",
      template: "tags",
      icon: "smart-icon-user",
      options: ownerOptions,
    },
    { label: "Target Release", dataField: "Target Release", dataType: "date" },
    {
      label: "Status",
      dataField: "Status",
      template: "tags",
      options: statusOptions,
    },
    {
      label: "Priority",
      dataField: "Priority",
      template: "tags",
      options: priorityOptions,
    },
  ];

  // Imperative filtering — NO re-rendering
  const applyFilter = (columnName, selectedValues, allOptions) => {
    const grid = gridRef.current;

    grid.getColumn(columnName).filter =
      selectedValues.length === allOptions.length ? null : selectedValues;
  };

  const onOwnerChange = () => {
	  if (ownerRef.current === null) {
		return;
	  }
	  
    const selected = ownerRef.current.selectedValues;
    applyFilter("Owner", selected, ownerOptions);
  };

  const onStatusChange = () => {
	  if (statusRef.current === null) {
		return;
	  }
    const selected = statusRef.current.selectedValues;
    applyFilter("Status", selected, statusOptions);
  };

  const onPriorityChange = () => {
	  if (priorityRef.current === null) {
		return;
	  }
    const selected = priorityRef.current.selectedValues;
    applyFilter("Priority", selected, priorityOptions);
  };

  return (
    <>
      <div className="demo-description">
        <h1>Filter Side Panel - No Re-renders</h1>
      </div>

      <div id="container" style={{ display: "flex", width: "100%", height: "100vh" }}>
        
        {/* Side panel */}
        <div id="sidePanel" style={{ width: 250, padding: 5, border: "1px solid var(--smart-border)" }}>
          <h3>Filter by Owner</h3>
          <ListBox
            ref={ownerRef}
            selectionMode="checkBox"
            selectedValues={ownerOptions.map(o => o.value)}
            dataSource={ownerOptions.map(o => o.value)}
            onChange={onOwnerChange}
          />

          <h3>Filter by Status</h3>
          <ListBox
            ref={statusRef}
            selectionMode="checkBox"
            selectedValues={statusOptions.map(o => o.value)}
            dataSource={statusOptions.map(o => o.value)}
            onChange={onStatusChange}
          />

          <h3>Filter by Priority</h3>
          <ListBox
            ref={priorityRef}
            selectionMode="checkBox"
            selectedValues={priorityOptions.map(o => o.value)}
            dataSource={priorityOptions.map(o => o.value)}
            onChange={onPriorityChange}
          />
        </div>

        {/* Grid */}
        <div id="gridContainer" style={{ width: "calc(100% - 250px)" }}>
          <Grid
            ref={gridRef}
            columns={columns}
            dataSource={dataSource}
            sorting={{ enabled: true, mode: "many" }}
            filtering={{ enabled: true }}
            selection={{ enabled: true, mode: "many", checkBoxes: { enabled: true } }}
            appearance={{ showColumnIcon: true }}
            dataSourceSettings={{
              dataFields: [
                { name: "Feature", dataType: "string" },
                { name: "Owner", dataType: "string" },
                { name: "Target Release", dataType: "date" },
                { name: "Status", dataType: "string" },
                { name: "Priority", dataType: "string" },
              ],
            }}
          />
        </div>

      </div>
    </>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useRef, useEffect } from "react";
import { Grid } from "smart-webcomponents-react/grid";
import { QueryBuilder } from "smart-webcomponents-react/querybuilder";
import { Button } from "smart-webcomponents-react/button";

const App = () => {
  const gridRef = useRef();
  const queryBuilderRef = useRef();

  const columns = [
    { label: "Feature", dataField: "Feature" },
    {
      label: "Owner",
      dataField: "Owner",
      template: "tags",
      icon: "smart-icon-user",
      options: [
        { color: "#FFB900", label: "Andrew", value: "Andrew" },
        { color: "#D83B01", label: "Michelle", value: "Michelle" },
        { color: "#107C10", label: "Sofia", value: "Sofia" },
        { color: "#008272", label: "Liam", value: "Liam" },
        { color: "#5C2D91", label: "Emma", value: "Emma" }
      ]
    },
    { label: "Target Release", dataField: "Target Release", dataType: "date" },
    {
      label: "Status",
      dataField: "Status",
      template: "tags",
      options: [
        { color: "#FFB900", label: "Planned", value: "Planned" },
        { color: "#5C2D91", label: "In Dev", value: "In Dev" },
        { color: "#28A745", label: "Released", value: "Released" }
      ]
    },
    {
      label: "Priority",
      dataField: "Priority",
      template: "tags",
      options: [
        { color: "#DD5347", label: "Must-have", value: "Must-have" },
        { color: "#FFC107", label: "Should-have", value: "Should-have" },
        { color: "#33B679", label: "Nice-to-have", value: "Nice-to-have" }
      ]
    }
  ];

  const dataSource = new window.Smart.DataAdapter({
    dataSource: [
	 ['User Authentication', 'Andrew', '2025-07-15', 'In Dev', 'Must-have'],
	  ['Beta Dashboard', 'Michelle', '2025-08-01', 'Planned', 'Should-have'],
	  ['Notifications', 'Sofia', '2025-07-30', 'Planned', 'Nice-to-have'],
	  ['Reporting Module', 'Liam', '2025-09-10', 'In Dev', 'Must-have'],
	  ['Data Export', 'Emma', '2025-08-20', 'Released', 'Should-have'],
	  ['Mobile App', 'Andrew', '2025-10-05', 'Planned', 'Must-have'],
	  ['API Integration', 'Michelle', '2025-09-15', 'In Dev', 'Should-have'],
	  ['User Profiles', 'Sofia', '2025-07-25', 'Released', 'Nice-to-have'],
	  ['Search Functionality', 'Liam', '2025-08-30', 'Planned', 'Must-have'],
	  ['Settings Page', 'Emma', '2025-09-05', 'In Dev', 'Should-have'],
	  ['Help Center', 'Andrew', '2025-10-15', 'Planned', 'Nice-to-have'],
	  ['Live Chat Support', 'Michelle', '2025-09-25', 'In Dev', 'Must-have'],
	  ['Performance Optimization', 'Sofia', '2025-11-01', 'Planned', 'Should-have'],
	  ['Multi-language Support', 'Liam', '2025-10-20', 'Released', 'Nice-to-have'],
	  ['Dark Mode', 'Emma', '2025-08-10', 'In Dev', 'Should-have'],
	  ['Accessibility Features', 'Andrew', '2025-09-30', 'Planned', 'Must-have'],
	  ['Audit Logs', 'Michelle', '2025-10-25', 'In Dev', 'Nice-to-have'],
	  ['Two-Factor Authentication', 'Sofia', '2025-11-15', 'Planned', 'Must-have'],
	  ['File Uploads', 'Liam', '2025-08-05', 'Released', 'Should-have'],
	  ['Activity Feed', 'Emma', '2025-09-12', 'In Dev', 'Nice-to-have'],
	  ['Calendar Integration', 'Andrew', '2025-10-30', 'Planned', 'Should-have'],
	  ['Task Management', 'Michelle', '2025-11-20', 'In Dev', 'Must-have'],
	  ['Email Templates', 'Sofia', '2025-08-18', 'Released', 'Nice-to-have'],
	  ['Subscription Plans', 'Liam', '2025-09-22', 'Planned', 'Should-have'],
	  ['Data Backup', 'Emma', '2025-10-12', 'In Dev', 'Must-have'],
	  ['Integration with Third-Party Services', 'Andrew', '2025-11-30', 'Planned', 'Nice-to-have'],
	  ['Custom Dashboards', 'Michelle', '2025-08-28', 'In Dev', 'Should-have'],
	  ['User Onboarding', 'Sofia', '2025-09-18', 'Released', 'Must-have'],
	  ['Feedback System', 'Liam', '2025-10-08', 'Planned', 'Nice-to-have'],
	  ['Bug Tracking', 'Emma', '2025-11-10', 'In Dev', 'Should-have']
    ],
    dataFields: [
      "Feature: string",
      "Owner: string",
      "Target Release: date",
      "Status: string",
      "Priority: string"
    ]
  });

  useEffect(() => {
    const grid = gridRef.current;
    const queryBuilder = queryBuilderRef.current;

    // Default filter
    queryBuilder.value = [["Owner", "contains", "Andrew"]];
    
	grid.addFilter('Owner', 'contains Andrew');
    
    queryBuilder.nativeElement.addEventListener("change", () => {
      const filter = queryBuilder.getFilter();
      grid.clearFilter();

      if (filter && filter.filters) {
        filter.filters.forEach(f => {
          if (f.dataField) {
            grid.addFilter(f.dataField, f);
          }
        });
      }
    });
  }, []);

  const openFilteringPanel = () => {
    gridRef.current.openSidePanel("#filteringPanel", 560);
  };

  const clearFilters = () => {
    gridRef.current.clearFilter();
    queryBuilderRef.current.value = [];
  };

  return (
    <div>
      {/* Header Buttons */}
      <div style={{ marginBottom: 10 }}>
        <Button onClick={openFilteringPanel}>
          🔎 Filters
        </Button>

        <Button
          style={{ marginLeft: 10 }}
          onClick={clearFilters}
        >
          ❌ Clear Filters
        </Button>
      </div>

      {/* Grid */}
      <Grid
        ref={gridRef}
        dataSource={dataSource}
        columns={columns}
        sorting={{ enabled: true, mode: "many" }}
        filtering={{ enabled: true, filterMenu: { visible: false } }}
        selection={{
          enabled: true,
          mode: "many",
          checkBoxes: { enabled: true }
        }}
        appearance={{ showColumnIcon: true }}
      />

      {/* Side Panel */}
      <div id="filteringPanel">
        <h3>Filter by</h3>
        <QueryBuilder
          ref={queryBuilderRef}
          fields={[
            { label: "Feature", dataField: "Feature", dataType: "string" },
            {
              label: "Owner",
              dataField: "Owner",
              dataType: "string",
              options: ["Andrew", "Michelle", "Sofia", "Liam", "Emma"]
            },
            {
              label: "Target Release",
              dataField: "Target Release",
              dataType: "date"
            },
            { label: "Status", dataField: "Status", dataType: "string" },
            { label: "Priority", dataField: "Priority", dataType: "string" }
          ]}
        />
      </div>
    </div>
  );
};
export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import "smart-webcomponents-react/source/styles/smart.default.css";
import React, { useRef } from "react";
import { Smart, Grid } from "smart-webcomponents-react/grid";

const App = () => {
  const gridRef = useRef();

  const today = new Date();

  const columns = [
    {
      label: "Feature",
      dataField: "Feature",
      filterMenuMode: "excel"
    },
    {
      label: "Owner",
      dataField: "Owner",
      template: "tags",
      icon: "smart-icon-user",
      filterMenuMode: "excel",
      options: [
        { color: "#FFB900", label: "Andrew", value: "Andrew" },
        { color: "#D83B01", label: "Michelle", value: "Michelle" },
        { color: "#107C10", label: "Sofia", value: "Sofia" },
        { color: "#008272", label: "Liam", value: "Liam" },
        { color: "#5C2D91", label: "Emma", value: "Emma" }
      ]
    },
    {
      label: "Target Release",
      dataField: "Target Release",
      dataType: "date",
      filterMenuMode: "excel"
    },
    {
      label: "Status",
      dataField: "Status",
      template: "tags",
      filterMenuMode: "excel",
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
      filterMenuMode: "excel",
      options: [
        { color: "#DD5347", label: "Must-have", value: "Must-have" },
        { color: "#FFC107", label: "Should-have", value: "Should-have" },
        { color: "#33B679", label: "Nice-to-have", value: "Nice-to-have" }
      ]
    },
    {
      label: "Review Date",
      dataField: "ReviewDate",
      dataType: "date",
      filterEditor: {
        template: "list",
        dataSource: [
          "Last Week",
          "Next Week",
          "Next Month",
          "Last Month",
          "Next 3 Months",
          "Last 3 Months",
          "Next Year",
          "Last Year"
        ],
        onChange: function (event, input) {
          const value = event.detail.value;
          const grid = gridRef.current;

          let fromDate, toDate;

          switch (value) {
            case "Last Week":
              fromDate = new Date(today);
              fromDate.setDate(today.getDate() - 7);
              toDate = today;
              break;
            case "Next Week":
              fromDate = today;
              toDate = new Date(today);
              toDate.setDate(today.getDate() + 7);
              break;
            case "Next Month":
              fromDate = today;
              toDate = new Date(today);
              toDate.setMonth(today.getMonth() + 1);
              break;
            case "Last Month":
              fromDate = new Date(today);
              fromDate.setMonth(today.getMonth() - 1);
              toDate = today;
              break;
            case "Next 3 Months":
              fromDate = today;
              toDate = new Date(today);
              toDate.setMonth(today.getMonth() + 3);
              break;
            case "Last 3 Months":
              fromDate = new Date(today);
              fromDate.setMonth(today.getMonth() - 3);
              toDate = today;
              break;
            case "Next Year":
              fromDate = today;
              toDate = new Date(today);
              toDate.setFullYear(today.getFullYear() + 1);
              break;
            case "Last Year":
              fromDate = new Date(today);
              fromDate.setFullYear(today.getFullYear() - 1);
              toDate = today;
              break;
            default:
              grid.clearFilter("ReviewDate");
              return;
          }

		   grid.clearFilter("ReviewDate");
			const filterGroup = new Smart.FilterGroup();
			const fromFilter = filterGroup.createFilter('date', fromDate, 'GREATER_THAN_OR_EQUAL');
			const toFilter = filterGroup.createFilter('date', toDate, 'LESS_THAN_OR_EQUAL');

			input.value = value; // Set the selected value in the filter editor
			filterGroup.addFilter('and', fromFilter);
			filterGroup.addFilter('and', toFilter);
			grid.addFilter('ReviewDate', filterGroup);
        }
      }
    }
  ];

  const dataSource = new Smart.DataAdapter({
    dataSource: [
  ["User Authentication", "Andrew", "2026-07-15", "In Dev", "Must-have", "2026-07-10"],
  ["Beta Dashboard", "Michelle", "2026-08-01", "Planned", "Should-have", "2026-07-25"],
  ["Notifications", "Sofia", "2026-03-30", "Planned", "Nice-to-have", "2026-03-25"],
  ["Reporting Module", "Liam", "2026-02-10", "In Dev", "Must-have", "2026-02-05"],
  ["Data Export", "Emma", "2026-08-20", "Released", "Should-have", "2026-08-15"],
  ["Mobile App", "Andrew", "2026-10-05", "Planned", "Must-have", "2026-10-01"],
  ["API Integration", "Michelle", "2026-09-15", "In Dev", "Should-have", "2026-09-10"],
  ["User Profiles", "Sofia", "2026-07-25", "Released", "Nice-to-have", "2026-07-20"],
  ["Search Functionality", "Liam", "2026-08-30", "Planned", "Must-have", "2026-08-25"],
  ["Settings Page", "Emma", "2026-09-05", "In Dev", "Should-have", "2026-09-01"],
  ["Help Center", "Andrew", "2026-01-15", "Planned", "Nice-to-have", "2026-01-10"],
  ["Live Chat Support", "Michelle", "2026-09-25", "In Dev", "Must-have", "2026-09-20"],
  ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-10-25"],
  ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
  ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
  ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
  ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
  ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
  ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
  ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
  ["Calendar Integration", "Andrew", "2026-10-30", "Planned", "Should-have", "2026-10-25"],
  ["Task Management", "Michelle", "2026-11-20", "In Dev", "Must-have", "2026-11-15"],
  ["Email Templates", "Sofia", "2026-08-18", "Released", "Nice-to-have", "2026-08-15"],
  ["Subscription Plans", "Liam", "2026-09-22", "Planned", "Should-have", "2026-09-18"],
  ["Data Backup", "Emma", "2026-10-12", "In Dev", "Must-have", "2026-10-08"],
  ["Integration with Third-Party Services", "Andrew", "2026-11-30", "Planned", "Nice-to-have", "2026-11-25"],
  ["Custom Dashboards", "Michelle", "2026-08-28", "In Dev", "Should-have", "2026-08-24"],
  ["User Onboarding", "Sofia", "2026-09-18", "Released", "Must-have", "2026-09-12"],
  ["Feedback System", "Liam", "2026-10-08", "Planned", "Nice-to-have", "2026-10-01"],
  ["Bug Tracking", "Emma", "2026-11-10", "In Dev", "Should-have", "2026-11-05"],
  ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-10-25"],
  ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
  ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
  ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
  ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
  ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
  ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
  ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
  ["Calendar Integration", "Andrew", "2026-10-30", "Planned", "Should-have", "2026-10-25"],
  ["Task Management", "Michelle", "2026-11-20", "In Dev", "Must-have", "2026-11-15"],
  ["Email Templates", "Sofia", "2026-08-18", "Released", "Nice-to-have", "2026-08-15"],
  ["Subscription Plans", "Liam", "2026-09-22", "Planned", "Should-have", "2026-09-18"],
  ["Data Backup", "Emma", "2026-10-12", "In Dev", "Must-have", "2026-10-08"],
  ["Integration with Third-Party Services", "Andrew", "2026-11-30", "Planned", "Nice-to-have", "2026-11-25"],
  ["Custom Dashboards", "Michelle", "2026-08-28", "In Dev", "Should-have", "2026-08-24"],
  ["User Onboarding", "Sofia", "2026-09-18", "Released", "Must-have", "2026-09-12"],
  ["Feedback System", "Liam", "2026-10-08", "Planned", "Nice-to-have", "2026-10-01"],
  ["Bug Tracking", "Emma", "2026-11-10", "In Dev", "Should-have", "2026-11-05"],
  ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-10-25"],
  ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
  ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
  ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
  ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
  ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
  ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
  ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
  ["Calendar Integration", "Andrew", "2026-10-30", "Planned", "Should-have", "2026-10-25"],
  ["Task Management", "Michelle", "2026-11-20", "In Dev", "Must-have", "2026-11-15"],
  ["Email Templates", "Sofia", "2026-08-18", "Released", "Nice-to-have", "2026-08-15"],
  ["Subscription Plans", "Liam", "2026-09-22", "Planned", "Should-have", "2026-09-18"],
  ["Data Backup", "Emma", "2026-10-12", "In Dev", "Must-have", "2026-10-08"],
  ["Integration with Third-Party Services", "Andrew", "2026-11-30", "Planned", "Nice-to-have", "2026-11-25"],
  ["Custom Dashboards", "Michelle", "2026-08-28", "In Dev", "Should-have", "2026-08-24"],
  ["User Onboarding", "Sofia", "2026-09-18", "Released", "Must-have", "2026-09-12"],
  ["Feedback System", "Liam", "2026-10-08", "Planned", "Nice-to-have", "2026-10-01"],
  ["Bug Tracking", "Emma", "2026-11-10", "In Dev", "Should-have", "2026-11-05"],
  ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-10-25"],
  ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
  ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
  ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
  ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
  ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
  ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
  ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
  ["Calendar Integration", "Andrew", "2026-10-30", "Planned", "Should-have", "2026-10-25"],
  ["Task Management", "Michelle", "2026-11-20", "In Dev", "Must-have", "2026-11-15"],
  ["Email Templates", "Sofia", "2026-08-18", "Released", "Nice-to-have", "2026-08-15"],
  ["Subscription Plans", "Liam", "2026-09-22", "Planned", "Should-have", "2026-09-18"],
  ["Data Backup", "Emma", "2026-10-12", "In Dev", "Must-have", "2026-10-08"],
  ["Integration with Third-Party Services", "Andrew", "2026-11-30", "Planned", "Nice-to-have", "2026-11-25"],
  ["Custom Dashboards", "Michelle", "2026-08-28", "In Dev", "Should-have", "2026-08-24"],
  ["User Onboarding", "Sofia", "2026-09-18", "Released", "Must-have", "2026-09-12"],
  ["Feedback System", "Liam", "2026-10-08", "Planned", "Nice-to-have", "2026-10-01"],
  ["Bug Tracking", "Emma", "2026-11-10", "In Dev", "Should-have", "2026-11-05"],
  ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-10-25"],
  ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
  ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
  ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
  ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
  ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
  ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
  ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
  ["Calendar Integration", "Andrew", "2026-10-30", "Planned", "Should-have", "2026-10-25"],
  ["Task Management", "Michelle", "2026-11-20", "In Dev", "Must-have", "2026-11-15"],
  ["Email Templates", "Sofia", "2026-08-18", "Released", "Nice-to-have", "2026-08-15"],
  ["Subscription Plans", "Liam", "2026-09-22", "Planned", "Should-have", "2026-09-18"],
  ["Data Backup", "Emma", "2026-10-12", "In Dev", "Must-have", "2026-10-08"],
  ["Integration with Third-Party Services", "Andrew", "2026-11-30", "Planned", "Nice-to-have", "2026-11-25"],
  ["Custom Dashboards", "Michelle", "2026-08-28", "In Dev", "Should-have", "2026-08-24"],
  ["User Onboarding", "Sofia", "2026-09-18", "Released", "Must-have", "2026-09-12"],
  ["Feedback System", "Liam", "2026-10-08", "Planned", "Nice-to-have", "2026-10-01"],
  ["Bug Tracking", "Emma", "2026-11-10", "In Dev", "Should-have", "2026-11-05"],
  ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-02-05"],
  ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
  ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
  ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
  ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
  ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
  ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
  ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
  ["File System Uploads", "Emma", "2026-01-05", "Released", "Should-have", "2026-01-01"]
    ],
    dataFields: [
      "Feature: string",
      "Owner: string",
      "Target Release: date",
      "Status: string",
      "Priority: string",
      "ReviewDate: date"
    ]
  });

  return (
    <div>
      <Grid
        ref={gridRef}
        dataSource={dataSource}
        columns={columns}
        sorting={{ enabled: true, mode: "many" }}
        filtering={{ enabled: true, filterRow: { visible: true } }}
        selection={{
          enabled: true,
          mode: "many",
          checkBoxes: { enabled: true }
        }}
        appearance={{ showColumnIcon: true }}
      />
    </div>
  );
};

export default App;
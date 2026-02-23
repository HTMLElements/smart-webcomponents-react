import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';

import React from "react";
import "smart-webcomponents-react/source/styles/smart.default.css";
import "./App.css";
import { Grid } from "smart-webcomponents-react/grid";

const columns = [
  {
    label: "Category",
    dataField: "Category",
    filterMenuMode: "set",
    filter: ["Venue", "Catering", "Decorations"]
  },
  {
    label: "Estimated Cost",
    dataField: "Estimated Cost",
    dataType: "number"
  },
  {
    label: "Actual Cost",
    dataField: "Actual Cost",
    dataType: "number"
  },
  {
    label: "Paid",
    dataField: "Paid",
    dataType: "boolean",
    template: "checkBox"
  },
  {
    label: "Vendor",
    dataField: "Vendor"
  },
  {
    label: "Payment Due",
    dataField: "Payment Due",
    dataType: "date"
  }
];

const data = [
  ["Venue", 5000, 10, false, "Grand Hall", "2025-08-15"],
  ["Catering", 2000, 20, false, "Fine Foods Ltd", "2025-08-20"],
  ["Decorations", 800, 30, true, "Party Décor Co.", "2025-08-30"],
  ["AV equipment", 1200, 50, false, "Sound & Light Inc.", "2025-08-25"],
  ["Marketing", 1500, 0, false, "Ad Agency", "2025-08-10"],
  ["Catering", 2500, 0, false, "Gourmet Catering", "2025-08-22"],
  ["Venue", 6000, 0, false, "City Conference Center", "2025-08-18"],
  ["Staffing", 3000, 0, true, "Event Staffers", "2025-08-28"],
  ["Logistics", 1800, 10, false, "LogiTrans", "2025-08-27"],
  ["Entertainment", 2200, 10, false, "Live Band Co.", "2025-08-29"],
  ["Marketing", 1300, 20, true, "Social Media Experts", "2025-08-12"],
  ["Decorations", 900, 0, false, "Floral Designs", "2025-08-31"],
  ["AV equipment", 1100, 0, true, "Tech Rentals", "2025-08-26"],
  ["Staffing", 2800, 30, false, "Temp Workers Inc.", "2025-08-29"],
  ["Logistics", 1600, 70, true, "Fast Move Logistics", "2025-08-24"],
  ["Entertainment", 2400, 60, false, "DJ Services", "2025-08-30"],
  ["Venue", 5500, 0, false, "Downtown Event Space", "2025-08-17"],
  ["Catering", 2300, 0, true, "Delicious Bites", "2025-08-21"],
  ["Marketing", 1400, 0, false, "Creative Ads", "2025-08-11"],
  ["Decorations", 850, 0, false, "Event Stylists", "2025-08-29"],
  ["AV equipment", 1150, 0, false, "AudioVisual Pros", "2025-08-23"],
  ["Staffing", 2900, 0, false, "Event Helpers", "2025-08-27"],
  ["Logistics", 1700, 0, false, "MoveIt Logistics", "2025-08-26"],
  ["Entertainment", 2100, 0, true, "Fun Times Entertainment", "2025-08-28"],
  ["Venue", 5200, 0, true, "Uptown Banquet Hall", "2025-08-16"],
  ["Catering", 2400, 0, false, "Tasty Treats Catering", "2025-08-23"],
  ["Marketing", 1350, 0, false, "Ad Creators", "2025-08-13"],
  ["Decorations", 870, 0, true, "Party Planners", "2025-08-30"],
  ["AV equipment", 1180, 0, false, "Event Tech Solutions", "2025-08-24"],
  ["Staffing", 3100, 0, false, "Staffing Solutions", "2025-08-28"],
  ["Logistics", 1750, 0, false, "Quick Move Logistics", "2025-08-25"],
  ["Entertainment", 2250, 0, false, "Entertainment Experts", "2025-08-29"]
];

const dataFields = [
  { name: "Category", dataType: "string" },
  { name: "Estimated Cost", dataType: "number" },
  { name: "Actual Cost", dataType: "number" },
  { name: "Paid", dataType: "boolean" },
  { name: "Vendor", dataType: "string" },
  { name: "Payment Due", dataType: "date" }
];

const dataSourceSettings = {
  dataFields: dataFields
};

const sorting = {
  enabled: true,
  mode: "many"
};

const filtering = {
  enabled: true
};

const appearance = {
  showColumnIcon: true,
  showFilterColumnBackground: true,
  showSortColumnBackground: true
};

export default function Demo() {
  return (
    <div className="viewport">
      <div className="demo-description">
        <h1>Filter Set - Data Grid Excel-like Filtering</h1>
        <p>
          This demo illustrates how to use the set-filtering feature of the Grid. The set-filtering
          feature allows users to apply excel-like filter conditions on a single column. Users can select multiple
          values from a dropdown list or use a search box to find specific values within the column. The set-filtering
          feature provides an intuitive and efficient way to filter data in the grid, making it easier for users to
          analyze and explore large datasets. With set-filtering, users can quickly narrow down their data based on
          specific criteria, enhancing the overall user experience when working with the Grid component.
        </p>
      </div>
      <Grid
        id="grid"
        dataSource={data}
		dataSourceSettings={dataSourceSettings}
        columns={columns}
        sorting={sorting}
        filtering={filtering}
        appearance={appearance}
      />
    </div>
  );
}

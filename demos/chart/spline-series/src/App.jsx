import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    {
      Year: "1950",
      HPI: "105.8948393",
      BuildCost: "59.9171862",
      Population: "151.684",
      Rate: "0.0232",
      uid: 0
    },
    {
      Year: "1951",
      HPI: "103.8986687",
      BuildCost: "59.2786986",
      Population: "154.287",
      Rate: "0.0257",
      uid: 1
    },
    // ... rest of the data (omit here for brevity, but include in real use)
  ];

  const chartSettings = {
    caption: "Housing Price Index Over Time",
    description: "HPI vs Build Cost and Population",
    showLegend: true,
    enableAnimations: true,
    padding: { left: 10, top: 10, right: 10, bottom: 10 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    dataSource: sampleData,
    xAxis: {
      dataField: 'Year',
      type: 'basic'
    },
    valueAxis: {
      unitInterval: 10,
      minValue: 50,
      maxValue: 200,
      title: { text: 'Values' }
    },
    seriesGroups: [
      {
        type: 'line',
        series: [
          { dataField: 'HPI', displayText: 'Housing Price Index' },
          { dataField: 'BuildCost', displayText: 'Build Cost' }
        ]
      }
    ]
  };

  return <Chart {...chartSettings} />;
};

export default App;

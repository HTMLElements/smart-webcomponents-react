import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25 },
    { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0 },
    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25 },
    { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45 },
    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25 },
    { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30 },
    { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 0 }
  ];

  const chartProps = {
    caption: 'Fitness & exercise weekly scorecard',
    description: 'Time spent in vigorous exercise by activity',
    showLegend: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    dataSource: sampleData,
    xAxis: {
      dataField: 'Day',
      tickMarks: { visible: true, unitInterval: 1, color: '#BCBCBC' },
      gridLines: { visible: true, unitInterval: 1, color: '#BCBCBC' },
      axisSize: 'auto'
    },
    valueAxis: {
      unitInterval: 10,
      title: { text: 'Time in minutes' },
      tickMarks: { color: '#BCBCBC' },
      gridLines: { color: '#BCBCBC' },
      labels: {
        horizontalAlignment: 'right',
        formatSettings: { suffix: '%' }
      }
    },
    colorScheme: 'scheme05',
    seriesGroups: [{
      type: 'stackedcolumn100',
      columnsGapPercent: 100,
      seriesGapPercent: 5,
      series: [
        { dataField: 'Running', displayText: 'Running' },
        { dataField: 'Swimming', displayText: 'Swimming' },
        { dataField: 'Cycling', displayText: 'Cycling' }
      ]
    }]
  };

  return (
    <div>
      <Chart id="chart" {...chartProps} />
    </div>
  );
};

export default App;

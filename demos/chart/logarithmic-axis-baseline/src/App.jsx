import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    { a: 0.35, b: 14.5 },
    { a: 1, b: 2.5 },
    { a: 10, b: 0.2 },
    { a: 100, b: 205 },
    { a: 1, b: 100 },
    { a: 5.11, b: 10.13 },
    { a: 20.13, b: 10.13 },
    { a: 600, b: 300 }
  ];

  const renderEngine = 'HTML5';
  const caption = 'Logarithmic Scale Axis Example';
  const description = 'Sample logarithmic scale axis with base 2 and baseline 8';
  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: ''
  };

  const valueAxis = {
    logarithmicScale: true,
    logarithmicScaleBase: 2,
    baselineValue: 8,
    unitInterval: 1,
    title: { text: 'Value' },
    tickMarks: { unitInterval: 1 },
    gridLines: { unitInterval: 1 },
    labels: {
      formatSettings: { decimalPlaces: 3 },
      horizontalAlignment: 'right'
    }
  };

  const seriesGroups = [
    {
      type: 'column',
      series: [
        { dataField: 'a', displayText: 'A' },
        { dataField: 'b', displayText: 'B' }
      ]
    },
    {
      type: 'line',
      series: [
        { dataField: 'a', displayText: 'A2' },
        { dataField: 'b', displayText: 'B2' }
      ]
    }
  ];

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        renderEngine={renderEngine}
        caption={caption}
        description={description}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sampleData}
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

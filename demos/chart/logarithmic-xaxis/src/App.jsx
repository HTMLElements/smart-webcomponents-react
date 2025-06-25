import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    { a: 0.1535, b: 0.5 },
    { a: 0.48, b: 20.5 },
    { a: 10, b: 60 },
    { a: 100, b: 80 },
    { a: 200, b: 90 },
    { a: 245.11, b: 100.13 },
    { a: 300.13, b: 150.13 },
    { a: 340, b: 200 }
  ];

  const caption = 'Logarithmic Scale x-Axis Example';
  const renderEngine = 'HTML5';
  const description = 'Horizontal axis with base 2 logarithmic scale';
  const padding = { left: 15, top: 5, right: 15, bottom: 5 };
  const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: 'a',
    logarithmicScale: true,
    logarithmicScaleBase: 2
  };

  const valueAxis = {
    logarithmicScale: false,
    logarithmicScaleBase: 2,
    title: { text: 'Value' },
    labels: {
      horizontalAlignment: 'right'
    }
  };

  const seriesGroups = [
    {
      type: 'line',
      series: [
        {
          dataField: 'a',
          displayText: 'A',
          symbolType: 'square',
          symbolSize: 6,
          dashStyle: '4,4',
          lineWidth: 1
        },
        {
          dataField: 'b',
          displayText: 'B',
          symbolType: 'circle',
          symbolSize: 6,
          lineWidth: 1
        }
      ]
    }
  ];

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        caption={caption}
        renderEngine={renderEngine}
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

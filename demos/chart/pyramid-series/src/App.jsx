import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
    { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
    { Index: '3', SerieA: 30, SerieB: 0, SerieC: 25 },
    { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
    { Index: '5', SerieA: 0, SerieB: 20, SerieC: 25 }
  ];

  const caption = 'Pyramid series';
  const description = 'This example demonstrates pyramid chart series';
  const showLegend = true;

  const padding = {
    left: 15,
    top: 15,
    right: 15,
    bottom: 15
  };

  const titlePadding = {
    left: 90,
    top: 0,
    right: 0,
    bottom: 10
  };

  const xAxis = {
    dataField: 'Index',
    tickMarks: {
      visible: true,
      unitInterval: 1
    },
    gridLines: {
      visible: true,
      unitInterval: 1
    }
  };

  const valueAxis = {
    labels: {
      horizontalAlignment: 'right'
    }
  };

  const colorScheme = 'scheme32';

  const seriesGroups = [
    {
      type: 'column',
      columnsGapPercent: 20,
      seriesGapPercent: 20,
      columnsTopWidthPercent: 0,
      columnsBottomWidthPercent: 100,
      series: [
        { dataField: 'SerieA', displayText: 'Serie A' },
        { dataField: 'SerieB', displayText: 'Serie B' },
        { dataField: 'SerieC', displayText: 'Serie C' }
      ]
    }
  ];

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        caption={caption}
        description={description}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sampleData}
        xAxis={xAxis}
        valueAxis={valueAxis}
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

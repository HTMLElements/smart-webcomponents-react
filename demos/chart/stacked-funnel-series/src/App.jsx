import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
    { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
    { Index: '3', SerieA: 30, SerieB: 10, SerieC: 25 },
    { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
    { Index: '5', SerieA: 10, SerieB: 20, SerieC: 25 },
    { Index: '6', SerieA: 30, SerieB: 10, SerieC: 30 },
    { Index: '7', SerieA: 60, SerieB: 45, SerieC: 10 }
  ];

  const caption = 'Stacked Funnel chart';
  const description = 'This example demonstrates stacked funnel chart with positive and negative values';
  const showLegend = true;

  const padding = { left: 15, top: 15, right: 15, bottom: 15 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

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

  const seriesGroups = [
    {
      type: 'stackedcolumn',
      columnsGapPercent: 50,
      seriesGapPercent: 0,
      columnsTopWidthPercent: 100,
      columnsBottomWidthPercent: 30,
      series: [
        {
          dataField: 'SerieA',
          displayText: 'Serie A',
          labels: { visible: true }
        },
        {
          dataField: 'SerieB',
          displayText: 'Serie B',
          labels: { visible: true }
        },
        {
          dataField: 'SerieC',
          displayText: 'Serie C',
          labels: { visible: true }
        }
      ]
    }
  ];

  return (
    <div>
      <Chart
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

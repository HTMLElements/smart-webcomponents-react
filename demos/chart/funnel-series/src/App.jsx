import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = useMemo(() => [
    { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
    { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
    { Index: '3', SerieA: 30, SerieB: 15, SerieC: 25 },
    { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
    { Index: '5', SerieA: 20, SerieB: 15, SerieC: 25 }
  ], []);

  const xAxis = useMemo(() => ({
    dataField: 'Index',
    tickMarks: {
      visible: true,
      unitInterval: 1
    },
    gridLines: {
      visible: true,
      unitInterval: 1
    }
  }), []);

  const valueAxis = useMemo(() => ({
    labels: {
      horizontalAlignment: 'right'
    }
  }), []);

  const seriesGroups = useMemo(() => [
    {
      type: 'column',
      columnsGapPercent: 20,
      seriesGapPercent: 20,
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
  ], []);

  return (
    <div>
      <Chart
        id="chart"
        caption="Funnel chart"
        description="This example demonstrates funnel chart with positive and negative values"
        showLegend={true}
        padding={{ left: 15, top: 15, right: 15, bottom: 15 }}
        titlePadding={{ left: 90, top: 0, right: 0, bottom: 10 }}
        dataSource={sampleData}
        xAxis={xAxis}
        valueAxis={valueAxis}
        colorScheme="scheme02"
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

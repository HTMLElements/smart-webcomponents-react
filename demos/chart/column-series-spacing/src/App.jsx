import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
    { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
    { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
    { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
    { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
    { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
    { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
  ];

  const chartSettings = {
    animation: 'none',
    caption: 'Columns spacing and padding',
    description: 'Example with two series groups and three series in each group',
    showLegend: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    dataSource: sampleData,
    columnSeriesOverlap: true,
    xAxis: {
      dataField: 'Position',
      tickMarks: { visible: true, unitInterval: 1, color: '#BCBCBC' },
      gridLines: { visible: true, unitInterval: 1, color: '#BCBCBC' },
      flip: false,
      valuesOnTicks: false
    },
    valueAxis: {
      unitInterval: 10,
      title: { text: 'Value' },
      tickMarks: { color: '#BCBCBC' },
      gridLines: { color: '#BCBCBC' },
      labels: { horizontalAlignment: 'right' }
    },
    colorScheme: 'scheme04',
    seriesGroups: [
      {
        type: 'stackedcolumn',
        columnsGapPercent: 25,
        seriesGapPercent: 10,
        columnsMaxWidth: 40,
        columnsMinWidth: 1,
        skipOverlappingPoints: false,
        series: [
          { dataField: 'Serie1', displayText: 'Serie1' },
          { dataField: 'Serie2', displayText: 'Serie2' },
          { dataField: 'Serie3', displayText: 'Serie3' }
        ]
      },
      {
        type: 'column',
        greyScale: true,
        columnsGapPercent: 25,
        seriesGapPercent: 10,
        columnsMaxWidth: 40,
        columnsMinWidth: 1,
        skipOverlappingPoints: false,
        series: [
          { dataField: 'Serie4', displayText: 'Serie4' },
          { dataField: 'Serie5', displayText: 'Serie5' },
          { dataField: 'Serie6', displayText: 'Serie6' }
        ]
      }
    ]
  };

  const updateChart = useCallback((groupIdx, prop, value) => {
    const chart = chartRef.current;
    if (chart?.seriesGroups && chart.seriesGroups[groupIdx]) {
      chart.seriesGroups[groupIdx][prop] = value;
    }
  }, []);

  return (
    <div>
      <Chart ref={chartRef} id="chart" {...chartSettings} />

      <div className="options">
        <table>
          <tbody>
            <tr><td><b>Series group 1/2:</b></td></tr>
            <tr>
              <td>
                <CheckBox
                  id="btnStackedSeriesGroup1"
                  checked
                  onChange={(e) =>
                    updateChart(0, 'type', e.detail.value ? 'stackedcolumn' : 'column')
                  }
                >
                  Stacked
                </CheckBox>
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox
                  id="btnStackedSeriesGroup2"
                  onChange={(e) =>
                    updateChart(1, 'type', e.detail.value ? 'stackedcolumn' : 'column')
                  }
                >
                  Stacked
                </CheckBox>
              </td>
            </tr>

            {[
              { label: 'Columns Gap Group 1', group: 0, prop: 'columnsGapPercent', defaultValue: 25 },
              { label: 'Columns Gap Group 2', group: 1, prop: 'columnsGapPercent', defaultValue: 25 },
              { label: 'Series Gap Group 1', group: 0, prop: 'seriesGapPercent', defaultValue: 10 },
              { label: 'Series Gap Group 2', group: 1, prop: 'seriesGapPercent', defaultValue: 10 },
              { label: 'Min Width Group 1', group: 0, prop: 'columnsMinWidth', defaultValue: 0 },
              { label: 'Min Width Group 2', group: 1, prop: 'columnsMinWidth', defaultValue: 0 },
              { label: 'Max Width Group 1', group: 0, prop: 'columnsMaxWidth', defaultValue: 40 },
              { label: 'Max Width Group 2', group: 1, prop: 'columnsMaxWidth', defaultValue: 40 }
            ].map(({ label, group, prop, defaultValue }, i) => (
              <tr key={i}>
                <td>{label}:
                  <Slider
                    min={prop.includes('Max') ? 1 : 0}
                    max={prop.includes('Max') ? 120 : 99}
                    value={defaultValue}
                    coerce
                    interval={1}
                    labelsVisibility="none"
                    ticksVisibility="major"
                    onChange={(e) => updateChart(group, prop, e.detail.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

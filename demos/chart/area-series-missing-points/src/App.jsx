import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    { a: 25, b: 21 },
    { a: 28, b: 19 },
    { a: 35, b: undefined },
    { a: 29, b: NaN },
    { a: 38, b: 18 },
    { a: 36, b: 17 },
    { a: 31, b: 21 }
  ];

  const handleChange = useCallback((event) => {
    const chart = chartRef.current;

    if (chart.seriesGroups && chart.seriesGroups[0] && chart.seriesGroups[0].series) {
      chart.seriesGroups[0].series[1].emptyPointsDisplay = event.detail.value;
      chart.update();
    }
  }, []);

  const seriesGroups = [
    {
      type: 'area',
      toolTipFormatFunction: function (value, itemIndex) {
        return `<div style="text-align:left"><b>Index:</b> ${itemIndex}<br /><b>Value:</b> ${value}<br /></div>`;
      },
      valueAxis: {
        title: {
          text: 'Value<br>'
        }
      },
      series: [
        {
          dataField: 'a',
          lineWidth: 2,
          symbolSize: 8,
          symbolType: 'circle',
          opacity: 0.8
        },
        {
          dataField: 'b',
          emptyPointsDisplay: 'skip',
          lineWidth: 2,
          symbolSize: 8,
          symbolType: 'diamond',
          opacity: 0.9
        }
      ]
    }
  ];

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        animation="none"
        caption="Area series with missing points"
        description="Sample area series with missing and invalid values"
        showLegend={true}
        padding={{ left: 5, top: 5, right: 15, bottom: 5 }}
        titlePadding={{ left: 0, top: 0, right: 0, bottom: 10 }}
        dataSource={sampleData}
        xAxis={{
          text: 'x',
          valuesOnTicks: true
        }}
        colorScheme="scheme30"
        seriesGroups={seriesGroups}
      ></Chart>
      <br />
      <div className="options">
        <p>Select missing points display mode:</p>
        <DropDownList
          id="dropDownMissingPointsMode"
          dataSource={["skip", "zero", "connect"]}
          selectionMode="one"
          selectedIndexes={[0]}
          onChange={handleChange}
        ></DropDownList>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const chartRef = useRef();

  const sampleData = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

  const [emptyPointsMode, setEmptyPointsMode] = useState('skip');

  const chartConfig = {
    animation: 'none',
    caption: 'Line serie with missing points',
    description: 'Sample line serie with missing and invalid values',
    showLegend: true,
    padding: {
      left: 5,
      top: 5,
      right: 15,
      bottom: 5
    },
    titlePadding: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 10
    },
    dataSource: sampleData,
    xAxis: {
      text: 'x',
      valuesOnTicks: false
    },
    colorScheme: 'scheme31',
    seriesGroups: [
      {
        type: 'line',
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
            emptyPointsDisplay: emptyPointsMode,
            displayText: 'Value',
            lineWidth: 2,
            symbolSize: 8,
            symbolType: 'circle'
          }
        ]
      }
    ]
  };

  const handleChange = (event) => {
    const newMode = event.detail.value;
    setEmptyPointsMode(newMode);

    // Update the chart series group configuration
    if (chartRef.current) {
      chartRef.current.seriesGroups[0].series[0].emptyPointsDisplay = newMode;
      chartRef.current.update();
    }
  };

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        {...chartConfig}
      />
      <br />
      <div className="options">
        <p>Select missing points display mode:</p>
        <DropDownList
          id="dropDownMissingPointsMode"
          dataSource={['skip', 'zero', 'connect']}
          selectionMode="one"
          selectedIndexes={[0]}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;

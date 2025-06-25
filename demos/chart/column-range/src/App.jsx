import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { month: 'Jan', min: -3, max: 3 },
    { month: 'Feb', min: -3, max: 5 },
    { month: 'Mar', min: 1, max: 10 },
    { month: 'Apr', min: 4, max: 15 },
    { month: 'May', min: 8, max: 18 },
    { month: 'Jun', min: 12, max: 23 },
    { month: 'Jul', min: 13, max: 25 },
    { month: 'Aug', min: 13, max: 24 },
    { month: 'Sep', min: 10, max: 20 },
    { month: 'Oct', min: 6, max: 14 },
    { month: 'Nov', min: 1, max: 8 },
    { month: 'Dec', min: -2, max: -1 }
  ];

  const caption = 'Temperature Averages by Month in Bern, Switzerland';
  const description = '(source ncdc.noaa.gov)';
  const showLegend = false;
  const padding = { left: 10, top: 5, right: 10, bottom: 5 };
  const titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme05';

  const xAxis = {
    dataField: 'month',
    labels: { angle: 90 },
    gridLines: { visible: false }
  };

  const valueAxis = {
    visible: true,
    title: { text: 'Temperature (°C)' },
    flip: true,
    minValue: -10,
    maxValue: 30,
    formatSettings: { decimalPlaces: 0 }
  };

  const seriesGroups = [
    {
      type: 'rangecolumn',
      orientation: 'horizontal',
      columnsMaxWidth: 15,
      series: [
        {
          dataFieldFrom: 'min',
          dataFieldTo: 'max',
          displayText: 'Temperature Range'
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
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = useMemo(() => [
    { Month: 'Jan', Varna: 6, Moscow: -5, Cairo: 19 },
    { Month: 'Feb', Varna: 8, Moscow: -4, Cairo: 21 },
    { Month: 'Mar', Varna: 11, Moscow: 2, Cairo: 24 },
    { Month: 'Apr', Varna: 16, Moscow: 11, Cairo: 29 },
    { Month: 'May', Varna: 21, Moscow: 19, Cairo: 33 },
    { Month: 'Jun', Varna: 26, Moscow: 22, Cairo: 35 },
    { Month: 'Jul', Varna: 28, Moscow: 24, Cairo: 35 },
    { Month: 'Aug', Varna: 29, Moscow: 22, Cairo: 35 },
    { Month: 'Sep', Varna: 24, Moscow: 16, Cairo: 34 },
    { Month: 'Oct', Varna: 19, Moscow: 8, Cairo: 30 },
    { Month: 'Nov', Varna: 13, Moscow: 1, Cairo: 25 },
    { Month: 'Dec', Varna: 8, Moscow: -3, Cairo: 21 }
  ], []);

  const caption = 'Monthly Average Temperature';
  const description = 'dataSource: google.com';
  const showLegend = true;

  const padding = {
    left: 30,
    top: 5,
    right: 30,
    bottom: 5
  };

  const titlePadding = {
    left: 50,
    top: 0,
    right: 0,
    bottom: 10
  };

  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: 'Month',
    tickMarks: {
      visible: true,
      unitInterval: 1,
      color: '#BCBCBC'
    },
    gridLines: {
      visible: true,
      unitInterval: 3,
      color: '#BCBCBC'
    }
  };

  const clip = false;

  const valueAxis = {
    visible: true,
    title: {
      text: 'Temperature (°C)'
    },
    tickMarks: {
      color: '#BCBCBC'
    },
    unitInterval: 10,
    minValue: -10,
    maxValue: 40
  };

  const seriesGroups = [
    {
      type: 'line',
      series: [
        {
          dataField: 'Varna',
          displayText: 'Varna',
          labels: {
            visible: true,
            formatSettings: {
              sufix: '°'
            }
          },
          symbolType: 'circle',
          symbolSize: 8
        },
        {
          dataField: 'Moscow',
          displayText: 'Moscow',
          labels: {
            visible: true,
            formatSettings: {
              sufix: '°'
            }
          },
          symbolType: 'diamond',
          symbolSize: 10
        },
        {
          dataField: 'Cairo',
          displayText: 'Cairo',
          labels: {
            visible: true,
            formatSettings: {
              sufix: '°'
            }
          },
          symbolType: 'square',
          symbolSize: 8
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
        clip={clip}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

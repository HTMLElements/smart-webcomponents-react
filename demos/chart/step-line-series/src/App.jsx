import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { Date: new Date(2019, 1, 13), NFLX: 351.77, DIS: 110.2 },
    { Date: new Date(2019, 1, 14), NFLX: 359.07, DIS: 110.66 },
    { Date: new Date(2019, 1, 15), NFLX: 356.87, DIS: 112.59 },
    { Date: new Date(2019, 1, 19), NFLX: 361.92, DIS: 113.51 },
    { Date: new Date(2019, 1, 20), NFLX: 359.91, DIS: 113.68 },
    { Date: new Date(2019, 1, 21), NFLX: 356.97, DIS: 114.29 },
    { Date: new Date(2019, 1, 22), NFLX: 363.02, DIS: 115.25 },
    { Date: new Date(2019, 1, 25), NFLX: 363.91, DIS: 113.59 },
    { Date: new Date(2019, 1, 26), NFLX: 364.97, DIS: 113.5 },
    { Date: new Date(2019, 1, 27), NFLX: 362.87, DIS: 112.78 },
    { Date: new Date(2019, 1, 28), NFLX: 358.1, DIS: 112.84 },
    { Date: new Date(2019, 2, 1), NFLX: 357.32, DIS: 114.01 },
    { Date: new Date(2019, 2, 4), NFLX: 351.04, DIS: 114.33 },
    { Date: new Date(2019, 2, 5), NFLX: 354.3, DIS: 114 },
    { Date: new Date(2019, 2, 6), NFLX: 359.61, DIS: 114.85 },
    { Date: new Date(2019, 2, 7), NFLX: 352.6, DIS: 114.01 },
    { Date: new Date(2019, 2, 8), NFLX: 349.6, DIS: 113.81 },
    { Date: new Date(2019, 2, 11), NFLX: 358.86, DIS: 114.75 },
    { Date: new Date(2019, 2, 12), NFLX: 356.27, DIS: 114.73 },
  ];

  const caption = 'Stock Prices of Entertainment Companies';
  const description = 'February 13 - March 12, 2019';
  const showLegend = true;
  const padding = { left: 10, top: 5, right: 10, bottom: 5 };
  const titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme02';

  const xAxis = {
    dataField: 'Date',
    type: 'date',
    baseUnit: 'day',
    valuesOnTicks: true,
    unitInterval: 1,
    tickMarks: {
      visible: false,
      unitInterval: 1,
      color: '#BCBCBC'
    },
    gridLines: {
      visible: true,
      unitInterval: 3
    },
    labels: {
      angle: -45,
      rotationPoint: 'topright',
      offset: {
        x: -25,
        y: 0
      }
    }
  };

  const seriesGroups = [
    {
      type: 'stepline',
      series: [
        {
          dataField: 'NFLX',
          displayText: 'Netflix, Inc. (NFLX)'
        }
      ],
      valueAxis: {
        gridLines: {
          visible: false
        },
        title: {
          text: 'NFLX stock price (USD)'
        },
        labels: {
          formatSettings: {
            sufix: '$'
          }
        }
      }
    },
    {
      type: 'stepline',
      series: [
        {
          dataField: 'DIS',
          displayText: 'Walt Disney Co (DIS)'
        }
      ],
      valueAxis: {
        gridLines: {
          visible: false
        },
        position: 'right',
        title: {
          text: 'DIS stock price (USD)'
        },
        labels: {
          formatSettings: {
            sufix: '$'
          }
        }
      }
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
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

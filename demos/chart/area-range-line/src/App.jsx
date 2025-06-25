import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useEffect } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sampleData = [
      { Date: new Date(2019, 2, 1), Low: -5, High: 3 },
      { Date: new Date(2019, 2, 2), Low: 0, High: 1 },
      { Date: new Date(2019, 2, 3), Low: 0, High: 5 },
      { Date: new Date(2019, 2, 4), Low: -4, High: 4 },
      { Date: new Date(2019, 2, 5), Low: -7, High: -1 },
      { Date: new Date(2019, 2, 6), Low: -8, High: -3 },
      { Date: new Date(2019, 2, 7), Low: -9, High: -1 },
      { Date: new Date(2019, 2, 8), Low: -8, High: 3 },
      { Date: new Date(2019, 2, 9), Low: -3, High: 8 },
      { Date: new Date(2019, 2, 10), Low: -1, High: 4 },
      { Date: new Date(2019, 2, 11), Low: 3, High: 10 },
      { Date: new Date(2019, 2, 12), Low: 1, High: 7 },
      { Date: new Date(2019, 2, 13), Low: -1, High: 4 },
      { Date: new Date(2019, 2, 14), Low: 2, High: 11 },
      { Date: new Date(2019, 2, 15), Low: 4, High: 18 },
      { Date: new Date(2019, 2, 16), Low: 2, High: 13 },
      { Date: new Date(2019, 2, 17), Low: 0, High: 6 },
      { Date: new Date(2019, 2, 18), Low: -2, High: 7 },
      { Date: new Date(2019, 2, 19), Low: 0, High: 9 },
      { Date: new Date(2019, 2, 20), Low: -1, High: 11 },
      { Date: new Date(2019, 2, 21), Low: 1, High: 11 },
      { Date: new Date(2019, 2, 22), Low: 4, High: 7 },
      { Date: new Date(2019, 2, 23), Low: 1, High: 9 },
      { Date: new Date(2019, 2, 24), Low: 1, High: 16 },
      { Date: new Date(2019, 2, 25), Low: 2, High: 11 },
      { Date: new Date(2019, 2, 26), Low: -1, High: 7 },
      { Date: new Date(2019, 2, 27), Low: -1, High: 5 },
      { Date: new Date(2019, 2, 28), Low: 1, High: 12 },
      { Date: new Date(2019, 2, 29), Low: 7, High: 14 },
      { Date: new Date(2019, 2, 30), Low: 7, High: 19 },
      { Date: new Date(2019, 2, 31), Low: 5, High: 21 }
    ];

    // Calculate average
    sampleData.forEach(item => {
      item.Average = (item.High + item.Low) / 2;
    });

    setData(sampleData);
  }, []);

  const caption = 'Temperatures in Boston, Massachusetts';
  const description = 'March 2019';
  const enableCrosshairs = true;
  const showToolTipsOnAllSeries = true;
  const showLegend = true;

  const padding = { left: 10, top: 5, right: 10, bottom: 5 };
  const titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };

  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: 'Date',
    type: 'date',
    baseUnit: 'day',
    labels: {
      angle: -45,
      rotationPoint: 'topright',
      offset: { x: -25, y: 0 }
    }
  };

  const valueAxis = {
    title: { text: 'Temperature' },
    formatSettings: {
      decimalPlaces: 0,
      suffix: '°C'
    }
  };

  const seriesGroups = [
    {
      type: 'splinerangearea',
      series: [{
        dataFieldFrom: 'Low',
        dataFieldTo: 'High',
        displayText: 'Temperature Range',
        opacity: 0.8,
        toolTipFormatSettings: {
          decimalPlaces: 0,
          suffix: '°C'
        }
      }]
    },
    {
      type: 'spline',
      series: [{
        dataField: 'Average',
        symbolType: 'circle',
        symbolSize: 9,
        toolTipFormatSettings: {
          decimalPlaces: 0,
          suffix: '°C'
        }
      }]
    }
  ];

  return (
    <div>
      <Chart
        id="chart"
        caption={caption}
        description={description}
        enableCrosshairs={enableCrosshairs}
        showToolTipsOnAllSeries={showToolTipsOnAllSeries}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={data}
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

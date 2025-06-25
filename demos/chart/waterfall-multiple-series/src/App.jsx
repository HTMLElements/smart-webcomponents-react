import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const initialData = [
    { Episode: 1, Season1: 2220000, Season6: 7940000 },
    { Episode: 2, Season1: 2200000, Season6: 7290000 },
    { Episode: 3, Season1: 2440000, Season6: 7280000 },
    { Episode: 4, Season1: 2450000, Season6: 7820000 },
    { Episode: 5, Season1: 2580000, Season6: 7890000 },
    { Episode: 6, Season1: 2440000, Season6: 6710000 },
    { Episode: 7, Season1: 2400000, Season6: 7800000 },
    { Episode: 8, Season1: 2720000, Season6: 7600000 },
    { Episode: 9, Season1: 2660000, Season6: 7660000 },
    { Episode: 10, Season1: 3040000, Season6: 8890000 },
    { Episode: 'Total', summary: true, Season1: 0, Season6: 0 }
  ];

  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    const transformedData = [...initialData];

    for (let i = transformedData.length - 2; i > 0; i--) {
      transformedData[i].Season1 -= transformedData[i - 1].Season1;
      transformedData[i].Season6 -= transformedData[i - 1].Season6;
    }

    setSeasonData(transformedData);
  }, []);

  const chartProps = {
    caption: '"Game of Thrones" Viewership',
    description: 'Season 1 vs Season 6',
    showLegend: true,
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    xAxis: {
      type: 'basic',
      dataField: 'Episode',
      title: { text: 'Episode' },
      labels: { angle: 0 },
      valuesOnTicks: false
    },
    valueAxis: {
      minValue: 2000000,
      title: { text: 'Viewership (millions)' },
      unitInterval: 500000,
      labels: {
        formatFunction: value => (value / 1000000 + ' M')
      }
    },
    seriesGroups: [{
      type: 'waterfall',
      series: [
        {
          dataField: 'Season1',
          summary: 'summary',
          displayText: 'Season 1',
          colorFunction: (value, itemIndex) =>
            itemIndex === initialData.length - 1
              ? '#F7C71B'
              : value < 0
                ? '#FFBB84'
                : '#D8E24D'
        },
        {
          dataField: 'Season6',
          summary: 'summary',
          displayText: 'Season 6',
          colorFunction: (value, itemIndex) =>
            itemIndex === initialData.length - 1
              ? '#5993FF'
              : value < 0
                ? '#AF87FF'
                : '#8EDBFF'
        }
      ]
    }]
  };

  return (
    <div>
      <Chart
        id="chart"
        dataSource={seasonData}
        {...chartProps}
      />
    </div>
  );
};

export default App;

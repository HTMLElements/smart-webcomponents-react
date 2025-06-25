import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const initialData = [
    { year: 2006, population: 495.9e6 },
    { year: 2007, population: 498.3e6 },
    { year: 2008, population: 500.3e6 },
    { year: 2009, population: 502.09e6 },
    { year: 2010, population: 503.17e6 },
    { year: 2011, population: 504.49e6 },
    { year: 2012, population: 504.06e6 },
    { year: 2013, population: 505.17e6 },
    { year: 2014, population: 506.97e6 },
    { year: 2015, population: 508.5e6 },
    { year: 2016, population: 510.28e6 },
    { year: 2017, population: 511.81e6 },
    { year: 2018, population: 512.6e6 },
    { year: 'Total', summary: true }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const transformed = [...initialData];

    for (let i = transformed.length - 2; i > 0; i--) {
      transformed[i].population -= transformed[i - 1].population;
    }

    setData(transformed);
  }, []);

  const chartProps = {
    caption: 'EU Population between 2006 and 2018',
    description: 'data source: Eurostat',
    showLegend: false,
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    colorScheme: 'scheme06',
    xAxis: {
      type: 'basic',
      dataField: 'year',
      displayText: 'Year',
      labels: { angle: 0 }
    },
    valueAxis: {
      minValue: 490e6,
      title: { text: 'Population (millions)<br>' },
      unitInterval: 2e6,
      labels: {
        formatFunction: value => value / 1e6 + ' M'
      }
    },
    seriesGroups: [{
      type: 'waterfall',
      series: [{
        dataField: 'population',
        summary: 'summary',
        displayText: 'Population change',
        colorFunction: (value, itemIndex) => {
          if (itemIndex === initialData.length - 1) return '#00309A'; // Total
          return value < 0 ? '#E06243' : '#6CBC47';
        }
      }]
    }]
  };

  return (
    <div>
      <Chart id="chart" dataSource={data} {...chartProps} />
    </div>
  );
};

export default App;

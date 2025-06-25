import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useEffect } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  const animation = 'none';
  const caption = 'Large set of data points';
  const description = '';
  const showLegend = true;

  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: 'x',
    valuesOnTicks: false
  };

  const valueAxis = {
    unitInterval: 10,
    title: {
      text: 'Sales ($)<br>'
    },
    labels: {
      formatSettings: {
        prefix: '$',
        thousandsSeparator: ','
      },
      horizontalAlignment: 'right'
    }
  };

  const seriesGroups = [
    {
      type: 'scatter',
      series: [
        {
          dataField: 'y',
          symbolSize: 0.1,
          symbolType: 'circle',
          displayText: 'Sales in Q1'
        }
      ]
    }
  ];

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 25000; i++) {
      data.push({
        x: Math.pow(Math.random(), 3) * 50,
        y: Math.pow(Math.random(), 3) * 70
      });
    }
    setDataSource(data);
  }, []);

  return (
    <div>
      <Chart
        id="chart"
        animation={animation}
        caption={caption}
        description={description}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={dataSource}
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

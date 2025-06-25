import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const chartRef = useRef();
  const [data, setData] = useState([]);

  // Initial config
  const caption = 'Live updates performance';
  const updateInterval = 10; // milliseconds
  const description = `Data changes every ${updateInterval} milliseconds`;

  const generateInitialData = () => {
    const initial = [];
    for (let i = 0; i < 20; i++) {
      initial.push({
        key: i,
        value1: Math.random() * 200 + 200,
        value2: Math.random() * 200 + 500,
        value3: Math.random() * 200
      });
    }
    return initial;
  };

  useEffect(() => {
    let currentData = generateInitialData();
    setData(currentData);

    const intervalId = setInterval(() => {
      currentData = [...currentData.slice(1), {
        key: currentData[currentData.length - 1].key + 1,
        value1: Math.random() * 200 + 200,
        value2: Math.random() * 200 + 500,
        value3: Math.random() * 200
      }];
      setData(currentData);
      if (chartRef.current) {
        chartRef.current.update();
      }
    }, updateInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const chartProps = {
    animation: 'none',
    caption,
    description,
    showLegend: true,
    padding: { left: 10, top: 10, right: 10, bottom: 10 },
    titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
    dataSource: data,
    xAxis: {
      dataField: 'key',
      unitInterval: 1,
      valuesOnTicks: true,
      gridLines: { visible: false }
    },
    valueAxis: {
      minValue: 0,
      maxValue: 750,
      title: { text: 'Index Value<br>' }
    },
    colorScheme: 'scheme32',
    seriesGroups: [
      {
        type: 'line',
        useGradientColors: false,
        series: [{
          dataField: 'value1',
          displayText: 'value1',
          lineWidth: 2,
          symbolType: 'circle'
        }]
      },
      {
        type: 'spline',
        useGradientColors: false,
        columnsGapPercent: 50,
        alignEndPointsWithIntervals: true,
        series: [{
          dataField: 'value2',
          displayText: 'value2'
        }]
      },
      {
        type: 'column',
        useGradientColors: false,
        columnsGapPercent: 50,
        alignEndPointsWithIntervals: true,
        series: [{
          dataField: 'value3',
          displayText: 'value3'
        }]
      }
    ]
  };

  return (
    <div>
      <Chart ref={chartRef} id="chart" {...chartProps} />
    </div>
  );
};

export default App;

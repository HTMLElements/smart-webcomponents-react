import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const colors = ['#C8F08F', '#B4E051', '#8CD211', '#5AA700', '#4C8400', '#2D660A', '#144D14', '#0A3C02', '#0C2808', '#020301'];

  const sampleData = [
    { saturation: 40.42, brightness: 94.12 },
    { saturation: 63.84, brightness: 87.84 },
    { saturation: 91.90, brightness: 82.35 },
    { saturation: 100, brightness: 65.49 },
    { saturation: 100, brightness: 51.76 },
    { saturation: 90.2, brightness: 40 },
    { saturation: 74.03, brightness: 30.2 },
    { saturation: 96.67, brightness: 23.53 },
    { saturation: 80, brightness: 15.69 },
    { saturation: 66.67, brightness: 1.18 }
  ];

  useEffect(() => {
    const colorsContainer = document.getElementById('colorsContainer');
    colorsContainer.innerHTML = ''; // clear in case of re-render

    colors.forEach((color, i) => {
      const colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = color;
      colorDiv.innerHTML = `<span>${(i + 1) * 10}</span><span>${color}</span>`;
      colorsContainer.appendChild(colorDiv);
    });
  }, []);

  const chartProps = {
    caption: '',
    description: '',
    borderLineWidth: 0,
    padding: { left: 15, top: 5, right: 15, bottom: 5 },
    titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
    dataSource: sampleData,
    showLegend: false,
    clip: false,
    xAxis: {
      dataField: 'saturation',
      minValue: 0,
      maxValue: 100,
      unitInterval: 10,
      position: 'top',
      title: { text: 'Saturation' },
      valuesOnTicks: true,
      labels: {
        formatFunction(value) {
          return value !== 0 ? ' ' : value;
        }
      }
    },
    valueAxis: {
      minValue: 0,
      maxValue: 100,
      position: 'right',
      title: { text: 'Brightness' },
      labels: {
        horizontalAlignment: 'right',
        formatFunction(value) {
          return value % 100 !== 0 ? ' ' : value;
        }
      }
    },
    seriesGroups: [{
      type: 'scatter',
      series: [{
        dataField: 'brightness',
        displayText: 'Brightness',
        symbolType: 'circle',
        symbolSize: 25,
        lineWidth: 1,
        useGradientColors: false,
        colorFunction: (value, itemIndex) => colors[itemIndex],
        toolTipFormatFunction: (value, itemIndex) => colors[itemIndex],
        labels: {
          visible: true,
          offset: { x: -27 },
          formatFunction: (value, itemIndex) => '' + (itemIndex + 1) * 10
        }
      }]
    }]
  };

  return (
    <div>
      <div id="colorsContainer" />
      <Chart id="chart" {...chartProps} />
    </div>
  );
};

export default App;

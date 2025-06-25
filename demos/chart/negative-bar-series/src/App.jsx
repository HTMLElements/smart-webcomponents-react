import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { Country: 'Luxembourg', Inflation2011: 3.5, Inflation2012: 2.7 },
    { Country: 'Germany', Inflation2011: 2.5, Inflation2012: 2.1 },
    { Country: 'Spain', Inflation2011: 3.1, Inflation2012: 2.4 },
    { Country: 'France', Inflation2011: 2.1, Inflation2012: 2 },
    { Country: 'Belgium', Inflation2011: 3.5, Inflation2012: 2.6 },
    { Country: 'Netherlands', Inflation2011: 2.5, Inflation2012: 2.5 }
  ];

  const chartSettings = {
    caption: 'CPI inflation rate comparison - 2011 vs 2012',
    description: 'Source: Eurostat',
    showLegend: true,
    padding: { left: 5, top: 5, right: 15, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    dataSource: sampleData,
    colorScheme: 'scheme08',
    xAxis: {
      dataField: 'Country',
      displayText: 'Country'
    },
    valueAxis: {
      unitInterval: 1,
      minValue: 0,
      maxValue: 5,
      displayValueAxis: true,
      description: 'Inflation Rate (%)',
      axisSize: 'auto',
      tickMarksColor: '#888888',
      gridLinesColor: '#888888',
      labels: {
        formatSettings: {
          sufix: '%',
          decimalPlaces: 1
        }
      }
    },
    seriesGroups: [
      {
        type: 'column',
        orientation: 'horizontal',
        columnsGapPercent: 100,
        toolTipFormatSettings: { sufix: '%', decimalPlaces: 1 },
        series: [
          { dataField: 'Inflation2011', displayText: 'Inflation 2011' },
          { dataField: 'Inflation2012', displayText: 'Inflation 2012' }
        ]
      }
    ]
  };

  return (
    <div>
      <Chart id="chart" {...chartSettings} />
    </div>
  );
};

export default App;

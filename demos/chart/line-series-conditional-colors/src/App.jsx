import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = useMemo(() => [
    { "Quarter": "2014-Q1", "Change": "-2.7", "uid": 0 },
    { "Quarter": "2014-Q2", "Change": "2", "uid": 1 },
    { "Quarter": "2014-Q3", "Change": "-2", "uid": 2 },
    { "Quarter": "2014-Q4", "Change": "-8.3", "uid": 3 },
    { "Quarter": "2015-Q1", "Change": "-5.4", "uid": 4 },
    { "Quarter": "2015-Q2", "Change": "-0.4", "uid": 5 },
    { "Quarter": "2015-Q3", "Change": "1.3", "uid": 6 },
    { "Quarter": "2015-Q4", "Change": "3.9", "uid": 7 },
    { "Quarter": "2016-Q1", "Change": "1.6", "uid": 8 },
    { "Quarter": "2016-Q2", "Change": "3.9", "uid": 9 },
    { "Quarter": "2016-Q3", "Change": "2.8", "uid": 10 },
    { "Quarter": "2016-Q4", "Change": "2.8", "uid": 11 },
    { "Quarter": "2017-Q1", "Change": "-1.3", "uid": 12 },
    { "Quarter": "2017-Q2", "Change": "3.2", "uid": 13 },
    { "Quarter": "2017-Q3", "Change": "1.4", "uid": 14 },
    { "Quarter": "2017-Q4", "Change": "4.9", "uid": 15 },
    { "Quarter": "2018-Q1", "Change": "3.7", "uid": 16 },
    { "Quarter": "2018-Q2", "Change": "1.2", "uid": 17 },
    { "Quarter": "2018-Q3", "Change": "2.8", "uid": 18 },
    { "Quarter": "2018-Q4", "Change": "0.1", "uid": 19 },
    { "Quarter": "2019-Q1", "Change": "1.1", "uid": 20 },
    { "Quarter": "2019-Q2", "Change": "2.5", "uid": 21 },
    { "Quarter": "2019-Q3", "Change": "4.1", "uid": 22 },
    { "Quarter": "2019-Q4", "Change": "3.1", "uid": 23 }
  ], []);

  const caption = 'U.S. GDP Percentage Change';
  const borderLineWidth = 1;
  const showBorderLine = true;
  const description = '(source: Bureau of Economic Analysis)';
  const showLegend = false;

  const padding = {
    left: 5,
    top: 5,
    right: 10,
    bottom: 5
  };

  const titlePadding = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 10
  };

  const xAxis = {
    dataField: 'Quarter',
    unitInterval: 1,
    textRotationAngle: -75,
    valuesOnTicks: false
  };

  const seriesGroups = [
    {
      type: 'line',
      valueAxis: {
        description: 'Percentage Change',
        formatFunction: (value) => `${value}%`
      },
      series: [
        {
          dataField: 'Change',
          displayText: 'Change',
          colorFunction: (value) => (parseFloat(value) < 0 ? '#E25848' : '#61D14F')
        }
      ]
    }
  ];

  return (
    <div>
      <Chart
        id="chart"
        caption={caption}
        borderLineWidth={borderLineWidth}
        showBorderLine={showBorderLine}
        description={description}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sampleData}
        xAxis={xAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

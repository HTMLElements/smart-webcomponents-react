import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const source = [
    { Browser: 'Chrome', Share: 68.95 },
    { Browser: 'Firefox', Share: 10.67 },
    { Browser: 'Internet Explorer', Share: 6.42 },
    { Browser: 'Safari', Share: 5.35 },
    { Browser: 'Edge', Share: 4.2 },
    { Browser: 'Other', Share: 4.67 }
  ];

  const caption = 'Desktop browsers share';
  const description = '(source: gs.statcounter.com)';
  const showLegend = true;
  const showBorderLine = true;

  const legendPosition = {
    left: 520,
    top: 140,
    width: 100,
    height: 100
  };

  const padding = {
    left: 5,
    top: 5,
    right: 5,
    bottom: 5
  };

  const titlePadding = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 10
  };

  const seriesGroups = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          labelRadius: 120,
          initialAngle: 15,
          radius: 170,
          centerOffset: 0,
          formatFunction: (value) => {
            if (isNaN(value)) return value;
            return `${parseFloat(value)}%`;
          },
          useGradientColors: false
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
        showBorderLine={showBorderLine}
        legendPosition={legendPosition}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={source}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

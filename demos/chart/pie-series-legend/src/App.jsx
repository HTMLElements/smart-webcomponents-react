import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sourceMobile = [
    { Browser: 'Chrome', Share: 54.84 },
    { Browser: 'Safari', Share: 19.16 },
    { Browser: 'UC Browser', Share: 11.33 },
    { Browser: 'Samsung Internet', Share: 5.71 },
    { Browser: 'Opera', Share: 4.53 },
    { Browser: 'Android', Share: 1.87 },
    { Browser: 'Other', Share: 2.56 }
  ];

  const caption = 'Mobile browsers share';
  const description = '(source: gs.statcounter.com)';
  const showLegend = true;
  const showBorderLine = true;

  const legendLayout = {
    left: 700,
    top: 160,
    width: 300,
    height: 200,
    flow: 'vertical'
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

  const colorScheme = 'scheme31';

  const seriesGroups = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          labelRadius: 170,
          initialAngle: 15,
          radius: 145,
          centerOffset: 0,
          formatFunction: (value) => {
            if (isNaN(value)) return value;
            return `${parseFloat(value)}%`;
          }
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
        legendLayout={legendLayout}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sourceMobile}
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

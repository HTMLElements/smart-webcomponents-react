import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sourceDesktop = useMemo(() => [
    { Browser: 'Chrome', Share: 68.95 },
    { Browser: 'Firefox', Share: 10.67 },
    { Browser: 'IE', Share: 6.42 },
    { Browser: 'Safari', Share: 5.35 },
    { Browser: 'Edge', Share: 4.2 },
    { Browser: 'Other', Share: 4.67 }
  ], []);

  const sourceMobile = useMemo(() => [
    { Browser: 'Chrome', Share: 54.84 },
    { Browser: 'Safari', Share: 19.16 },
    { Browser: 'UC Browser', Share: 11.33 },
    { Browser: 'Samsung Internet', Share: 5.71 },
    { Browser: 'Opera', Share: 4.53 },
    { Browser: 'Android', Share: 1.87 },
    { Browser: 'KaiOS', Share: 0.76 },
    { Browser: 'Firefox', Share: 0.38 },
    { Browser: 'QQ Browser', Share: 0.35 },
    { Browser: 'Other', Share: 1.07 }
  ], []);

  const caption = 'Mobile & Desktop browsers share';
  const description = '(source: gs.statcounter.com)';
  const showLegend = true;
  const showBorderLine = true;
  const legendLayout = {
    left: 520,
    top: 170,
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

  const colorScheme = 'scheme32';

  const seriesGroups = [
    {
      type: 'donut',
      offsetX: 250,
      dataSource: sourceMobile,
      xAxis: {
        formatSettings: {
          sufix: ' (mobile)'
        }
      },
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          labelRadius: 120,
          initialAngle: 10,
          radius: 130,
          innerRadius: 90,
          centerOffset: 0,
          formatSettings: {
            sufix: '%',
            decimalPlaces: 1
          }
        }
      ]
    },
    {
      type: 'donut',
      offsetX: 250,
      dataSource: sourceDesktop,
      colorScheme: 'scheme13',
      xAxis: {
        formatSettings: {
          sufix: ' (desktop)'
        }
      },
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          labelRadius: 120,
          initialAngle: 10,
          radius: 70,
          innerRadius: 30,
          centerOffset: 0,
          formatSettings: {
            sufix: '%',
            decimalPlaces: 1
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
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

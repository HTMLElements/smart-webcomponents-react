import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = useMemo(() => [
    { Country: 'Luxembourg', GDP: 104103, Debt: 23827 },
    { Country: 'Singapore', GDP: 57714, Debt: 59808 },
    { Country: 'Bulgaria', GDP: 8031, Debt: 2123 },
    { Country: 'Norway', GDP: 75504, Debt: 34910 },
    { Country: 'USA', GDP: 59531, Debt: 62034 },
    { Country: 'Maldives', GDP: 10535, Debt: 6489 },
    { Country: 'Mali', GDP: 824, Debt: 280 },
    { Country: 'Japan', GDP: 38428, Debt: 90345 }
  ], []);

  const caption = 'Economic comparison';
  const description = 'GDP and Debt in 2017';
  const showLegend = true;
  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

  const xAxis = {
    position: 'top',
    dataField: 'Country',
    gridLines: { visible: true }
  };

  const formatValue = (value) => {
    return value < 2000 ? value : `${Math.round(value / 1000)}K`;
  };

  const seriesGroups = [{
    type: 'column',
    columnsGapPercent: 50,
    valueAxis: {
      title: { text: 'GDP & Debt per Capita($)' }
    },
    series: [
      {
        dataField: 'GDP',
        displayText: 'GDP per Capita',
        labels: {
          visible: true,
          verticalAlignment: 'top',
          offset: { x: 0, y: -20 }
        },
        formatFunction: formatValue
      },
      {
        dataField: 'Debt',
        displayText: 'Debt per Capita',
        labels: {
          visible: true,
          verticalAlignment: 'top',
          offset: { x: 0, y: -20 }
        },
        formatFunction: formatValue
      }
    ]
  }];

  return (
    <div>
      <Chart
        id="chart"
        caption={caption}
        description={description}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sampleData}
        xAxis={xAxis}
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    {
      Period: 'January 2019',
      'Marvel Comics': 39.24,
      DC: 29.7,
      'Image Comics': 7.56,
      'Dark Horse Comics': 3.95,
      'IDW Publishing': 3.65,
      'BOOM! Studios': 2.32
    }
  ];

  const caption = 'January 2021 Comic Book Market Share';
  const description = '';
  const showLegend = true;
  const padding = { left: 15, top: 15, right: 15, bottom: 15 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme29';

  const xAxis = {
    dataField: 'Period',
    visible: false
  };

  const valueAxis = {
    visible: false
  };

  const seriesGroups = [
    {
      type: 'stackedcolumn',
      columnsGapPercent: 50,
      seriesGapPercent: 0,
      columnsTopWidthPercent: 0,
      columnsBottomWidthPercent: 100,
      columnsMinWidth: 600,
      formatSettings: { sufix: '%' },
      toolTipFormatFunction: (value, index, series) =>
        `${series.dataField}: ${value}%`,
      series: [
        { dataField: 'Marvel Comics', labels: { visible: true, offset: { x: 270 } } },
        { dataField: 'DC', labels: { visible: true, offset: { x: 150 } } },
        { dataField: 'Image Comics', labels: { visible: true, offset: { x: 85 } } },
        { dataField: 'Dark Horse Comics', labels: { visible: true, offset: { x: 60 } } },
        { dataField: 'IDW Publishing', labels: { visible: true, offset: { x: 45 } } },
        { dataField: 'BOOM! Studios', labels: { visible: true, offset: { x: 35 } } }
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
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sampleData}
        xAxis={xAxis}
        valueAxis={valueAxis}
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

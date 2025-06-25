import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25 },
    { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0 },
    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25 },
    { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45 },
    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25 },
    { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30 },
    { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 0 }
  ];

  const caption = 'Fitness & exercise weekly scorecard';
  const description = 'Time spent in vigorous exercise by activity';
  const showLegend = true;

  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme29';

  const xAxis = {
    dataField: 'Day',
    unitInterval: 1,
    axisSize: 'auto',
    tickMarks: {
      visible: true,
      unitInterval: 1,
      color: '#BCBCBC'
    },
    gridLines: {
      visible: true,
      unitInterval: 1,
      color: '#BCBCBC'
    }
  };

  const valueAxis = {
    unitInterval: 10,
    minValue: 0,
    maxValue: 120,
    title: {
      text: 'Time in minutes'
    },
    labels: {
      horizontalAlignment: 'right'
    },
    tickMarks: {
      color: '#BCBCBC'
    }
  };

  const seriesGroups = [
    {
      type: 'stackedcolumn',
      columnsGapPercent: 50,
      seriesGapPercent: 0,
      series: [
        { dataField: 'Running', displayText: 'Running' },
        { dataField: 'Swimming', displayText: 'Swimming' },
        { dataField: 'Cycling', displayText: 'Cycling' }
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
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const caption = 'Fitness & Exercise Weekly Scorecard';
  const description = 'Time spent in vigorous exercise by activity';
  const showLegend = true;

  const padding = {
    left: 10,
    top: 10,
    right: 15,
    bottom: 10
  };

  const titlePadding = {
    left: 90,
    top: 0,
    right: 0,
    bottom: 10
  };

  const dataSource = [
    { Day: 'Monday', Running: 30, Swimming: 10, Cycling: 25, Goal: 40 },
    { Day: 'Tuesday', Running: 25, Swimming: 15, Cycling: 10, Goal: 50 },
    { Day: 'Wednesday', Running: 30, Swimming: 10, Cycling: 25, Goal: 60 },
    { Day: 'Thursday', Running: 40, Swimming: 20, Cycling: 25, Goal: 40 },
    { Day: 'Friday', Running: 45, Swimming: 20, Cycling: 25, Goal: 50 },
    { Day: 'Saturday', Running: 30, Swimming: 20, Cycling: 30, Goal: 60 },
    { Day: 'Sunday', Running: 20, Swimming: 30, Cycling: 10, Goal: 90 }
  ];

  const colorScheme = 'scheme13';

  const xAxis = {
    dataField: 'Day',
    unitInterval: 2,
    tickMarks: { visible: true, unitInterval: 1 },
    gridLines: { visible: true, unitInterval: 1 },
    valuesOnTicks: false,
    padding: { bottom: 10 }
  };

  const valueAxis = {
    unitInterval: 10,
    minValue: 0,
    maxValue: 50,
    title: { text: 'Time in minutes<br><br>' },
    labels: { horizontalAlignment: 'right' }
  };

  const labelStyle = {
    visible: true,
    backgroundColor: '#FEFEFE',
    backgroundOpacity: 0.2,
    borderColor: '#7FC4EF',
    borderOpacity: 0.7,
    padding: { left: 5, right: 5, top: 0, bottom: 0 }
  };

  const seriesGroups = [
    {
      type: 'spline',
      series: [
        { dataField: 'Swimming', symbolType: 'square', labels: labelStyle },
        { dataField: 'Running', symbolType: 'square', labels: labelStyle }
      ]
    }
  ];

  return (
    <div className="App">
      <Chart
        id="chart"
        caption={caption}
        description={description}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={dataSource}
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

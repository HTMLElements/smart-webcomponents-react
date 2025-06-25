import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const App = () => {
  const chartRef = useRef(null);

  const sampleData = [
    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
  ];

  const caption = 'Fitness & exercise weekly scorecard';
  const description = 'Time spent in vigorous exercise';
  const showLegend = true;
  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme29';

  const xAxis = {
    dataField: 'Day',
    gridLines: {
      visible: true
    }
  };

  const seriesGroups = [
    {
      type: 'column',
      columnsGapPercent: 50,
      seriesGapPercent: 0,
      valueAxis: {
        unitInterval: 10,
        minValue: 0,
        maxValue: 100,
        description: 'Time in minutes',
        axisSize: 'auto'
      },
      series: [
        { dataField: 'Keith', displayText: 'Keith' },
        { dataField: 'Erica', displayText: 'Erica' },
        { dataField: 'George', displayText: 'George' }
      ]
    }
  ];

  const handleChange = (event) => {
    const chart = chartRef.current;
    if (chart?.seriesGroups && chart.seriesGroups[0]) {
      chart.seriesGroups[0].useGradientColors = event.detail.value;
      chart.update();
    }
  };

  return (
    <div>
      <Chart
        ref={chartRef}
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
      <br />
      <div id="options">
        <CheckBox id="gradients" onChange={handleChange}>
          Use gradients
        </CheckBox>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const eventText = useRef(null);

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
  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';
  const showToolTips = false;

  const xAxis = {
    dataField: 'Day',
    type: 'basic'
  };

  const seriesGroups = [
    {
      type: 'column',
      valueAxis: {
        minValue: 0,
        maxValue: 100,
        unitInterval: 10,
        title: { text: 'Time in minutes' }
      },
      series: [
        { dataField: 'Keith', displayText: 'Keith' },
        { dataField: 'Erica', displayText: 'Erica' },
        { dataField: 'George', displayText: 'George' }
      ]
    }
  ];

  const handleChartEvent = (event) => {
    const detail = event.detail;
    if (!detail || typeof detail !== 'object') return;

    let content = `<div><b>Last Event: </b>${event.type} <b>, Serie DataField: </b>${detail.serie.dataField}`;
    if (event.type === 'toggle') {
      content += `<b>, visible: </b>${detail.state}</div>`;
    } else {
      content += `<b>, Value: </b>${detail.elementValue}</div>`;
    }

    if (eventText.current) {
      eventText.current.innerHTML = content;
    }
  };

  return (
    <div>
      <Chart
        id="chart"
        caption={caption}
        description={description}
        padding={padding}
        titlePadding={titlePadding}
        dataSource={sampleData}
        xAxis={xAxis}
        colorScheme={colorScheme}
        showToolTips={showToolTips}
        seriesGroups={seriesGroups}
        onMouseOut={handleChartEvent}
        onMouseOver={handleChartEvent}
        onClick={handleChartEvent}
        onToggle={handleChartEvent}
      />
      <br />
      <div ref={eventText} id="eventText"></div>
    </div>
  );
};

export default App;

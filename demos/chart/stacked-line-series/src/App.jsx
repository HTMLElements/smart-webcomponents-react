import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = [
    { Date: '10/1/2017', Referral: '1391', SearchPaid: '1158', SearchNonPaid: '1201', uid: 0 },
    { Date: '10/2/2017', Referral: '1379', SearchPaid: '1439', SearchNonPaid: '1015', uid: 1 },
    { Date: '10/3/2017', Referral: '1026', SearchPaid: '1288', SearchNonPaid: '1282', uid: 2 },
    // ... (truncated for brevity)
    { Date: '10/31/2017', Referral: '1435', SearchPaid: '1181', SearchNonPaid: '1235', uid: 30 }
  ];

  const parsedData = sampleData.map(item => ({
    ...item,
    Date: new Date(item.Date),
    Referral: Number(item.Referral),
    SearchPaid: Number(item.SearchPaid),
    SearchNonPaid: Number(item.SearchNonPaid)
  }));

  const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });

  const caption = 'Web Site Traffic Analysis';
  const description = 'Daily unique visitors (stacked)';
  const showLegend = true;
  const padding = { left: 5, top: 5, right: 11, bottom: 5 };
  const titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: 'Date',
    type: 'date',
    baseUnit: 'day',
    valuesOnTicks: false,
    labels: {
      formatFunction: value => value.getDate()
    },
    toolTipFormatFunction: value =>
      `${value.getDate()}-${monthFormatter.format(value)}-${value.getFullYear()}`
  };

  const valueAxis = {
    unitInterval: 500,
    minValue: 0,
    maxValue: 4500,
    labels: {
      horizontalAlignment: 'right'
    },
    title: {
      text: 'Daily Visits<br>'
    }
  };

  const seriesGroups = [
    {
      type: 'stackedline',
      series: [
        { dataField: 'Referral', displayText: 'Referral Traffic' },
        { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
        { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
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
        dataSource={parsedData}
        xAxis={xAxis}
        valueAxis={valueAxis}
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
    </div>
  );
};

export default App;

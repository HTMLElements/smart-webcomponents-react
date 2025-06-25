import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useMemo } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const sampleData = useMemo(() => [
    {
      city: 'London',
      count: 24,
      monthlySales: 1128430,
      dailyTrend: [12, 8, 9, 3, 4, 5, 6, 2, 3, 4, 5, 6, 12, 4, 11, 4, 13, 9, 10, 12, 12, 8, 13, 7, 15, 9, 11, 12, 9, 8]
    },
    {
      city: 'New York',
      count: 35,
      monthlySales: 1434650,
      dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8]
    },
    {
      city: 'Berlin',
      count: 11,
      monthlySales: 498430,
      dailyTrend: [11, 5, 8, 20, 23, 17, 6, 18, 6, 18, 15, 8, 13, 12, 20, 14, 13, 3, 23, 4, 14, 21, 15, 7, 4, 9, 22, 16, 3, 1]
    },
    {
      city: 'Madrid',
      count: 4,
      monthlySales: 181760,
      dailyTrend: [2, 5, 15, 17, 20, 10, 15, 21, 6, 8, 14, 2, 4, 10, 6, 18, 11, 20, 12, 14, 14, 22, 21, 10, 20, 1, 18, 12, 5, 23]
    },
    {
      city: 'Paris',
      count: 9,
      monthlySales: 381760,
      dailyTrend: [15, 19, 15, 13, 17, 21, 3, 8, 8, 13, 8, 21, 19, 8, 8, 22, 3, 12, 18, 14, 15, 6, 15, 17, 14, 1, 14, 3, 8, 15]
    }
  ], []);

  const positiveColor = getComputedStyle(document.documentElement).getPropertyValue('--smart-primary').trim();
  const negativeColor = getComputedStyle(document.documentElement).getPropertyValue('--smart-error').trim();

  const getChartType = (index) => {
    if (index % 2 === 0) return 'column';
    if (index === 3) return 'area';
    return 'stepline';
  };

  const renderSparkline = (trend, index) => {
    return (
      <Chart
        caption=""
        description=""
        showLegend={false}
        animation="none"
        showBorderLine={false}
        showToolTips={false}
        backgroundColor="transparent"
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        titlePadding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dataSource={trend}
        xAxis={{
          visible: false,
          valuesOnTicks: false
        }}
        seriesGroups={[{
          type: getChartType(index),
          columnsGapPercent: 0,
          columnsMaxWidth: 2,
          valueAxis: {
            minValue: 0,
            visible: false
          },
          series: [{
            colorFunction: (value) => value < 10 ? negativeColor : positiveColor
          }]
        }]}
        style={{ width: '150px', height: '40px' }}
      />
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Store locations</th>
            <th>Monthly sales</th>
            <th>Daily sales trend</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((dataPoint, index) => (
            <tr key={index}>
              <td>{dataPoint.city}</td>
              <td>{dataPoint.count}</td>
              <td>{dataPoint.monthlySales.toLocaleString()}</td>
              <td>{renderSparkline(dataPoint.dailyTrend, index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

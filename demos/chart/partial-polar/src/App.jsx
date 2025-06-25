import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
  const chartRef = useRef(null);

  const sampleData = [
    { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
    { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
    { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
    { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
    { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
    { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
  ];

  const chartConfig = {
    caption: 'Sales volume and revenue by city',
    description: '(revenue in thousands)',
    animation: 'none',
    showLegend: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
    colorScheme: 'scheme01',
    dataSource: sampleData,
    xAxis: {
      dataField: 'City',
      valuesOnTicks: true,
      labels: { autoRotate: true }
    },
    valueAxis: {
      labels: {
        formatSettings: { decimalPlaces: 0 },
        autoRotate: true
      }
    },
    seriesGroups: [
      {
        polar: true,
        endAngle: 270,
        radius: 120,
        type: 'line',
        series: [
          {
            dataField: 'SalesCountJan',
            displayText: 'Sales count',
            opacity: 0.7,
            lineWidth: 1,
            radius: 2,
            symbolType: 'circle'
          },
          {
            dataField: 'SalesRevenueJan',
            displayText: 'Revenue',
            opacity: 0.7,
            lineWidth: 1,
            radius: 2,
            symbolType: 'square'
          }
        ]
      }
    ]
  };

  const updateChart = useCallback(() => {
    const chart = chartRef.current;
    chart.update();
  }, []);

  const handleSliderStartAngleChange = useCallback((event) => {
    const value = parseFloat(event.detail.value);
    chartRef.current.seriesGroups[0].startAngle = value;
    updateChart();
  }, [updateChart]);

  const handleSliderEndAngleChange = useCallback((event) => {
    const value = parseFloat(event.detail.value);
    chartRef.current.seriesGroups[0].endAngle = value;
    updateChart();
  }, [updateChart]);

  const handleSliderRotateChange = useCallback((event) => {
    const chart = chartRef.current;
    const value = parseFloat(event.detail.value);
    if (!chart.seriesGroups || !chart.seriesGroups[0]) return;

    let start = chart.seriesGroups[0].startAngle || 0;
    let end = chart.seriesGroups[0].endAngle || 360;
    const diff = end - start;

    chart.seriesGroups[0].startAngle = value;
    chart.seriesGroups[0].endAngle = value + diff;
    updateChart();
  }, [updateChart]);

  const handleSliderRadiusChange = useCallback((event) => {
    const value = parseFloat(event.detail.value);
    chartRef.current.seriesGroups[0].radius = value;
    updateChart();
  }, [updateChart]);

  const handleCheckBoxAutoRotateLabelsChange = useCallback((event) => {
    const value = event.detail.value;
    const chart = chartRef.current;
    if (chart.xAxis?.labels) chart.xAxis.labels.autoRotate = value;
    if (chart.valueAxis?.labels) chart.valueAxis.labels.autoRotate = value;
  }, []);

  const handleCheckBoxTicksBetweenChange = useCallback((event) => {
    const chart = chartRef.current;
    if (chart.xAxis) chart.xAxis.valuesOnTicks = !event.detail.value;
  }, []);

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        {...chartConfig}
      />
      <div className="options">
        <table>
          <tbody>
            <tr>
              <td>
                <p>Move the slider to change start angle:</p>
                <Slider
                  min="0" max="360" value="0" coerce
                  labelsVisibility="endPoints" ticksVisibility="major"
                  showUnit unit="°"
                  onChange={handleSliderStartAngleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Move the slider to change end angle:</p>
                <Slider
                  min="0" max="360" value="270" coerce
                  labelsVisibility="endPoints" ticksVisibility="major"
                  showUnit unit="°"
                  onChange={handleSliderEndAngleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Move the slider to rotate:</p>
                <Slider
                  min="0" max="360" value="0" coerce
                  labelsVisibility="endPoints" ticksVisibility="major"
                  onChange={handleSliderRotateChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Move the slider to change the radius:</p>
                <Slider
                  min="80" max="140" value="120" coerce
                  labelsVisibility="endPoints" ticksVisibility="major"
                  onChange={handleSliderRadiusChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox
                  id="checkBoxAutoRotateLabels"
                  checked
                  onChange={handleCheckBoxAutoRotateLabelsChange}
                >
                  Auto-rotate labels
                </CheckBox>
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox
                  id="checkBoxTicksBetween"
                  onChange={handleCheckBoxTicksBetweenChange}
                >
                  Ticks between values
                </CheckBox>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    { type: 'Organic Search', month1: 1725090, month2: 3136190 },
    { type: 'Paid Search', month1: 925090, month2: 2136190 },
    { type: 'Direct', month1: 425090, month2: 936190 },
    { type: 'Referral', month1: 1250900, month2: 2536190 },
    { type: 'Twitter', month1: 350900, month2: 681900 },
    { type: 'Facebook', month1: 381900, month2: 831500 },
  ];

  const handleSliderStartAngleChange = (event) => {
    const chart = chartRef.current;
    const value = parseFloat(event.detail.value);
    if (chart?.seriesGroups?.[0]) {
      chart.seriesGroups[0].startAngle = value;
      chart.seriesGroups[0].endAngle = value + 360;
      chart.update();
    }
  };

  const handleSliderRadiusChange = (event) => {
    const chart = chartRef.current;
    const value = parseFloat(event.detail.value);
    if (chart?.seriesGroups?.[0]) {
      chart.seriesGroups[0].radius = value;
      chart.update();
    }
  };

  const handleAutoRotateLabels = (event) => {
    const chart = chartRef.current;
    if (!chart) return;
    if (chart.xAxis?.labels) {
      chart.xAxis.labels.autoRotate = event.detail.value;
    }
    if (chart.valueAxis?.labels) {
      chart.valueAxis.labels.autoRotate = event.detail.value;
    }
  };

  const handleTicksBetween = (event) => {
    const chart = chartRef.current;
    if (chart?.xAxis) {
      chart.xAxis.valuesOnTicks = !event.detail.value;
    }
  };

  const handleColorSchemeChange = (event) => {
    chartRef.current.colorScheme = event.target.selectedValues[0];
  };

  const handleSeriesTypeChange = (event) => {
    const chart = chartRef.current;
    if (chart?.seriesGroups?.[0]) {
      chart.seriesGroups[0].type = event.target.selectedValues[0];
      chart.update();
    }
  };

  const chartProps = {
    caption: 'Website audience acquisition by source',
    description: 'Month over month comparison',
    animation: 'none',
    showLegend: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
    dataSource: sampleData,
    colorScheme: 'scheme05',
    xAxis: {
      dataField: 'type',
      displayText: 'Traffic source',
      valuesOnTicks: true,
      labels: {
        autoRotate: false
      }
    },
    valueAxis: {
      unitInterval: 1000000,
      labels: {
        formatSettings: { decimalPlaces: 0 },
        formatFunction: (value) => `${Math.round(value / 1000)} K`
      }
    },
    seriesGroups: [{
      spider: true,
      startAngle: 0,
      endAngle: 360,
      radius: 120,
      type: 'spline',
      series: [
        {
          dataField: 'month1',
          displayText: 'January 2018',
          opacity: 0.7,
          radius: 2,
          lineWidth: 2,
          symbolType: 'circle'
        },
        {
          dataField: 'month2',
          displayText: 'February 2018',
          opacity: 0.7,
          radius: 2,
          lineWidth: 2,
          symbolType: 'square'
        }
      ]
    }]
  };

  return (
    <div>
      <Chart ref={chartRef} id="chart" {...chartProps} />
      <div className="options">
        <table>
          <tbody>
            <tr>
              <td>
                <p>Move the slider to rotate:</p>
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
                <p>Select the series type:</p>
                <DropDownList
                  dataSource={["splinearea", "spline", "column", "scatter", "stackedcolumn", "stackedsplinearea", "stackedspline"]}
                  selectionMode="one"
                  selectedIndexes={[1]}
                  onChange={handleSeriesTypeChange}
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
                <p>Select color scheme:</p>
                <DropDownList
                  dataSource={["scheme01", "scheme02", "scheme03", "scheme04", "scheme05", "scheme06", "scheme07", "scheme08"]}
                  selectionMode="one"
                  selectedIndexes={[4]}
                  onChange={handleColorSchemeChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox onChange={handleAutoRotateLabels}>
                  Auto-rotate labels
                </CheckBox>
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox onChange={handleTicksBetween}>
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

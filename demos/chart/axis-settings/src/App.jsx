import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
  const chartRef = useRef();

  const data = [
    { year: 2004, price: 0.1437 },
    { year: 2005, price: 0.1470 },
    { year: 2006, price: 0.1510 },
    { year: 2007, price: 0.1605 },
    { year: 2008, price: 0.1647 },
    { year: 2009, price: 0.1736 },
    { year: 2010, price: 0.1766 },
    { year: 2011, price: 0.1902 },
    { year: 2012, price: 0.1978 },
    { year: 2017, price: 0.2113 },
    { year: 2018, price: 0.2178 }
  ];

  const valueAxis = {
    position: 'right',
    padding: { left: 0, right: 0 },
    title: {
      text: '<br><br>Price EUR / kWh'
    },
    labels: {
      visible: true,
      angle: 0,
      formatSettings: {
        decimalPlaces: 4,
        sufix: ' €'
      }
    },
    tickMarks: {
      visible: true,
      color: '#CDCDCD',
      size: 5
    },
    gridLines: {
      visible: true,
      color: '#CDCDCD'
    },
    alternatingBackgroundColor: '#EFEFEF',
    alternatingBackgroundColor2: '#CECECE',
    alternatingBackgroundOpacity: 0.2
  };

  const xAxis = {
    padding: { top: 0, bottom: 0 },
    labels: { angle: 0 },
    dataField: 'year',
    displayText: 'Year',
    valuesOnTicks: false,
    gridLines: { color: '#CDCDCD' },
    tickMarks: { color: '#CDCDCD' }
  };

  const seriesGroups = [
    {
      type: 'stepline',
      series: [
        {
          formatSettings: { decimalPlaces: 4 },
          dataField: 'price',
          displayText: 'Price per kWh',
          labels: { visible: true },
          symbolType: 'circle'
        }
      ]
    }
  ];

  // Slider Handlers
  const handleSliderChange = useCallback((field, axis, subfield) => (event) => {
    const chart = chartRef.current;
    if (chart[axis] && chart[axis][field]) {
      chart[axis][field][subfield] = parseFloat(event.detail.value);
      chart.refresh();
    }
  }, []);

  const handleLabelAngleChange = useCallback((axis) => (event) => {
    const chart = chartRef.current;
    if (chart[axis] && chart[axis].labels) {
      chart[axis].labels.angle = parseFloat(event.detail.value);
      chart.refresh();
    }
  }, []);

  // Radio Button Handlers
  const handleAxisPositionChange = useCallback((axis, position) => (event) => {
    if (event.detail.value) {
      const chart = chartRef.current;
      if (chart[axis]) {
        chart[axis].position = position;
        chart.refresh();
      }
    }
  }, []);

  // Checkbox Handlers
  const handleAxisFlipChange = useCallback((axis) => (event) => {
    const chart = chartRef.current;
    if (chart[axis]) {
      chart[axis].flip = event.detail.value;
      chart.refresh();
    }
  }, []);

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        animation="none"
        renderEngine="HTML5"
        caption="Electricity prices in Europe between 2004 and 2018"
        description="dataSource: Eurostat"
        showLegend={true}
        padding={{ left: 5, top: 5, right: 15, bottom: 5 }}
        titlePadding={{ left: 90, top: 0, right: 0, bottom: 10 }}
        dataSource={data}
        xAxis={xAxis}
        valueAxis={valueAxis}
        colorScheme="scheme32"
        seriesGroups={seriesGroups}
      />
      <div className="options">
        <table>
          <tbody>
            <tr>
              <td><b>Value axis properties:</b></td>
            </tr>
            <tr>
              <td>
                Left padding:
                <Slider min="0" max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
                  onChange={handleSliderChange('padding', 'valueAxis', 'left')} />
              </td>
            </tr>
            <tr>
              <td>
                Right padding:
                <Slider min="0" max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
                  onChange={handleSliderChange('padding', 'valueAxis', 'right')} />
              </td>
            </tr>
            <tr>
              <td>
                Labels angle:
                <Slider min="0" max="360" value="0" coerce labelsVisibility="none" ticksVisibility="major"
                  onChange={handleLabelAngleChange('valueAxis')} />
              </td>
            </tr>
            <tr>
              <td><b>xAxis properties:</b></td>
            </tr>
            <tr>
              <td>
                Top padding:
                <Slider min="0" max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
                  onChange={handleSliderChange('padding', 'xAxis', 'top')} />
              </td>
            </tr>
            <tr>
              <td>
                Bottom padding:
                <Slider min="0" max="50" value="0" coerce labelsVisibility="none" ticksVisibility="major"
                  onChange={handleSliderChange('padding', 'xAxis', 'bottom')} />
              </td>
            </tr>
            <tr>
              <td>
                Labels angle:
                <Slider min="0" max="360" value="0" coerce labelsVisibility="none" ticksVisibility="major"
                  onChange={handleLabelAngleChange('xAxis')} />
              </td>
            </tr>
            <tr>
              <td>Position:</td>
            </tr>
            <tr>
              <td>
                <RadioButton onChange={handleAxisPositionChange('valueAxis', 'left')}>Left</RadioButton><br />
                <RadioButton checked onChange={handleAxisPositionChange('valueAxis', 'right')}>Right</RadioButton>
              </td>
            </tr>
            <tr>
              <td>Position:</td>
            </tr>
            <tr>
              <td>
                <RadioButton onChange={handleAxisPositionChange('xAxis', 'top')}>Top</RadioButton><br />
                <RadioButton checked onChange={handleAxisPositionChange('xAxis', 'bottom')}>Bottom</RadioButton>
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox onChange={handleAxisFlipChange('valueAxis')}>Flip valueAxis positions</CheckBox>
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox onChange={handleAxisFlipChange('xAxis')}>Flip xAxis positions</CheckBox>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

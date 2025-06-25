import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
  const chartRef = useRef();

  const [sampleData] = useState([
    { Year: 1950, HPI: 100, BuildCost: 80 },
    { Year: 1960, HPI: 110, BuildCost: 90 },
    { Year: 1970, HPI: 130, BuildCost: 100 },
    { Year: 1980, HPI: 160, BuildCost: 120 },
    { Year: 1990, HPI: 180, BuildCost: 140 },
    { Year: 2000, HPI: 190, BuildCost: 160 },
    { Year: 2010, HPI: 170, BuildCost: 150 }
  ]);

  const recessions = [
    { from: 1969.91, to: 1970.83 },
    { from: 1973.83, to: 1975.25 },
    { from: 1980, to: 1980.58 },
    { from: 1981.58, to: 1982.83 },
    { from: 1990.58, to: 1991.25 },
    { from: 2001.25, to: 2001.83 },
    { from: 2007.91, to: 2009.5 }
  ];

  const [bands, setBands] = useState([]);
  const [xAxis, setXAxis] = useState({
    dataField: 'Year',
    unitInterval: 10,
    maxValue: 2010,
    valuesOnTicks: true,
    labels: { autoRotate: true },
    bands: []
  });

  useEffect(() => {
    const calculatedBands = recessions.map(r => ({
      minValue: r.from,
      maxValue: r.to,
      fillColor: 'red',
      opacity: 0.2
    }));
    setBands(calculatedBands);
    setXAxis(prev => ({ ...prev, bands: calculatedBands }));
  }, []);

  const seriesGroups = [{
    polar: true,
    radius: 160,
    type: 'spline',
    useGradientColors: true,
    enableSeriesToggle: false,
    valueAxis: {
      labels: {
        formatSettings: { decimalPlaces: 0 },
        autoRotate: true
      },
      bands: [
        {
          minValue: 50,
          maxValue: 130,
          color: '#00FF00',
          opacity: 0.2,
          dashStyle: '2,2',
          lineWidth: 1
        },
        {
          minValue: 131,
          maxValue: 160,
          color: '#FCD537',
          opacity: 0.2,
          dashStyle: '2,2',
          lineWidth: 1
        },
        {
          minValue: 161,
          maxValue: 200,
          color: '#FF0000',
          opacity: 0.2,
          dashStyle: '2,2',
          lineWidth: 1
        }
      ]
    },
    series: [
      {
        dataField: 'HPI',
        displayText: 'Real Home Price Index',
        opacity: 0.9,
        lineWidth: 3
      },
      {
        dataField: 'BuildCost',
        displayText: 'Building Cost Index',
        opacity: 0.9,
        lineWidth: 3
      }
    ]
  }];

  const handleSliderStartAngleChange = (event) => {
    const value = parseFloat(event.detail.value);
    const chart = chartRef.current;
    chart.seriesGroups[0].startAngle = value;
    chart.seriesGroups[0].endAngle = value + 360;
    chart.update();
  };

  const handleSliderRadiusChange = (event) => {
    const value = parseFloat(event.detail.value);
    chartRef.current.seriesGroups[0].radius = value;
    chartRef.current.update();
  };

  const handleDropDownColorsChange = (event) => {
    chartRef.current.colorScheme = event.target.selectedValues[0];
  };

  const handleDropDownSeriesChange = (event) => {
    chartRef.current.seriesGroups[0].type = event.target.selectedValues[0];
    chartRef.current.update();
  };

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        caption="U.S. Real Home Price vs Building Cost Indeces (1950-2010)"
        description="Source: http://www.econ.yale.edu/~shiller/data.htm"
        showLegend={true}
        padding={{ left: 5, top: 5, right: 5, bottom: 5 }}
        titlePadding={{ left: 0, top: 0, right: 0, bottom: 5 }}
        dataSource={sampleData}
        xAxis={xAxis}
        colorScheme="scheme05"
        seriesGroups={seriesGroups}
      />
      <div className="options">
        <table>
          <tbody>
            <tr>
              <td>
                <p>Move the slider to rotate:</p>
                <Slider
                  min="0"
                  max="360"
                  value="0"
                  coerce
                  labelsVisibility="endPoints"
                  ticksVisibility="major"
                  showUnit
                  unit="°"
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
                  onChange={handleDropDownSeriesChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Move the slider to change the radius:</p>
                <Slider
                  min="80"
                  max="140"
                  value="120"
                  coerce
                  labelsVisibility="endPoints"
                  ticksVisibility="major"
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
                  onChange={handleDropDownColorsChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const chartRef = useRef(null);

  const averages = [
    { Age: 13, Male: 156.2, Female: 156.7 },
    { Age: 14, Male: 163.8, Female: 158.7 },
    { Age: 15, Male: 170.1, Female: 159.7 },
    { Age: 16, Male: 173.4, Female: 162.5 },
    { Age: 17, Male: 175.2, Female: 162.5 },
    { Age: 18, Male: 175.7, Female: 163 },
    { Age: 19, Male: 176.5, Female: 163 },
    { Age: 20, Male: 177, Female: 163.3 }
  ];

  const [maleData, setMaleData] = useState([]);
  const [femaleData, setFemaleData] = useState([]);

  const toolTipFormatFunction = (value, _, series, __, xAxisValue) => {
    const months = Math.floor((xAxisValue % 1) * 12);
    return `<strong>Gender:</strong> ${series.displayText}<br/>
<strong>Height:</strong> ${value} cm<br/>
<strong>Age:</strong> ${parseInt(xAxisValue)} years${months > 0 ? ` and ${months} months` : ''}`;
  };

  const generateData = () => {
    const males = [];
    const females = [];

    for (let i = 0; i < 200; i++) {
      const gender = i % 2 === 0 ? 'Male' : 'Female';
      const age = Math.min(Math.random() * 7 + 13, 20);
      const avg = averages[Math.round(age) - 13][gender];
      const height = Math.random() * 25 + avg - 12.5;

      const entry = { Age: age, Height: parseFloat(height.toFixed(1)) };
      if (gender === 'Male') males.push(entry);
      else females.push(entry);
    }

    setMaleData(males);
    setFemaleData(females);
  };

  useEffect(() => {
    generateData();
  }, []);

  const animation = 'none';
  const clip = false;
  const caption = 'Height of 100 Random Adolescents';
  const description = 'between ages 13 and 20';
  const showLegend = true;
  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const colorScheme = 'scheme32';

  const xAxis = {
    dataField: 'Age',
    valuesOnTicks: false,
    type: 'linear',
    unitInterval: 1,
    minValue: 13,
    maxValue: 20
  };

  const valueAxis = {
    title: { text: 'Height (cm)' },
    minValue: 140,
    maxValue: 185
  };

  const [seriesGroups, setSeriesGroups] = useState([
    {
      type: 'scatter',
      dataSource: maleData,
      series: [{
        dataField: 'Height',
        symbolSize: 20,
        symbolType: 'circle',
        displayText: 'Boys',
        toolTipFormatFunction
      }]
    },
    {
      type: 'scatter',
      dataSource: femaleData,
      series: [{
        dataField: 'Height',
        symbolSize: 20,
        symbolType: 'diamond',
        displayText: 'Girls',
        toolTipFormatFunction
      }]
    }
  ]);

  useEffect(() => {
    setSeriesGroups(prev => [
      { ...prev[0], dataSource: maleData },
      { ...prev[1], dataSource: femaleData }
    ]);
  }, [maleData, femaleData]);

  const updateSymbol = (seriesIndex, symbolType) => {
    const chart = chartRef.current;
    if (chart && chart.seriesGroups?.[seriesIndex]?.series?.[0]) {
      chart.seriesGroups[seriesIndex].series[0].symbolType = symbolType;
      chart.refresh();
    }
  };

  const symbolOptions = ["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"];

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        animation={animation}
        clip={clip}
        caption={caption}
        description={description}
        showLegend={showLegend}
        padding={padding}
        titlePadding={titlePadding}
        colorScheme={colorScheme}
        xAxis={xAxis}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
      />

      <div className="options">
        <table>
          <tbody>
            <tr>
              <td>
                <p>Select Serie 1 Symbol:</p>
                <DropDownList
                  id="dropDownSerie1Symbol"
                  dataSource={symbolOptions}
                  selectionMode="one"
                  selectedIndexes={[0]}
                  onChange={(e) => updateSymbol(0, e.detail.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Select Serie 2 Symbol:</p>
                <DropDownList
                  id="dropDownSerie2Symbol"
                  dataSource={symbolOptions}
                  selectionMode="one"
                  selectedIndexes={[1]}
                  onChange={(e) => updateSymbol(1, e.detail.value)}
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

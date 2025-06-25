import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { Chart } from 'smart-webcomponents-react/chart';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

const App = () => {
  const chartRef = useRef();
  const seriesRef = useRef();
  const itemRef = useRef();

  const sampleData = [
    { Year: 2001, Austria: 120.61, Belgium: 116.12, Croatia: 45.11 },
    { Year: 2002, Austria: 118.96, Belgium: 109.37, Croatia: 53.19 },
    { Year: 2003, Austria: 118.06, Belgium: 105.45, Croatia: 54.39 },
    { Year: 2004, Austria: 118.56, Belgium: 99.62, Croatia: 56.83 },
    { Year: 2005, Austria: 125.98, Belgium: 100.75, Croatia: 62.85 },
    { Year: 2006, Austria: 125.66, Belgium: 106, Croatia: 68.59 },
    { Year: 2007, Austria: 122.7, Belgium: 108.79, Croatia: 70.76 },
    { Year: 2008, Austria: 126.3, Belgium: 110.6, Croatia: 73.9 },
    { Year: 2009, Austria: 135.09, Belgium: 116.05, Croatia: 77.38 },
    { Year: 2010, Austria: 135.06, Belgium: 113.68, Croatia: 90.49 },
    { Year: 2011, Austria: 132.09, Belgium: 114, Croatia: 88.71 },
    { Year: 2012, Austria: 135.25, Belgium: 113.23, Croatia: 88.53 },
    { Year: 2013, Austria: 130.43, Belgium: 112.06, Croatia: 89.57 },
    { Year: 2014, Austria: 125.43, Belgium: 154.55, Croatia: 89.46 },
    { Year: 2015, Austria: 123.44, Belgium: 148.03, Croatia: 87.48 },
    { Year: 2016, Austria: 129.89, Belgium: 153.69, Croatia: 84.9 },
    { Year: 2017, Austria: 126.73, Belgium: 135.66, Croatia: 77.02 }
  ];

  const chartSettings = {
    clip: false,
    caption: 'Domestic credit provided by banking sector',
    description: '(% of GDP)',
    showLegend: true,
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
    dataSource: sampleData,
    colorScheme: 'scheme29',
    xAxis: {
      dataField: 'Year',
      valuesOnTicks: true
    },
    valueAxis: {
      visible: true,
      title: { text: '% of GDP' },
      labels: {
        formatSettings: { sufix: '%' }
      }
    },
    seriesGroups: [
      {
        type: 'spline',
        series: [
          { dataField: 'Austria', opacity: 0.8, symbolType: 'circle', symbolSize: 10 },
          { dataField: 'Belgium', opacity: 0.7, symbolType: 'square', symbolSize: 10 },
          { dataField: 'Croatia', opacity: 0.6, symbolType: 'diamond', symbolSize: 10 }
        ]
      }
    ]
  };

  const getSeries = () => parseFloat(seriesRef.current.value);
  const getItem = () => parseFloat(itemRef.current.value);

  const handleGetItemsCount = () => {
    const series = getSeries();
    chartRef.current.getItemsCount(0, series).then(count => {
      alert(`Series ${series} has ${count} items.`);
    });
  };

  const handleGetItemCoord = () => {
    const series = getSeries();
    const item = getItem();
    chartRef.current.getItemCoord(0, series, item).then(coords => {
      alert(`Item ${item} from series ${series} is at (${coords.x}, ${coords.y}).`);
    });
  };

  const handleShowSerie = () => chartRef.current.showSerie(0, getSeries());
  const handleHideSerie = () => chartRef.current.hideSerie(0, getSeries());
  const handleShowToolTip = () => chartRef.current.showToolTip(0, getSeries(), getItem());
  const handleHideToolTip = () => chartRef.current.hideToolTip();

  const handleGetXAxisRect = () => {
    chartRef.current.getXAxisRect(0).then(rect => {
      alert(`xAxis rect starts at (${rect.x}, ${rect.y}), width: ${rect.width}px, height: ${rect.height}px.`);
    });
  };

  const handleGetXAxisLabels = () => {
    chartRef.current.getXAxisLabels(0).then(labels => {
      alert(`xAxis labels: ${labels.map(label => label.value).join(', ')}`);
    });
  };

  const handleGetValueAxisRect = () => {
    chartRef.current.getValueAxisRect(0).then(rect => {
      alert(`valueAxis rect starts at (${rect.x}, ${rect.y}), width: ${rect.width}px, height: ${rect.height}px.`);
    });
  };

  const handleGetValueAxisLabels = () => {
    chartRef.current.getValueAxisLabels(0).then(labels => {
      alert(`valueAxis labels: ${labels.map(label => label.value).join(', ')}`);
    });
  };

  return (
    <div>
      <Chart ref={chartRef} id="chart" {...chartSettings} />

      <div className="options">
        <span>Series: </span>
        <NumericTextBox ref={seriesRef} id="seriesNo" min="0" max="2" value="0" spin-buttons />
        <br /><br />
        <span>Item: </span>
        <NumericTextBox ref={itemRef} id="itemNo" min="0" max="16" value="0" spin-buttons />
        <br /><br />
        <Button onClick={handleGetItemsCount}>getItemsCount</Button>
        <Button onClick={handleGetItemCoord}>getItemCoord</Button>
        <br /><br />
        <Button onClick={handleShowSerie}>showSerie</Button>
        <Button onClick={handleHideSerie}>hideSerie</Button>
        <br /><br />
        <Button onClick={handleShowToolTip}>showToolTip</Button>
        <Button onClick={handleHideToolTip}>hideToolTip</Button>
        <br /><br />
        <Button onClick={handleGetXAxisRect}>getXAxisRect</Button>
        <Button onClick={handleGetXAxisLabels}>getXAxisLabels</Button>
        <br /><br />
        <Button onClick={handleGetValueAxisRect}>getValueAxisRect</Button>
        <Button onClick={handleGetValueAxisLabels}>getValueAxisLabels</Button>
      </div>
    </div>
  );
};

export default App;

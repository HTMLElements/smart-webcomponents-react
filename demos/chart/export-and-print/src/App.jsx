import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const App = () => {
  const chartRef = useRef(null);
  const checkboxRef = useRef(null);

  const source = [
    { Country: "Luxembourg", GDP: "81278.63", DebtPercent: "16.2", Debt: "13167.13806" },
    { Country: "Singapore", GDP: "57596.47", DebtPercent: "102.4", Debt: "58978.78528" },
    { Country: "Norway", GDP: "53285.21", DebtPercent: "47.7", Debt: "25417.04517" },
    { Country: "USA", GDP: "45759.46", DebtPercent: "58.9", Debt: "26952.32194" },
    { Country: "Austria", GDP: "39269.33", DebtPercent: "70.4", Debt: "27645.60832" },
    { Country: "Germany", GDP: "34065.12", DebtPercent: "78.8", Debt: "26843.31456" },
    { Country: "Canada", GDP: "38065.13", DebtPercent: "34", Debt: "12942.1442" }
  ];

  const caption = 'Economic comparison';
  const description = 'GDP and Debt in 2010';
  const showLegend = true;
  const padding = { left: 5, top: 5, right: 5, bottom: 5 };
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
  const xAxis = { dataField: 'Country' };
  const colorScheme = 'scheme32';

  const seriesGroups = [
    {
      colorScheme: 'scheme03',
      type: 'column',
      columnsGapPercent: 50,
      valueAxis: {
        unitInterval: 5000,
        title: { text: 'GDP & Debt per Capita($)<br>' }
      },
      series: [
        { dataField: 'GDP', displayText: 'GDP per Capita' },
        { dataField: 'Debt', displayText: 'Debt per Capita' }
      ]
    },
    {
      type: 'line',
      valueAxis: {
        unitInterval: 10,
        title: { text: 'Debt (% of GDP)<br>' },
        position: 'right',
        gridLines: { visible: false }
      },
      series: [
        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
      ]
    }
  ];

  const handleSaveAsJPEG = () => {
    chartRef.current?.saveAsJPEG('myChart.jpeg');
  };

  const handleSaveAsPNG = () => {
    chartRef.current?.saveAsPNG('myChart.png');
  };

  const handleSaveAsPDF = () => {
    const orientation = checkboxRef.current?.checked ? 'landscape' : 'portrait';
    chartRef.current?.saveAsPDF('myChart.pdf', orientation);
  };

  const handlePrint = () => {
    chartRef.current?.print();
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
        dataSource={source}
        xAxis={xAxis}
        colorScheme={colorScheme}
        seriesGroups={seriesGroups}
      />
      <br />
      <Button id="saveAsJPEG" onClick={handleSaveAsJPEG}>Save As JPEG</Button>
      <Button id="saveAsPNG" onClick={handleSaveAsPNG}>Save As PNG</Button>
      <Button id="saveAsPDF" onClick={handleSaveAsPDF}>Save As PDF</Button>
      <CheckBox ref={checkboxRef} id="landscape">(landscape)</CheckBox>
      <br /><br />
      <Button id="print" className="success outlined" onClick={handlePrint}>Print</Button>
    </div>
  );
};

export default App;

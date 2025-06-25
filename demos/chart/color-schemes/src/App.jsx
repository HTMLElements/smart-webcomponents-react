import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const chartRef = useRef(null);
  const chart2Ref = useRef(null);
  const dropdownRef = useRef(null);
  const checkboxRef = useRef(null);

  const [defaultScheme, setDefaultScheme] = useState('scheme01');

  const sampleData = [
    { Day: 'Monday', Keith: 30, Erica: 15, George: 25, Monica: 20, Maria: 15, Average: 20 },
    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30, Monica: 25, Maria: 20, Average: 38 },
    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25, Monica: 10, Maria: 20, Average: 33 },
    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45, Monica: 30, Maria: 30, Average: 31 },
    { Day: 'Friday', Keith: 20, Erica: 20, George: 25, Monica: 45, Maria: 30, Average: 52 },
    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30, Monica: 60, Maria: 40, Average: 75 },
    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90, Monica: 70, Maria: 50, Average: 73 }
  ];

  const pieData = [
    { Name: 'Keith', Exercise: 60 },
    { Name: 'Erica', Exercise: 45 },
    { Name: 'George', Exercise: 90 },
    { Name: 'Monica', Exercise: 70 },
    { Name: 'Maria', Exercise: 50 }
  ];

  const customColors = ['#1A6642', '#46C26F', '#F9B956', '#F38443', '#DE513D'];

  const handleColorSchemesChange = (event) => {
    const value = event.detail.value;
    setDefaultScheme(value);

    if (!checkboxRef.current.checked) {
      chartRef.current.colorScheme = value;
      chart2Ref.current.colorScheme = value;
    }
  };

  const handleUseCustomSchemeChange = (event) => {
    const useCustom = event.detail.value;
    const scheme = useCustom ? 'custom' : defaultScheme;
    chartRef.current.colorScheme = scheme;
    chart2Ref.current.colorScheme = scheme;
  };

  const handleBtnLightChange = (event) => {
    if (event.detail.value) {
      chartRef.current.theme = 'light';
      chart2Ref.current.theme = 'light';
      document.body.style.backgroundColor = '';
    }
  };

  const handleBtnDarkChange = (event) => {
    if (event.detail.value) {
      chartRef.current.theme = 'dark';
      chart2Ref.current.theme = 'dark';
      document.body.style.backgroundColor = '#2E2E2E';
    }
  };

  useEffect(() => {
    // Initialize charts and color schemes
    chartRef.current.addColorScheme('custom', customColors);
    chart2Ref.current.addColorScheme('custom', customColors);

    customColors.forEach((color, index) => {
      const el = document.getElementById(`customScheme${index + 1}`);
      if (el) el.style.backgroundColor = color;
    });
  }, []);

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart1"
        caption="Fitness & exercise weekly scorecard"
        description="Time spent in vigorous exercise"
        borderLineWidth={0}
        showLegend={true}
        padding={{ left: 5, top: 5, right: 5, bottom: 5 }}
        titlePadding={{ left: 90, top: 0, right: 0, bottom: 10 }}
        dataSource={sampleData}
        colorScheme={defaultScheme}
        xAxis={{
          dataField: 'Day',
          gridLines: { visible: true }
        }}
        valueAxis={{
          unitInterval: 10,
          minValue: 0,
          maxValue: 100,
          description: 'Time in minutes',
          axisSize: 'auto'
        }}
        seriesGroups={[
          {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            series: [
              { dataField: 'Keith', displayText: 'Keith' },
              { dataField: 'Erica', displayText: 'Erica' },
              { dataField: 'George', displayText: 'George' },
              { dataField: 'Monica', displayText: 'Monica' },
              { dataField: 'Maria', displayText: 'Maria' }
            ]
          },
          {
            type: 'spline',
            series: [{ dataField: 'Average', displayText: 'Class average' }]
          }
        ]}
      />

      <Chart
        ref={chart2Ref}
        id="chart2"
        caption="Sunday fitness & exercise"
        description=""
        borderLineWidth={0}
        showLegend={true}
        showBorderLine={true}
        legendPosition={{ left: 520, top: 140, width: 100, height: 100 }}
        padding={{ left: 5, top: 5, right: 5, bottom: 5 }}
        titlePadding={{ left: 0, top: 0, right: 0, bottom: 10 }}
        dataSource={pieData}
        colorScheme={defaultScheme}
        seriesGroups={[
          {
            type: 'pie',
            showLabels: true,
            series: [
              {
                dataField: 'Exercise',
                displayText: 'Name',
                labelRadius: 70,
                initialAngle: 15,
                radius: 90,
                centerOffset: 0,
                formatSettings: { decimalPlaces: 1 },
                useGradientColors: false
              }
            ]
          }
        ]}
      />

      <br />
      <div className="options">
        <p>Default color schemes:</p>
        <DropDownList
          ref={dropdownRef}
          id="colorSchemes"
          selectionMode="one"
          selectedIndexes={[0]}
          selectionDisplayMode="placeholder"
          onChange={handleColorSchemesChange}
        >
          <ListItem value="scheme01">
            <div className="circle" style={{ backgroundColor: '#307DD7' }}></div>
            <div className="circle" style={{ backgroundColor: '#AA4643' }}></div>
            <div className="circle" style={{ backgroundColor: '#89A54E' }}></div>
            <div className="circle" style={{ backgroundColor: '#71588F' }}></div>
            <div className="circle" style={{ backgroundColor: '#4198AF' }}></div>
          </ListItem>
          <ListItem value="scheme02">
            <div className="circle" style={{ backgroundColor: '#7FD13B' }}></div>
            <div className="circle" style={{ backgroundColor: '#EA157A' }}></div>
            <div className="circle" style={{ backgroundColor: '#FEB80A' }}></div>
            <div className="circle" style={{ backgroundColor: '#00ADDC' }}></div>
            <div className="circle" style={{ backgroundColor: '#738AC8' }}></div>
          </ListItem>
          <ListItem value="scheme03">
            <div className="circle" style={{ backgroundColor: '#E8601A' }}></div>
            <div className="circle" style={{ backgroundColor: '#FF9639' }}></div>
            <div className="circle" style={{ backgroundColor: '#F5BD6A' }}></div>
            <div className="circle" style={{ backgroundColor: '#599994' }}></div>
            <div className="circle" style={{ backgroundColor: '#115D6E' }}></div>
          </ListItem>
		  	<ListItem value="scheme04">
			<div className="circle" style={{ backgroundColor: '#D02841' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF7C41' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFC051' }}></div>
			<div className="circle" style={{ backgroundColor: '#5B5F4D' }}></div>
			<div className="circle" style={{ backgroundColor: '#364651' }}></div>
		</ListItem>
		<ListItem value="scheme05">
			<div className="circle" style={{ backgroundColor: '#25A0DA' }}></div>
			<div className="circle" style={{ backgroundColor: '#309B46' }}></div>
			<div className="circle" style={{ backgroundColor: '#8EBC00' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF7515' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFAE00' }}></div>
		</ListItem>
		<ListItem value="scheme06">
			<div className="circle" style={{ backgroundColor: '#0A3A4A' }}></div>
			<div className="circle" style={{ backgroundColor: '#196674' }}></div>
			<div className="circle" style={{ backgroundColor: '#33A6B2' }}></div>
			<div className="circle" style={{ backgroundColor: '#9AC836' }}></div>
			<div className="circle" style={{ backgroundColor: '#D0E64B' }}></div>
		</ListItem>
		<ListItem value="scheme07">
			<div className="circle" style={{ backgroundColor: '#CC6B32' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFAB48' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFE7AD' }}></div>
			<div className="circle" style={{ backgroundColor: '#A7C9AE' }}></div>
			<div className="circle" style={{ backgroundColor: '#888A63' }}></div>
		</ListItem>
		<ListItem value="scheme08">
			<div className="circle" style={{ backgroundColor: '#3F3943' }}></div>
			<div className="circle" style={{ backgroundColor: '#01A2A6' }}></div>
			<div className="circle" style={{ backgroundColor: '#29D9C2' }}></div>
			<div className="circle" style={{ backgroundColor: '#BDF271' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFFFA6' }}></div>
		</ListItem>
		<ListItem value="scheme09">
			<div className="circle" style={{ backgroundColor: '#1B2B32' }}></div>
			<div className="circle" style={{ backgroundColor: '#37646F' }}></div>
			<div className="circle" style={{ backgroundColor: '#A3ABAF' }}></div>
			<div className="circle" style={{ backgroundColor: '#E1E7E8' }}></div>
			<div className="circle" style={{ backgroundColor: '#B22E2F' }}></div>
		</ListItem>
		<ListItem value="scheme10">
			<div className="circle" style={{ backgroundColor: '#5A4B53' }}></div>
			<div className="circle" style={{ backgroundColor: '#9C3C58' }}></div>
			<div className="circle" style={{ backgroundColor: '#DE2B5B' }}></div>
			<div className="circle" style={{ backgroundColor: '#D86A41' }}></div>
			<div className="circle" style={{ backgroundColor: '#D2A825' }}></div>
		</ListItem>
		<ListItem value="scheme11">
			<div className="circle" style={{ backgroundColor: '#993144' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFA257' }}></div>
			<div className="circle" style={{ backgroundColor: '#CCA56A' }}></div>
			<div className="circle" style={{ backgroundColor: '#ADA072' }}></div>
			<div className="circle" style={{ backgroundColor: '#949681' }}></div>
		</ListItem>
		<ListItem value="scheme12">
			<div className="circle" style={{ backgroundColor: '#105B63' }}></div>
			<div className="circle" style={{ backgroundColor: '#EEEAC5' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFD34E' }}></div>
			<div className="circle" style={{ backgroundColor: '#DB9E36' }}></div>
			<div className="circle" style={{ backgroundColor: '#BD4932' }}></div>
		</ListItem>
		<ListItem value="scheme13">
			<div className="circle" style={{ backgroundColor: '#BBEBBC' }}></div>
			<div className="circle" style={{ backgroundColor: '#F0EE94' }}></div>
			<div className="circle" style={{ backgroundColor: '#F5C465' }}></div>
			<div className="circle" style={{ backgroundColor: '#FA7642' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF1E54' }}></div>
		</ListItem>
		<ListItem value="scheme14">
			<div className="circle" style={{ backgroundColor: '#60573E' }}></div>
			<div className="circle" style={{ backgroundColor: '#F2EEAC' }}></div>
			<div className="circle" style={{ backgroundColor: '#BFA575' }}></div>
			<div className="circle" style={{ backgroundColor: '#A63841' }}></div>
			<div className="circle" style={{ backgroundColor: '#BFB8A3' }}></div>
		</ListItem>
		<ListItem value="scheme15">
			<div className="circle" style={{ backgroundColor: '#444546' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFBB6E' }}></div>
			<div className="circle" style={{ backgroundColor: '#F28D00' }}></div>
			<div className="circle" style={{ backgroundColor: '#D94F00' }}></div>
			<div className="circle" style={{ backgroundColor: '#7F203B' }}></div>
		</ListItem>
		<ListItem value="scheme16">
			<div className="circle" style={{ backgroundColor: '#583C39' }}></div>
			<div className="circle" style={{ backgroundColor: '#674E49' }}></div>
			<div className="circle" style={{ backgroundColor: '#948658' }}></div>
			<div className="circle" style={{ backgroundColor: '#F0E99A' }}></div>
			<div className="circle" style={{ backgroundColor: '#564E49' }}></div>
		</ListItem>
		<ListItem value="scheme17">
			<div className="circle" style={{ backgroundColor: '#142D58' }}></div>
			<div className="circle" style={{ backgroundColor: '#447F6E' }}></div>
			<div className="circle" style={{ backgroundColor: '#E1B65B' }}></div>
			<div className="circle" style={{ backgroundColor: '#C8782A' }}></div>
			<div className="circle" style={{ backgroundColor: '#9E3E17' }}></div>
		</ListItem>
		<ListItem value="scheme18">
			<div className="circle" style={{ backgroundColor: '#4D2B1F' }}></div>
			<div className="circle" style={{ backgroundColor: '#635D61' }}></div>
			<div className="circle" style={{ backgroundColor: '#7992A2' }}></div>
			<div className="circle" style={{ backgroundColor: '#97BFD5' }}></div>
			<div className="circle" style={{ backgroundColor: '#BFDCF5' }}></div>
		</ListItem>
		<ListItem value="scheme19">
			<div className="circle" style={{ backgroundColor: '#844341' }}></div>
			<div className="circle" style={{ backgroundColor: '#D5CC92' }}></div>
			<div className="circle" style={{ backgroundColor: '#BBA146' }}></div>
			<div className="circle" style={{ backgroundColor: '#897B26' }}></div>
			<div className="circle" style={{ backgroundColor: '#55591C' }}></div>
		</ListItem>
		<ListItem value="scheme20">
			<div className="circle" style={{ backgroundColor: '#56626B' }}></div>
			<div className="circle" style={{ backgroundColor: '#6C9380' }}></div>
			<div className="circle" style={{ backgroundColor: '#C0CA55' }}></div>
			<div className="circle" style={{ backgroundColor: '#F07C6C' }}></div>
			<div className="circle" style={{ backgroundColor: '#AD5472' }}></div>
		</ListItem>
		<ListItem value="scheme21">
			<div className="circle" style={{ backgroundColor: '#96003A' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF7347' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFBC7B' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF4154' }}></div>
			<div className="circle" style={{ backgroundColor: '#642223' }}></div>
		</ListItem>
		<ListItem value="scheme22">
			<div className="circle" style={{ backgroundColor: '#5D7359' }}></div>
			<div className="circle" style={{ backgroundColor: '#E0D697' }}></div>
			<div className="circle" style={{ backgroundColor: '#D6AA5C' }}></div>
			<div className="circle" style={{ backgroundColor: '#8C5430' }}></div>
			<div className="circle" style={{ backgroundColor: '#661C0E' }}></div>
		</ListItem>
		<ListItem value="scheme23">
			<div className="circle" style={{ backgroundColor: '#16193B' }}></div>
			<div className="circle" style={{ backgroundColor: '#35478C' }}></div>
			<div className="circle" style={{ backgroundColor: '#4E7AC7' }}></div>
			<div className="circle" style={{ backgroundColor: '#7FB2F0' }}></div>
			<div className="circle" style={{ backgroundColor: '#ADD5F7' }}></div>
		</ListItem>
		<ListItem value="scheme24">
			<div className="circle" style={{ backgroundColor: '#7B1A25' }}></div>
			<div className="circle" style={{ backgroundColor: '#BF5322' }}></div>
			<div className="circle" style={{ backgroundColor: '#9DA860' }}></div>
			<div className="circle" style={{ backgroundColor: '#CEA457' }}></div>
			<div className="circle" style={{ backgroundColor: '#B67818' }}></div>
		</ListItem>
		<ListItem value="scheme25">
			<div className="circle" style={{ backgroundColor: '#0081DA' }}></div>
			<div className="circle" style={{ backgroundColor: '#3AAFFF' }}></div>
			<div className="circle" style={{ backgroundColor: '#99C900' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFEB3D' }}></div>
			<div className="circle" style={{ backgroundColor: '#309B46' }}></div>
		</ListItem>
		<ListItem value="scheme26">
			<div className="circle" style={{ backgroundColor: '#0069A5' }}></div>
			<div className="circle" style={{ backgroundColor: '#0098EE' }}></div>
			<div className="circle" style={{ backgroundColor: '#7BD2F6' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFB800' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF6800' }}></div>
		</ListItem>
		<ListItem value="scheme27">
			<div className="circle" style={{ backgroundColor: '#FF6800' }}></div>
			<div className="circle" style={{ backgroundColor: '#A0A700' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF8D00' }}></div>
			<div className="circle" style={{ backgroundColor: '#678900' }}></div>
			<div className="circle" style={{ backgroundColor: '#0069A5' }}></div>
		</ListItem>
		<ListItem value="scheme28">
			<div className="circle" style={{ backgroundColor: '#3A43BA' }}></div>
			<div className="circle" style={{ backgroundColor: '#281E5D' }}></div>
			<div className="circle" style={{ backgroundColor: '#48AAAD' }}></div>
			<div className="circle" style={{ backgroundColor: '#0492C2' }}></div>
			<div className="circle" style={{ backgroundColor: '#1E456E' }}></div>
		</ListItem>
		<ListItem value="scheme29">
			<div className="circle" style={{ backgroundColor: '#003F5C' }}></div>
			<div className="circle" style={{ backgroundColor: '#58508D' }}></div>
			<div className="circle" style={{ backgroundColor: '#BC5090' }}></div>
			<div className="circle" style={{ backgroundColor: '#FF6361' }}></div>
			<div className="circle" style={{ backgroundColor: '#FFA600' }}></div>
		</ListItem>
		<ListItem value="scheme30">
			<div className="circle" style={{ backgroundColor: '#16736F' }}></div>
			<div className="circle" style={{ backgroundColor: '#A2D56A' }}></div>
			<div className="circle" style={{ backgroundColor: '#1C515C' }}></div>
			<div className="circle" style={{ backgroundColor: '#62B773' }}></div>
			<div className="circle" style={{ backgroundColor: '#EEEF63' }}></div>
		</ListItem>
		<ListItem value="scheme31">
			<div className="circle" style={{ backgroundColor: '#74CC66' }}></div>
			<div className="circle" style={{ backgroundColor: '#191A4D' }}></div>
			<div className="circle" style={{ backgroundColor: '#2D867A' }}></div>
			<div className="circle" style={{ backgroundColor: '#EEE3CD' }}></div>
			<div className="circle" style={{ backgroundColor: '#224D19' }}></div>
		</ListItem>
		<ListItem value="scheme32">
			<div className="circle" style={{ backgroundColor: '#87C5FF' }}></div>
			<div className="circle" style={{ backgroundColor: '#5B5B60' }}></div>
			<div className="circle" style={{ backgroundColor: '#9BE076' }}></div>
			<div className="circle" style={{ backgroundColor: '#F7A384' }}></div>
			<div className="circle" style={{ backgroundColor: '#7479D3' }}></div>
		</ListItem>
        </DropDownList>

        <p>Custom color scheme:</p>
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} id={`customScheme${n}`} className="circle" />
        ))}

        <br />
        <CheckBox ref={checkboxRef} id="useCustomScheme" onChange={handleUseCustomSchemeChange}>
          Use custom color scheme
        </CheckBox>

        <p>Theme:</p>
        <RadioButton id="btnLight" checked onChange={handleBtnLightChange}>
          Light theme <em>(default)</em>
        </RadioButton>
        <RadioButton id="btnDark" onChange={handleBtnDarkChange}>
          Dark theme
        </RadioButton>
      </div>
    </div>
  );
};

export default App;

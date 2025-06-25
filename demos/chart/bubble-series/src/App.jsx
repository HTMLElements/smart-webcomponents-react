import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
    const chartRef = useRef(null);

    const sampleData = [
        { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
        { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
        { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
        { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
        { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
        { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
        { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
    ];

    const caption = 'Sales by City in Q1 and Q2, and YoY sales growth';
    const description = '(the size of the circles represents relative YoY growth)';
    const showLegend = true;
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const colorScheme = 'scheme32';
    const xAxis = { dataField: 'City', valuesOnTicks: false };
    const valueAxis = {
        unitInterval: 50000,
        minValue: 50000,
        maxValue: 350000,
        title: {
            text: 'Sales ($)<br>'
        },
        labels: {
            formatSettings: {
                prefix: '$',
                thousandsSeparator: ','
            },
            horizontalAlignment: 'right'
        }
    };

    const seriesGroups = [
        {
            type: 'bubble',
            useGradientColors: true,
            series: [
                {
                    dataField: 'SalesQ1',
                    radiusDataField: 'YoYGrowthQ1',
                    minRadius: 10,
                    maxRadius: 30,
                    displayText: 'Sales in Q1'
                },
                {
                    dataField: 'SalesQ2',
                    radiusDataField: 'YoYGrowthQ2',
                    minRadius: 10,
                    maxRadius: 30,
                    displayText: 'Sales in Q2'
                }
            ]
        }
    ];

    const handleDropDownSerie1SymbolChange = (event) => {
        const chart = chartRef.current;
        if (chart?.seriesGroups?.[0]?.series) {
            chart.seriesGroups[0].series[0].symbolType = event.detail.value;
            chart.refresh();
        }
    };

    const handleDropDownSerie2SymbolChange = (event) => {
        const chart = chartRef.current;
        if (chart?.seriesGroups?.[0]?.series) {
            chart.seriesGroups[0].series[1].symbolType = event.detail.value;
            chart.refresh();
        }
    };

    return (
        <div>
            <Chart
                ref={chartRef}
                id="chart"
                animation="none"
                caption={caption}
                description={description}
                showLegend={showLegend}
                padding={padding}
                titlePadding={titlePadding}
                dataSource={sampleData}
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
                                    dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
                                    selectionMode="one"
                                    selectedIndexes={[0]}
                                    onChange={handleDropDownSerie1SymbolChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Select Serie 2 Symbol:</p>
                                <DropDownList
                                    id="dropDownSerie2Symbol"
                                    dataSource={["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"]}
                                    selectionMode="one"
                                    selectedIndexes={[0]}
                                    onChange={handleDropDownSerie2SymbolChange}
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

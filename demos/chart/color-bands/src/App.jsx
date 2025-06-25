import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
    const chartRef = useRef(null);

    const data = [
        { Person: 'Planning', M1_From: 2, M1_To: 5, M2_From: 5, M2_To: 10 },
        { Person: 'Dev 1', M1_From: 5, M1_To: 7, M2_From: 9, M2_To: 17 },
        { Person: 'Dev 2', M1_From: 5, M1_To: 12, M2_From: 14, M2_To: 22 },
        { Person: 'QA 1', M1_From: 7, M1_To: 14, M2_From: 14, M2_To: 25 }
    ];

    const toolTipCustomFormatFn = (value, itemIndex, serie, group, xAxisValue, xAxis) => {
        const dataItem = data[itemIndex];
        return `<div style="text-align: left;">
            <strong>Team: ${xAxisValue}</strong>
            <br />Start day: ${value.from}
            <br />End day: ${value.to}
        </div>`;
    };

    const caption = 'Monthly Project Schedule';
    const description = 'Website update plan';
    const padding = { left: 5, top: 5, right: 10, bottom: 5 };
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const xAxis = {
        dataField: 'Person',
        unitInterval: 1,
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        }
    };
    const colorScheme = 'scheme32';

    const seriesGroups = [
        {
            orientation: 'horizontal',
            type: 'rangecolumn',
            columnsGapPercent: 100,
            toolTipFormatFunction: toolTipCustomFormatFn,
            valueAxis: {
                flip: true,
                minValue: 1,
                maxValue: 30,
                unitInterval: 1,
                title: {
                    text: 'Day'
                },
                tickMarks: {
                    color: '#BCBCBC'
                }
            },
            series: [
                {
                    dataFieldFrom: 'M1_From',
                    dataFieldTo: 'M1_To',
                    displayText: 'Sprint 1',
                    opacity: 1
                },
                {
                    dataFieldFrom: 'M2_From',
                    dataFieldTo: 'M2_To',
                    displayText: 'Sprint 2',
                    opacity: 1
                }
            ],
            bands: [
                {
                    minValue: 13,
                    maxValue: 16,
                    color: '#00FF00',
                    opacity: 0.15
                },
                {
                    minValue: 24,
                    maxValue: 27,
                    color: '#FFBC70',
                    opacity: 0.20
                },
                {
                    minValue: 29,
                    maxValue: 29,
                    color: '#FF0000',
                    opacity: 0.5,
                    lineWidth: 3
                }
            ]
        }
    ];

    return (
        <div>
            <Chart
                ref={chartRef}
                id="chart"
                caption={caption}
                description={description}
                showLegend={true}
                padding={padding}
                titlePadding={titlePadding}
                dataSource={data}
                xAxis={xAxis}
                colorScheme={colorScheme}
                seriesGroups={seriesGroups}
            />
        </div>
    );
};

export default App;

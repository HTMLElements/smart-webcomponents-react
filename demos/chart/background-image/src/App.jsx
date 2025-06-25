import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
    const topTenCities = [
        { x: 18, y: 49, Population: 1238438, City: 'Sofia' },
        { x: 39, y: 32, Population: 345213, City: 'Plovdiv' },
        { x: 87, y: 67, Population: 335854, City: 'Varna' },
        { x: 81, y: 44, Population: 202694, City: 'Burgas' },
        { x: 58, y: 86, Population: 144125, City: 'Ruse' },
        { x: 53, y: 41, Population: 136307, City: 'Stara Zagora' },
        { x: 38, y: 71, Population: 97557, City: 'Pleven' },
        { x: 64, y: 51, Population: 87063, City: 'Sliven' },
        { x: 85, y: 81, Population: 84502, City: 'Dobrich' },
        { x: 73, y: 70, Population: 75837, City: 'Shumen' }
    ];

    const overallPopulation = [
        { Year: 1960, Population: 7.829e6 },
        { Year: 1970, Population: 8.464e6 },
        { Year: 1980, Population: 8.846e6 },
        { Year: 1990, Population: 8.767e6 },
        { Year: 2000, Population: 8.191e6 },
        { Year: 2010, Population: 7.422e6 },
        { Year: 2017, Population: 7.102e6 }
    ];

    const backgroundImage = 'bulgaria.png';
    const caption = 'Top Ten Largest Cities in Bulgaria';
    const description = '(source: www.nsi.bg)';
    const showLegend = false;
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const colorScheme = 'scheme32';

    const seriesGroups = [
        {
            xAxis: {
                type: 'linear',
                minValue: 0,
                maxValue: 100,
                visible: false,
                dataField: 'x'
            },
            valueAxis: {
                type: 'linear',
                minValue: 0,
                maxValue: 100,
                visible: false
            },
            type: 'bubble',
            dataSource: topTenCities,
            series: [{
                dataField: 'y',
                radiusDataField: 'Population',
                minRadius: 10,
                maxRadius: 40,
                toolTipFormatFunction: (value, itemIndex) => {
                    return `City: ${topTenCities[itemIndex].City}<br />Population: ${topTenCities[itemIndex].Population}`;
                }
            }]
        },
        {
            xAxis: {
                type: 'linear',
                minValue: 1955,
                maxValue: 2020,
                visible: true,
                dataField: 'Year',
                title: {
                    text: 'Population of Bulgaria'
                },
                valuesOnTicks: false,
                gridLines: {
                    visible: false
                },
                labels: {
                    formatFunction(value) {
                        return (value < 1960 || value > 2015) ? '' : value;
                    }
                }
            },
            valueAxis: {
                type: "linear",
                minValue: 5e6,
                maxValue: 25e6,
                visible: false,
                position: 'right'
            },
            type: 'line',
            dataSource: overallPopulation,
            series: [{
                dataField: 'Population'
            }]
        }
    ];

    return (
        <div>
            <Chart
                id="chart"
                backgroundImage={backgroundImage}
                caption={caption}
                description={description}
                showLegend={showLegend}
                padding={padding}
                titlePadding={titlePadding}
                colorScheme={colorScheme}
                seriesGroups={seriesGroups}
            />
        </div>
    );
};

export default App;

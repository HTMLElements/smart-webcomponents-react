import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Chart } from 'smart-webcomponents-react/chart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: 'HPI'
    };
    this.chartRef = React.createRef();
  }

  sampleData = [/* your dataset here (trimmed for brevity) */];

  getChartData() {
    const { selectedField } = this.state;
    return this.sampleData.map((entry) => ({
      Year: entry.Year,
      Value: parseFloat(entry[selectedField])
    }));
  }

  chartSettings() {
    return {
      caption: `Chart of ${this.state.selectedField} over Years`,
      description: '',
      showLegend: false,
      padding: { left: 10, top: 10, right: 10, bottom: 10 },
      titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
      dataSource: this.getChartData(),
      xAxis: {
        dataField: 'Year',
        type: 'basic',
        textRotationAngle: 90
      },
      colorScheme: 'scheme01',
      seriesGroups: [{
        type: 'line',
        series: [{ dataField: 'Value', displayText: this.state.selectedField }]
      }]
    };
  }

  handleDropDownChange = (event) => {
    this.setState({ selectedField: event.detail.value });
  }

  render() {
    return (
      <div>
        <h2>US Housing Data Visualization</h2>

        <DropDownList
          selectedIndexes={[0]}
          onChange={this.handleDropDownChange}
          dataSource={['HPI', 'BuildCost', 'Population', 'Rate']}
          style={{ width: '200px', marginBottom: '20px' }}
        ></DropDownList>

        <Chart
          ref={this.chartRef}
          id="chart"
          {...this.chartSettings()}
          style={{ width: '100%', height: '500px' }}
        />
      </div>
    );
  }
}

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();

    this.state = {
      data: [
        { x: 15, y: 30 },
        { x: 55, y: 90 }
      ],
      maxX: 200,
      maxY: 200
    };
  }

  animation = 'none';
  caption = 'Adding Data Points Dynamically';
  description = 'Click the plot area to add a point';
  showLegend = false;

  padding = {
    left: 10,
    top: 5,
    right: 10,
    bottom: 5
  };

  titlePadding = {
    left: 50,
    top: 0,
    right: 0,
    bottom: 10
  };

  colorScheme = 'scheme28';

  getXAxis() {
    return {
      dataField: 'x',
      minValue: 0,
      maxValue: this.state.maxX
    };
  }

  getValueAxis() {
    return {
      visible: true,
      title: { text: '' },
      minValue: 0,
      maxValue: this.state.maxY,
      unitInterval: 50
    };
  }

  seriesGroups = [{
    type: 'line',
    series: [{
      dataField: 'y',
      symbolType: 'circle',
      symbolSize: 10
    }]
  }];

  handleClick = (event) => {
    const rect = this.chart.current.nativeElement.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * this.state.maxX;
    const y = ((rect.bottom - event.clientY) / rect.height) * this.state.maxY;

    const updatedData = [...this.state.data, { x, y }];
    let { maxX, maxY } = this.state;

    if (x >= maxX * 0.9) maxX += 50;
    if (y >= maxY * 0.9) maxY += 50;

    this.setState({ data: updatedData, maxX, maxY });
  };

  render() {
    return (
      <div>
        <Chart
          ref={this.chart}
          id="chart"
          onClick={this.handleClick}
          animation={this.animation}
          caption={this.caption}
          description={this.description}
          showLegend={this.showLegend}
          padding={this.padding}
          titlePadding={this.titlePadding}
          dataSource={this.state.data}
          colorScheme={this.colorScheme}
          xAxis={this.getXAxis()}
          valueAxis={this.getValueAxis()}
          seriesGroups={this.seriesGroups}
        />
      </div>
    );
  }
}

export default App;

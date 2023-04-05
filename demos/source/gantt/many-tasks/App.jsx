import React from "react";
import ReactDOM from 'react-dom/client';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { GetGanttChartFlatData } from './common/data';

class App extends React.Component {

	dataSource = GetGanttChartFlatData(100000, new Date())

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">Gantt Chart with Multiple tasks.</div>
			    <GanttChart id="gantt" dataSource={this.dataSource}></GanttChart>
			</div>
		);
	}
}



export default App;

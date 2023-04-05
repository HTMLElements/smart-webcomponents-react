import { useEffect, useState } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { GetGanttChartFlatData } from './common/data';

export default function App() {

	const [dataSource, setDataSource] = useState();

	useEffect(() => {
		setDataSource(GetGanttChartFlatData(100000, new Date()))
	}, []);

	return (
		<div>
			<div className="demo-description">Gantt Chart with Multiple tasks.</div>
			<GanttChart id="gantt" dataSource={dataSource}></GanttChart>
		</div>
	)
}

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { GanttChart } from "smart-webcomponents-react/ganttchart";


const generateGanttChartDataFlat = (count = 50, minDate, maxDate) => {
    const data = [];
	const getRandom = (coeff = 10) => {
		return Math.round(Math.random() * coeff)
	}

    if (!minDate || isNaN(new Date(minDate).getTime())) {
        minDate = new Date();
    }

    if (!maxDate || isNaN(new Date(maxDate).getTime())) {
        maxDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() + getRandom(50));
    }

    const dateMin = new Date(minDate),
        dateMax = new Date(maxDate);
    let dateMinYear = dateMin.getFullYear(),
        dateMinMonth = dateMin.getMonth(),
        dateMinDate = dateMin.getDate(),
        dateMaxYear = dateMax.getFullYear(),
        dateMaxMonth = dateMax.getMonth(),
        dateMaxDate = dateMax.getDate(),
        [taskCounter, projectCounter] = [0, 0];

    for (let i = 0; i < count; i += 1) {
        const rand = getRandom(),
            task = {
                label: 'Task ' + (taskCounter + 1),
                dateStart: `${dateMinYear}-${dateMinMonth}-${dateMinDate}`,
                dateEnd: `${dateMaxYear}-${dateMaxMonth}-${dateMaxDate}`,
                type: 'task'
            };

        if (i % 4 === 0) {
            task.connections = [{
                target: i + rand % count,
                type: rand % 3
            }];
        }

        dateMinMonth = rand;
        dateMaxMonth = rand + getRandom(20);
        dateMinDate = getRandom();
        dateMaxDate = getRandom(20);
        taskCounter++;

        data.push(task);
    }

    return data
}

const Demo = () => {
  const ganttRef = useRef(null);

  return (
    <>
      <div className="demo-description">Gantt Chart with Multiple tasks.</div>
      <GanttChart dataSource={generateGanttChartDataFlat(10000, new Date())} paging={true} ref={ganttRef} id="gantt" />
    </>
  );
};

export default Demo;

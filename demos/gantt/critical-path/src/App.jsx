import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import { GanttChart } from "smart-webcomponents-react/ganttchart";
import { Button } from "smart-webcomponents-react/button";

const Demo = () => {
  const ganttChartRef = useRef(null);
  const [criticalPath, setCriticalPath] = useState(false);

  const tasks = [
    {
      id: 1,
      label: "Office itinerancy",
      type: "project",
      expanded: true,
      synchronized: true,
      tasks: [
        {
          id: 2,
          label: "Office facing",
          dateStart: "2025-07-22",
          duration: 22,
          connections: [{ target: 6, type: 1 }],
        },
        {
          id: 3,
          label: "Furniture installation",
          dateStart: "2025-07-22",
          duration: 5,
          connections: [
            { target: 4, type: 1 },
            { target: 5, type: 1 },
          ],
        },
        {
          id: 4,
          label: "The employee relocation",
          dateStart: "2025-07-29",
          duration: 15,
          connections: [{ target: 6, type: 1 }],
        },
        {
          id: 5,
          label: "Interior office",
          dateStart: "2025-07-29",
          duration: 15,
          connections: [{ target: 6, type: 1 }],
        },
        {
          id: 6,
          label: "Air conditioners installation",
          dateStart: "2025-08-19",
          duration: 2,
          connections: [{ target: 7, type: 1 }],
        },
        {
          id: 7,
          label: "Workplaces preparation",
          dateStart: "2025-08-21",
          duration: 2,
          connections: [{ target: 9, type: 1 }],
        },
        {
          id: 8,
          label: "Preparing workplaces for us",
          dateStart: "2025-07-22",
          duration: 10,
          connections: [{ target: 9, type: 1 }],
        },
        {
          id: 9,
          label: "Workplaces importation",
          dateStart: "2025-08-23",
          duration: 1,
          connections: [
            { target: 10, type: 1 },
            { target: 11, type: 1 },
            { target: 12, type: 1 },
          ],
        },
      ],
    },
    {
      id: 10,
      label: "Analysis",
      type: "project",
      synchronized: true,
      expanded: true,
      tasks: [
        {
          id: 11,
          label: "Documentation creation",
          dateStart: "2025-08-26",
          duration: 14,
          connections: [{ target: 13, type: 1 }],
        },
        {
          id: 12,
          label: "Software design",
          dateStart: "2025-08-26",
          duration: 10,
          connections: [{ target: 13, type: 1 }],
        },
        {
          id: 13,
          label: "Interface setup",
          dateStart: "2025-09-13",
          duration: 1,
          connections: [
            { target: 14, type: 1 },
            { target: 15, type: 1 },
          ],
        },
      ],
    },
    {
      id: 14,
      label: "Development",
      synchronized: true,
      expanded: true,
      type: "project",
      tasks: [
        {
          id: 15,
          label: "Develop System",
          dateStart: "2025-09-16",
          duration: 5,
          connections: [{ target: 17, type: 1 }],
        },
        {
          id: 16,
          label: "Integrate System",
          dateStart: "2025-09-16",
          duration: 15,
          connections: [{ target: 17, type: 1 }],
        },
        {
          id: 17,
          label: "Test",
          dateStart: "2025-10-07",
          duration: 1,
        },
      ],
    },
  ];

  useEffect(() => {
    if (ganttChartRef.current) {
      ganttChartRef.current.view = "week";
      ganttChartRef.current.durationUnit = "day";
      ganttChartRef.current.dayStart = "2025-07-17";
      ganttChartRef.current.dataSource = tasks;
      ganttChartRef.current.criticalPath = criticalPath;
    }
  }, [criticalPath]);

  const toggleCriticalPath = () => {
    setCriticalPath((prev) => !prev);
  };

  return (
    <div className="viewport" style={{ padding: 10 }}>
      <div>
        <h1>Gantt Critical Path</h1>
        <p>
          This demo shows how to use the Gantt Chart's critical path feature.
          The critical path is the longest sequence of tasks that must be
          completed on time for the project to finish on schedule.
        </p>
        <p>
          Project Description: Office Renovation with Multiple Critical Paths
          <br />
          This Gantt Chart example represents a realistic Office Renovation
          Project involving structural work, systems
          <br />
          installation, interior finishes, and furniture setup. The project is
          designed to demonstrate multiple
          <br />
          critical paths, reflecting real-world project complexity where
          several parallel task sequences determine the
          <br />
          project's overall duration.
          <br />
          <br />
          Key Characteristics:
          <br />
          - The project starts with parallel procurement activities for
          construction materials, electrical equipment,
          <br />
          and furniture.
          <br />
          - Site preparation and structural work form the foundation for
          downstream tasks.
          <br />
          - Multiple installation tasks such as Plumbing, Electrical, HVAC,
          and Painting run in parallel.
          <br />
          - Interior Finishes and Furniture Setup converge with critical
          dependencies on both material deliveries and
          <br />
          prior construction phases.
          <br />
          - Final Testing, Inspections, and Project Completion rely on the
          successful, timely execution of all
          <br />
          critical paths.
          <br />
        </p>
      </div>

      <GanttChart ref={ganttChartRef} id="ganttChart" style={{ height: 500 }} />

      <p>Click on the "Show Critical Path" button to output the critical path.</p>

      <Button id="criticalPath" onClick={toggleCriticalPath}>
        {criticalPath ? "Hide Critical Path" : "Show Critical Path"}
      </Button>
    </div>
  );
};

export default Demo;

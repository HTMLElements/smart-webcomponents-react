import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Kanban } from "smart-webcomponents-react/kanban";
import { Window } from "smart-webcomponents-react/window";

import { GetKanbanData } from "./common/data";

export default function App() {

  const windowRef = useRef()

  const addNewColumn = true;
  const allowColumnRemove = true;
  const collapsible = true;
  const addNewButton = true;
  const editable = true;
  const columnActions = true;
  const columnEditMode = "menu";
  const columnFooter = true;
  const columnSummary = true;
  const columnColors = true;
  const columnColorEntireSurface = true;
  const dataSource = GetKanbanData();
  const allowColumnEdit = true;
  const allowColumnReorder = true;
  const taskActions = true;
  const taskDue = true;
  const taskComments = true;
  const currentUser = 0;
  const taskProgress = true;
  const users = [
    { id: 0, name: "Andrew", image: "../../images/people/andrew.png" },
    { id: 1, name: "Anne", image: "../../images/people/anne.png" },
    { id: 2, name: "Janet", image: "../../images/people/janet.png" },
    { id: 3, name: "John", image: "../../images/people/john.png" },
    { id: 4, name: "Laura", image: "../../images/people/laura.png" },
  ];
  const columns = [
    { color: "#33B679", label: "To do", dataField: "toDo", allowHide: false },
    { color: "#8E24AA", label: "In progress", dataField: "inProgress" },
    { color: "#039BE5", label: "Testing", dataField: "testing" },
    { color: "#DD5347", label: "Done", dataField: "done", addNewButton: false },
  ];

  const handleTaskDoubleClick = (e) => {
    const task = e.detail.value;
    
    windowRef.current.nativeElement.innerHTML = `
        Text: ${task.text}<br />
        Due Date: ${task.dueDate}<br />
        Tags: ${task.tags}<br />
        Priority: ${task.priority || ''}<br />
        <img style="max-width: 100%;" src="https://www.htmlelements.com/demos/images/admin-template.png" />
    `
    windowRef.current.open();

    e.preventDefault();
  }
  return (
    <div>
      <div className="demo-description">
        In this example is shown how to replace the default task window.
      </div>
      <Kanban
        addNewColumn={addNewColumn}
        allowColumnRemove={allowColumnRemove}
        collapsible={collapsible}
        addNewButton={addNewButton}
        editable={editable}
        columnActions={columnActions}
        columnEditMode={columnEditMode}
        columnFooter={columnFooter}
        columnSummary={columnSummary}
        columnColors={columnColors}
        columnColorEntireSurface={columnColorEntireSurface}
        allowColumnEdit={allowColumnEdit}
        allowColumnReorder={allowColumnReorder}
        taskActions={taskActions}
        dataSource={dataSource}
        taskDue={taskDue}
        taskProgress={taskProgress}
        columns={columns}
        taskComments={taskComments}
        users={users}
        currentUser={currentUser}
        onTaskDoubleClick={handleTaskDoubleClick}
      >
      </Kanban>
      <Window ref={windowRef} id="customWindow"></Window>
    </div>
  )
}
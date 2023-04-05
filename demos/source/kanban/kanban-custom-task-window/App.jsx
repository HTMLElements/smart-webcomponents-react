import React from "react";
import ReactDOM from 'react-dom/client';
import { Kanban } from "smart-webcomponents-react/kanban";
import { Window } from "smart-webcomponents-react/window";
import { GetKanbanData } from "./common/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.kanban = React.createRef();
    this.windowRef = React.createRef();
  }

  addNewColumn = true;
  allowColumnRemove = true;
  collapsible = true;
  addNewButton = true;
  editable = true;
  columnActions = true;
  columnEditMode = "menu";
  columnFooter = true;
  columnSummary = true;
  columnColors = true;
  columnColorEntireSurface = true;
  dataSource = GetKanbanData();
  allowColumnEdit = true;
  allowColumnReorder = true;
  taskActions = true;
  taskDue = true;
  taskComments = true;
  currentUser = 0;
  taskProgress = true;
  users = [
    { id: 0, name: "Andrew", image: "../../images/people/andrew.png" },
    { id: 1, name: "Anne", image: "../../images/people/anne.png" },
    { id: 2, name: "Janet", image: "../../images/people/janet.png" },
    { id: 3, name: "John", image: "../../images/people/john.png" },
    { id: 4, name: "Laura", image: "../../images/people/laura.png" },
  ];
  columns = [
    { color: "#33B679", label: "To do", dataField: "toDo", allowHide: false },
    { color: "#8E24AA", label: "In progress", dataField: "inProgress" },
    { color: "#039BE5", label: "Testing", dataField: "testing" },
    { color: "#DD5347", label: "Done", dataField: "done", addNewButton: false },
  ];

  handleTaskDoubleClick(event) {

    const task = event.detail.value;

    this.windowRef.current.nativeElement.innerHTML = `
        Text: ${task.text}<br />
        Due Date: ${task.dueDate}<br />
        Tags: ${task.tags}<br />
        Priority: ${task.priority || ''}<br />
        <img style="max-width: 100%;" src="https://www.htmlelements.com/demos/images/admin-template.png" />
    `
    this.windowRef.current.open();

    event.preventDefault();

  }
  
  render() {
    return (
      <div>
        <div className="demo-description">
          In this example is shown how to replace the default task window.
        </div>
        <Kanban
          addNewColumn={this.addNewColumn} allowColumnRemove={this.allowColumnRemove} collapsible={this.collapsible}
          addNewButton={this.addNewButton} editable={this.editable} columnActions={this.columnActions} columnEditMode={this.columnEditMode}
          columnFooter={this.columnFooter} columnSummary={this.columnSummary} columnColors={this.columnColors}
          columnColorEntireSurface={this.columnColorEntireSurface} allowColumnEdit={this.allowColumnEdit} allowColumnReorder={this.allowColumnReorder}
          taskActions={this.taskActions} dataSource={this.dataSource} taskDue={this.taskDue} taskProgress={this.taskProgress} columns={this.columns}
          onTaskDoubleClick={this.handleTaskDoubleClick.bind(this)}
        >
        </Kanban>
        <Window ref={this.windowRef} id="customWindow"></Window>
      </div>
    );
  }
}



export default App;

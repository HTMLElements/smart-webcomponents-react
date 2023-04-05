import React from "react";
import { Kanban } from "smart-webcomponents-react/kanban";
import { RadioButton } from "smart-webcomponents-react/radiobutton";
import { GetKanbanData } from "./common/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.kanban = React.createRef();
  }

  collapsible = true;
  editable = true;
  columnActions = true;
  columnEditMode = 'menu';
  columnFooter = true;
  columnSummary = true;
  columnColors = true;
  columnColorEntireSurface = false;
  dataSource = GetKanbanData();
  allowColumnEdit = true;
  allowColumnReorder = true;
  taskActions = true;
  taskDue = true;
  taskSubtasks = true;
  taskComments = true;
  currentUser = 0;
  taskProgress = true;
  users = [
    { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
    { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
    { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
    { id: 3, name: 'John', image: '../../images/people/john.png' },
    { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
  ];
  columns = [
    { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
    { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
    { color: '#039BE5', label: 'Testing', dataField: 'testing' },
    { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
  ];

  handleColumnColorEntireSurfaceChange = (value) => {
    this.kanban.current.columnColorEntireSurface = value
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="demo-description">
        </div>
        <Kanban 
          ref={this.kanban}
          id="kanban"
          collapsible={this.collapsible}
          addNewButton={this.addNewButton} editable={this.editable} columnActions={this.columnActions} columnEditMode={this.columnEditMode}
          columnFooter={this.columnFooter} columnSummary={this.columnSummary} columnColors={this.columnColors}
          columnColorEntireSurface={this.columnColorEntireSurface} allowColumnEdit={this.allowColumnEdit} allowColumnReorder={this.allowColumnReorder}
          taskActions={this.taskActions} dataSource={this.dataSource} taskDue={this.taskDue} taskProgress={this.taskProgress} columns={this.columns}
          users={this.users}>
        </Kanban>
        <div className="options">
          <div className="caption">
            Options
          </div>
          <div className="option">
            <RadioButton
              onChange={this.handleColumnColorEntireSurfaceChange.bind(null, false)}
              name="defaultStyle"
              checked
            >
              Default Style
            </RadioButton>
            <RadioButton
              onChange={this.handleColumnColorEntireSurfaceChange.bind(null, true)}
              name="alternativeStyle"
            >
              Alternative Style
            </RadioButton>
          </div>
        </div>
      </div>
    );
  }
}



export default App;

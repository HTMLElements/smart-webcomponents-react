import { useRef } from "react";

import { Kanban } from "smart-webcomponents-react/kanban";
import { RadioButton } from "smart-webcomponents-react/radiobutton";
import { GetKanbanData } from "./common/data";

export default function App() {

  const kanban = useRef()

  const kanbanSettings = {
    collapsible: true,
    editable: true,
    columnActions: true,
    columnEditMode: 'menu',
    columnFooter: true,
    columnSummary: true,
    columnColors: true,
    columnColorEntireSurface: false,
    dataSource: GetKanbanData(),
    allowColumnEdit: true,
    allowColumnReorder: true,
    taskActions: true,
    taskDue: true,
    taskSubtasks: true,
    taskComments: true,
    currentUser: 0,
    taskProgress: true,
    users: [
      { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
      { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
      { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
      { id: 3, name: 'John', image: '../../images/people/john.png' },
      { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
    ],
    columns: [
      { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
      { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
      { color: '#039BE5', label: 'Testing', dataField: 'testing' },
      { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
    ]
  }

  const handleColumnColorEntireSurfaceChange = (value) => {
    kanban.current.columnColorEntireSurface = value
  }

  return (
    <div>
      <div className="demo-description">
      </div>
      <Kanban ref={kanban} id="kanban" {...kanbanSettings}>
      </Kanban>
      <div className="options">
        <div className="caption">
          Options
        </div>
        <div className="option">
          <RadioButton
            onChange={handleColumnColorEntireSurfaceChange.bind(null, false)}
            name="defaultStyle"
            checked
          >
            Default Style
          </RadioButton>
          <RadioButton
            onChange={handleColumnColorEntireSurfaceChange.bind(null, true)}
            name="alternativeStyle"
          >
            Alternative Style
          </RadioButton>
        </div>
      </div>
    </div>
  )
}
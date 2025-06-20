import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { GetKanbanData } from './common/data';

export default function App() {

    const kanbanRef = useRef();

    const collapsible = true;
    const editable = true;
    const columnActions = true;
    const columnEditMode = 'menu';
    const columnFooter = true;
    const columnSummary = true;
    const columnColors = true;
    const columnColorEntireSurface = true;
    const dataSource = GetKanbanData();
    const allowColumnEdit = true;
    const allowColumnReorder = true;
    const taskActions = true;
    const taskDue = true;
    const taskSubtasks = 'onePerRow';
    const taskComments = true;
    const currentUser = 0;
    const taskProgress = true;
    const users = [
        { id: 0, name: 'Andrew', image: '../../../src/images/people/andrew.png' },
        { id: 1, name: 'Anne', image: '../../../src/images/people/anne.png' },
        { id: 2, name: 'Janet', image: '../../../src/images/people/janet.png' },
        { id: 3, name: 'John', image: '../../../src/images/people/john.png' },
        { id: 4, name: 'Laura', image: '../../../src/images/people/laura.png' }
    ];
    const columns = [
        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
    ];

    const handleSubTasksOptionChange = (value) => {
        kanbanRef.current.taskSubTasks = value
    }

    return (
        <div>
            <div className="demo-description">Kanban Sub-tasks have three different rendering modes. Sub-tasks in this example are
                displayed in the task card.
            </div>
            <Kanban
                ref={kanbanRef}
                collapsible={collapsible}
                editable={editable}
                columnActions={columnActions}
                columnEditMode={columnEditMode}
                columnFooter={columnFooter}
                columnSummary={columnSummary}
                columnColors={columnColors}
                columnColorEntireSurface={columnColorEntireSurface}
                dataSource={dataSource}
                allowColumnEdit={allowColumnEdit}
                allowColumnReorder={allowColumnReorder}
                taskActions={taskActions}
                taskDue={taskDue}
                taskSubTasks={taskSubtasks}
                taskComments={taskComments}
                currentUser={currentUser}
                taskProgress={taskProgress}
                users={users}
                columns={columns}
            >
            </Kanban>
            <div className="options">
                <div className="caption">
                    Options
                </div>
                <div className="option">
                    <RadioButton onChange={handleSubTasksOptionChange.bind(null, 'none')}>
                        None
                    </RadioButton>
                    <RadioButton onChange={handleSubTasksOptionChange.bind(null, 'onePerRow')} checked>
                        One Per Row
                    </RadioButton>
                    <RadioButton onChange={handleSubTasksOptionChange.bind(null, 'onlyUnfinished')}>
                        Only unfinished
                    </RadioButton>

                </div>
            </div>
        </div>
    )
}
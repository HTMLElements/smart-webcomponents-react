import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

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
        { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
        { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
        { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
        { id: 3, name: 'John', image: '../../images/people/john.png' },
        { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
    ];
    const columns = [
        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
    ];

    return (
        <div>
            <div className="demo-description">Kanban Sub-tasks have three different rendering modes. Sub-tasks in this example are
                displayed in the task card.
            </div>
            <Kanban
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
        </div>
    )
}
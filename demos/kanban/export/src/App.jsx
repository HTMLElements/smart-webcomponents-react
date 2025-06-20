import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Kanban } from 'smart-webcomponents-react/kanban';

import { GetKanbanData } from './common/data';

export default function App() {

	const kanban = useRef();

	const handleCSVClick = () => {
		kanban.current.exportData('csv', 'kanban');
	}

	const handleHTMLClick = () => {
		kanban.current.exportData('html', 'kanban');
	}

	const handleJSONClick = () => {
		kanban.current.exportData('json', 'kanban');
	}

	const handlePDFClick = () => {
		kanban.current.exportData('pdf', 'kanban');
	}

	const handleTSVClick = () => {
		kanban.current.exportData('tsv', 'kanban');
	}

	const handleXLSXClick = () => {
		kanban.current.exportData('xlsx', 'kanban');
	}

	const handleXMLClick = () => {
		kanban.current.exportData('xml', 'kanban');
	}

	const dataSource = GetKanbanData();

	const columns = [
		{
			label: 'To do',
			dataField: 'toDo'
		},
		{
			label: 'In progress',
			dataField: 'inProgress'
		},
		{
			label: 'Testing',
			dataField: 'testing'
		},
		{
			label: 'Done',
			dataField: 'done'
		}
	];

	return (
		<div>
			<Kanban
				ref={kanban}
				id="kanban"
				collapsible
				dataSource={dataSource}
				columns={columns}
			></Kanban>
			<div className="options">
				<Button id="csv" onClick={handleCSVClick}>Export to CSV</Button>
				<Button id="html" onClick={handleHTMLClick}>Export to HTML</Button>
				<Button id="json" onClick={handleJSONClick}>Export to JSON</Button>
				<Button id="pdf" onClick={handlePDFClick}>Export to PDF</Button>
				<Button id="tsv" onClick={handleTSVClick}>Export to TSV</Button>
				<Button id="xlsx" onClick={handleXLSXClick}>Export to XLSX</Button>
				<Button id="xml" onClick={handleXMLClick}>Export to XML</Button>
			</div>
		</div>
	)
}
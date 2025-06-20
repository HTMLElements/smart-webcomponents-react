import 'smart-webcomponents-react/source/styles/smart.default.css';
import { createRoot } from 'react-dom/client';
import { Grid } from 'smart-webcomponents-react/grid';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const RowDetail = (
	{ rowData }
) => {

	let color = rowData.category === 'Brand indentity'
		? '#007ACC'
		: rowData.category === 'Industrial design'
			? '#CBC43F'
			: '#9641A4';

	const name = (rowData.projectLead || rowData.assignee)
		?.split(' ')[0]
		.toLowerCase() || '';

	const people = rowData.projectTeam?.split(', ') || [];

	const essentialKeys =
		[
			'name',
			'logo',
			'projectImages',
			'category',
			'completed',
			'project',
			'client',
			'projectLead',
			'assignee',
			'projectTeam',
			'website'
		];

	const excessKeys = Object.keys(rowData)
		.filter(key => !essentialKeys.includes(key));

	return (
		<div className="details-dialog">
			<div className="column-info">
				<h3>{rowData.name || ''}</h3>
			</div>
			<div className="column-info">
				<label>Category</label>
				<span
					style={{
						marginLeft: '7px',
						padding: '4px 18px',
						borderRadius: '10px 5px',
						color: '#fff',
						background: color
					}}
				>
					{rowData.category}
				</span>
			</div>
			<div className="column-info">
				<label>Completed</label>
				<CheckBox readonly checked={rowData.completed}></CheckBox>
			</div>
			<div className="column-info">
				<label>Project images</label>
				<img
					src={`https://www.htmlelements.com/demos/images/${rowData.logo || rowData.projectImages}.jpg`}
					alt="project"
					style={{ width: '100px' }}
				/>
			</div>
			<div className="column-info">
				<label>Client</label>
				<span
					style={{
						marginLeft: '7px',
						padding: '4px 18px',
						borderRadius: '10px 5px',
						background: '#E9EEF9'
					}}
				>
					{rowData.project || rowData.client || ''}
				</span>
			</div>
			<div className="column-info">
				<label>Project lead</label>
				<span className='person-template'>
					<img src={`https://www.htmlelements.com/demos/images/phonebook/${name}.png`} alt="" />
					<div>{rowData.projectLead || rowData.assignee}</div>
				</span>
			</div>
			<div className="column-info">
				<a href={rowData.website || ''}>{rowData.website || ''}</a>
			</div>
			<div className="column-info">
				<label>Project Team</label>
				<div style={{ display: 'flex' }}>
					{
						people.map(p => (
							<span className='person-template' key={p}>
								<img
									src={`https://www.htmlelements.com/demos/images/phonebook/${p.split(' ')[0].toLowerCase()}.png`}
									alt="person"
								/>
								<div style={{ display: 'contents' }}>{p}</div>
							</span>
						))
					}
				</div>
			</div>
			{
				excessKeys.map(key => {

					if (key === '$' || key === 'leaf' || key === 'level' || key === 'parent' || !rowData[key]) { return; }

					let labelText = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
					labelText = labelText.charAt(0).toUpperCase() + labelText.slice(1);

					return (
						<div className="column-info" key={key}>
							<label>{labelText}</label>
							<div>
								{
									key.includes('Date')
										? rowData[key].toLocaleDateString()
										: rowData[key]
								}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default function App() {

	const dataSource = [{
			name: 'Brand wrapper',
			category: 'Brand indentity',
			completed: true,
			projectImages: 'branding',
			client: 'Sofia\'s Coffee',
			projectLead: 'Nancy Winkler',
			website: 'htmlelements.com',
			projectTeam: 'Steven Vileid, Robert Ohno, Laura Rossi',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Brand packer',
			category: 'Brand indentity',
			completed: false,
			projectImages: 'brand',
			client: 'Center of History',
			projectLead: 'Anne Devling',
			website: 'jqwidgets.com',
			projectTeam: 'Andrew Fuller, Steven Vileid',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Engineer brand indentity',
			category: 'Brand indentity',
			completed: true,
			projectImages: 'museum',
			client: 'Engineer',
			projectLead: 'Michael Rossi',
			website: 'htmlelements.com',
			projectTeam: 'Michael Rossi, Anne Wilson',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Content building',
			category: 'Industrial design',
			completed: false,
			projectImages: 'cards',
			client: 'Tech Park',
			projectLead: 'Robert Peterson',
			website: 'htmlelements.com',
			projectTeam: 'Janet Nagase, Laura Rossi',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Design peer',
			category: 'Technology design',
			completed: true,
			projectImages: 'business-cards',
			client: 'System Corporation',
			projectLead: 'Andrew Vileid',
			website: 'https://htmlelements.com',
			projectTeam: 'Margaret Saylor, Nancy Burke',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		{
			name: 'Building block',
			category: 'Technology design',
			completed: false,
			projectImages: 'store',
			client: 'System Corporation',
			projectLead: 'Laura Bjorn',
			website: 'https://jqwidgets.com',
			projectTeam: 'Laura Bjorn',
			kickoffDate: new Date(),
			dueDate: new Date(new Date().setDate(new Date().getDate() + 30))
		},
		];

	const sorting = {
		enabled: true
	};

	const behavior = {
		columnResizeMode: 'split'
	};

	const layout = {
		rowHeight: 50
	};

	const rowDetail = {
		enabled: true,
		visible: true,
		dialog: {
			enabled: true,
			header: '',
			width: 500,
			height: 'auto',
			top: 100
		}
	};

	const columns = [{
		label: 'Name',
		dataField: 'name',
		freeze: true,
		allowResize: true
	},
	{
		label: 'Project lead',
		width: 150,
		dataField: 'projectLead',
		allowResize: true
	},
	{
		label: 'URL',
		width: 200,
		dataField: 'website',
		template: 'url',
		allowResize: true
	},
	{
		label: 'Project images',
		width: 200,
		dataField: 'projectImages',
		allowResize: true,
		template: function (formatObject) {
			formatObject.template = `<img style="width: 75px;" src="https://www.htmlelements.com/demos/images/${formatObject.value}.jpg">`;
		}
	},
	{
		label: 'Category',
		width: 200,
		dataField: 'category',
		allowResize: true,
		template: function (formatObject) {
			let color;
			if (formatObject.value === 'Brand indentity') {
				color = '#007ACC';
			} else if (formatObject.value === 'Industrial design') {
				color = '#CBC43F';
			} else {
				color = '#9641A4';
			}
			formatObject.template = `<span style="margin-left: 7px; padding: 4px 18px; border-radius: 10px 5px; color: #fff; background: ${color}";>${formatObject.value}</span>`;
		}
	},
	{
		label: 'Done',
		width: 80,
		dataField: 'completed',
		template: 'checkBox',
		align: 'center',
		allowResize: true
	},
	{
		label: 'Client',
		width: 200,
		dataField: 'client',
		allowResize: true,
		template: function (formatObject) {
			formatObject.template = `<span style="margin-right: 7px; margin-left: 10px; padding: 4px 18px; border-radius: 10px 5px; background: #E9EEF9";>${formatObject.value}</span>`;
		}
	},
	{
		label: 'Project team',
		width: 300,
		dataField: 'projectTeam',
		allowResize: true
	},
	{
		label: 'Kickoff date',
		width: 200,
		dataField: 'kickoffDate',
		cellsFormat: 'd',
		allowResize: true
	},
	{
		label: 'Due date',
		width: 200,
		dataField: 'dueDate',
		cellsFormat: 'd',
		allowResize: true
	}
	];

	const onRowDetailInit = (index, row, detail) => {

		const dialogContent = document.createElement('div');
		detail.appendChild(dialogContent);

		const dialogContentRoot = createRoot(dialogContent);
		dialogContentRoot.render(
			<RowDetail rowData={row.data}></RowDetail>
		)

		row.grid.rowDetail.dialog.header = row.data.name;

	}

	return (
		<div>
			<div className="demo-description">
				<h1>Grid URL column type</h1>
				URL field is intended to store a single URL in each cell. Clicking on
				a URL will bring you to that URL.</div>
			<Grid id="grid"
				dataSource={dataSource}
				sorting={sorting}
				behavior={behavior}
				layout={layout}
				rowDetail={rowDetail}
				columns={columns}
				onRowDetailInit={onRowDetailInit}
			></Grid>
		</div>
	)
}
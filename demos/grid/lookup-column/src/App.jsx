import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';


function GenerateData() {
    const sampleData = [], firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'], lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'], petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'], countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'], productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
    for (let i = 0; i < 50; i++) {
        const row = {};
        row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        row.birthday = new Date(Math.round(Math.random() * (2024 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
        row.petName = petNames[Math.floor(Math.random() * petNames.length)];
        row.country = countries[Math.floor(Math.random() * countries.length)];
        row.productName = productNames[Math.floor(Math.random() * productNames.length)];
        row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
        row.quantity = Math.round(Math.random() * (50 - 1) + 1);
        row.timeOfPurchase = new Date(2024, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
        row.expired = Math.random() >= 0.5;
        
        sampleData[i] = row;
    }
    return sampleData;
}


export default function App() {

	const dataSource = GenerateData();

    const dataSourceSettings = {
		dataFields: [
			'firstName: string',
			'lastName: string',
			'birthday: date',
			'petName: string',
			'country: string',
			'productName: string',
			'price: number',
			'quantity: number',
			'timeOfPurchase: date',
			'expired: boolean'
		],
		relations: [
		{
			id: 'lookupData',
			label: 'Other Data Source',
			columns: [
				{
					label: 'First Name', dataField: 'firstName'
				},
				{ label: 'Last Name', dataField: 'lastName' },
				{ label: 'Product', dataField: 'productName' },
			],
			dataSource: GenerateData()
		}
		]
	}
	
	const selection = {
		enabled: true,
		mode: 'extended'
	};
	
	const editing = {
		enabled: true,
		dialog: {
			height: 600
		}
	}
	
	const layout  = {
		cardMinWidth: 350
	}
	
	const columns = [
		  {
                    label: 'Order Name', width: 150, dataField: 'productName', showIcon: true, icon: 'productName' 
		},
		{
			label: 'Sales Person', width: 150, relationId: 'lookupData', relationField: 'firstName', template: 'list', showIcon: true, icon: 'lastName',
			editor:
			{
				template: 'multiComboInput',
				readonly: true,
				colorItems: true,
				dropDownButtonPosition: 'right',
				autoOpen: true,
				relationId: 'lookupData',
				relationField: 'firstName',
				pills: true,
				singleSelect: true
			}
		},
		{ label: 'Price', dataField: 'price', showIcon: true, icon: 'price', formatSettings: { formatString: 'c2' } },
		{
			label: 'Quantity', dataField: 'quantity', showIcon: true, icon: 'quantity', formatFunction: function (settings) {
				const value = settings.value;
				let className;
				if (value < 20) {
					className = 'red';
				}
				else if (value < 35) {
					className = 'yellow';
				}
				else {
					className = 'green';
				}
				settings.template = `<div class="${className}">${value}</div>`;
			}
		},
		{ label: 'Attachments', dataField: 'attachments', showIcon: true, editor: 'image', template: 'image' },
		{ label: 'Time of Purchase', width: 150, cellsAlign: 'right', dataField: 'timeOfPurchase', editor: 'timeInput', showIcon: true, icon: 'timeOfPurchase', formatSettings: { formatString: 'hh:mm tt' } },
		{
			label: 'Status', align: 'left', width: 90, dataField: 'expired', showIcon: true, icon: 'expired', formatFunction: function (settings) {
				settings.template = settings.value ? '☑' : '☐';
			}
		}
	]

	return (
		<div>
			<Grid 
				view="card"
				dataSource={dataSource}
				dataSourceSettings={dataSourceSettings}
				selection={selection}
				layout={layout}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		autoShowColumnFilterButton: false
	};

	const sorting = {
		enabled: true,
		mode: 'one'
	};

	const filtering = {
		enabled: true,
		filterRow: {
			visible: true
		}
	};

	const dataSource = GetData(1000);

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			filterEditor: {
				placeholder: 'Enter First Name',
				condition: 'CONTAINS'
			}
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			filterEditor: {
				placeholder: 'Enter Last Name',
				condition: 'STARTS_WITH'
			}
		},
		{
			label: 'Product',
			dataField: 'productName',
			filterEditor: {
				template: `
				<smart-input 
					drop-down-button-position="right" 
					placeholder="Enter Product" 
					style="border-radius: 0px; border: none; width: 100%; height:100%"
				></smart-input>`,
				onInit(column, editor) {

					const input = editor.querySelector('smart-input');
					input.dataSource = [
						'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
					];

					input.style.setProperty('--smart-background', 'transparent');

					input.onkeyup = (e) => {
						if (e.key === 'a' && e.ctrlKey) {
							input.select();
						}
					};

					input.onchange = () => {
						if (input.value === '') {
							column.filter = '';
						}
						else {
							column.filter = 'equal "' + input.value.trim() + '"';
						}
					}
				}
			}
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			align: 'right',
			cellsAlign: 'right',
			filterEditor: {
				template: `
				<input 
					style="background: transparent; border: none; outline: none; width: 100%; height:100%;" 
					type="number"
				/>`,
				onInit(column, editor) {

					const input = editor.querySelector('input');
					input.onchange = () => {
						if (!input.value) {
							column.filter = '';
						}
						else {
							column.filter = '>= ' + input.value;
						}
					}

				}
			}
		},
		{
			label: 'Delivery Date',
			dataField: 'date',
			align: 'right',
			cellsAlign: 'right',
			cellsFormat: 'd',
			filterEditor: {
				template: `
				<input 
					style="background: transparent; border: none; outline: none; width: 100%; height:100%;" 
					type="date"
				/>`,
				onInit(column, editor) {

					const input = editor.querySelector('input');

					input.onblur = () => input.value === '' ? column.filter = '' : {};

					input.onchange = () => column.filter = '>= ' + input.value;

				}
			}
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			align: 'right',
			cellsAlign: 'right',
			cellsFormat: 'c2',
			filterEditor: {
				template: `
				<input 
					max=5
					min=1 
					value=1 
					style="background: transparent; border: none; outline: none; margin-left:5%; width: 90%; height:25px;" 
					type="range"
				/>`,
				onInit(column, editor) {

					const input = editor.querySelector('input');

					editor.onchange = () => {

						if (parseInt(input.value) === 1) {
							column.filter = '';
						}
						else {
							column.filter = '>= ' + input.value;
						}

					}
				}
			}
		},
		{
			label: 'Available',
			dataField: 'available',
			align: 'center',
			cellsAlign: 'center'
		}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Filter Row - DataGrid filtering Custom UI Editors</h1>
				<p>
					This example shows how to customize the filter row editors.
				</p>
			</div>
			<Grid id="grid"
				appearance={appearance}
				sorting={sorting}
				filtering={filtering}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}
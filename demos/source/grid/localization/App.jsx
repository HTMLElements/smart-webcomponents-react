import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const gridRef = useRef(null);

	const columnLabels = {
		'en': {
			'firstName': 'First Name',
			'lastName': 'Last Name',
			'date': 'Date',
			'price': 'Price',
			'quantity': 'Quantity',
			'total': 'Total',
		},
		'de': {
			'firstName': 'Vorname',
			'lastName': 'Familienname',
			'price': 'Preis',
			'quantity': 'Quantität',
			'date': 'Datum',
			'total': 'Gesamt',
		}
	};

	const sorting = {
		enabled: true
	};

	const locale = 'de';

	const messages = {
		'en': {
			'columnMenuItemSortAsc': 'Sort {{mode}}',
			'columnMenuItemSortDesc': 'Sort {{mode}}',
			'columnMenuItemRemoveSort': 'Remove Sort'
		},
		'de': {
			'columnMenuItemSortAsc': 'Sortieren {{mode}}',
			'columnMenuItemSortDesc': 'Sortieren {{mode}}',
			'columnMenuItemRemoveSort': 'Sortierung entfernen',
		}
	};

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'quantity: number',
			'price: number',
			'date: date',
			'total: number'
		]
	});

	const columns = [{
		label: columnLabels['de'].firstName,
		dataField: 'firstName'
	},
	{
		label: columnLabels['de'].lastName,
		dataField: 'lastName'
	},
	{
		label: columnLabels['de'].date,
		dataField: 'date',
		cellsFormat: 'D',
		formatSettings: {
			Intl: {
				DateTimeFormat: {
					dateStyle: 'full'
				}
			}
		}
	},
	{
		label: columnLabels['de'].quantity,
		dataField: 'quantity'
	},
	{
		label: columnLabels['de'].price,
		dataField: 'price',
		cellsFormat: 'c2',
		formatSettings: {
			Intl: {
				NumberFormat: {
					style: 'currency',
					currency: 'EUR'
				}
			}
		}
	},
	{
		label: columnLabels['de'].total,
		dataField: 'total',
		cellsFormat: 'c2',
		formatSettings: {
			Intl: {
				NumberFormat: {
					style: 'currency',
					currency: 'EUR'
				}
			}
		}
	}
	];

	const setFormat = (column, locale) => {

		if (column.dataField === 'total' || column.dataField === 'price') {

			column.formatSettings = {
				Intl: {
					NumberFormat: {
						style: 'currency',
						currency: locale === 'de' ? 'EUR' : (locale === 'enUK' ? 'GBP' : 'USD')
					}
				}
			}

		}
		if (column.dataField === 'date') {

			column.formatSettings = {
				Intl: {
					DateTimeFormat: {
						dateStyle: 'full'
					}
				}
			}

		}
	}

	const update = (id) => {

		const grid = gridRef.current;

		// begin updating the grid.
		grid.beginUpdate();

		const locale = id !== 'de' ? 'en' : 'de';
		const columns = grid.columns;

		grid.locale = locale;

		for (let i = 0; i < columns.length; i++) {

			const column = columns[i];

			column.label = columnLabels[locale][column.dataField];

			setFormat(column, id);

		};
		
		// end update and refresh.
		grid.endUpdate(false);
	}

	const handleChangeLanguage = (lang) => update(lang)

	return (
		<div>
			<Grid
				id="grid"
				ref={gridRef}
				sorting={sorting}
				locale={locale}
				messages={messages}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Language:</div>
				<div className="option">
					<br />
					<RadioButton
						className="language"
						id="enUK"
						onChange={handleChangeLanguage.bind(null, "enUK")}
					>
						English (UK)</RadioButton>
					<br />
					<RadioButton
						className="language"
						id="enUS"
						onChange={handleChangeLanguage.bind(null, "enUS")}
					>
						English (USA)
					</RadioButton>
					<br />
					<RadioButton
						className="language"
						id="de"
						checked onChange={handleChangeLanguage.bind(null, "de")}
					>
						Deutsch
					</RadioButton>
				</div>
			</div>
		</div>
	)
}
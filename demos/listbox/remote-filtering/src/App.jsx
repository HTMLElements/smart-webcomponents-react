import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ListBox } from 'smart-webcomponents-react/listbox';

function App() {
	const listbox = useRef();

	useEffect(() => {
		const listBox = listbox.current;

		listBox.remoteFilteringDetails = {
			url: '../misc/customers.txt',
			success: function (filterQuery, items) {
				setTimeout(function () {
					console.log(items);
					if (!filterQuery) {
						listBox.dataSource = [];
						listBox.displayLoadingIndicator = false;
						return;
					}
					for (let i = 0; i < items.length; i++) {
						if (items[i].City.toLowerCase().indexOf(filterQuery.toLowerCase()) !== 0) {
							items[i] = undefined;
						}
					}
					items = items.filter((item) => item !== undefined);
					listBox.displayMember = 'CompanyName';
					listBox.valueMember = 'CustomerID';
					listBox.displayLoadingIndicator = false;
					listBox.dataSource = items;
				}, 500);
			},
			error: function (error) {
				console.log('Error');
			}
		};
	}, []);

	return (
		<div>
			<h3>Remote Filtering</h3>
			<label>Enter a filtering string(e.x. london)</label>
			<br />
			<br />
			<ListBox ref={listbox} filterable id="listBox" filterInputPlaceholder="Enter:" />
		</div>
	);
}

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useState, useRef, useEffect } from "react";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { GetEmployees } from './common/data';

export default function App() {
    const gridRef = useRef(null); // Ref for the grid

	const dataSource = new Smart.DataAdapter({
			dataSource: GetEmployees(),
			dataFields: [
				'id: number',
				'firstName: string',
				'lastName: string',
				'title: string',
				'notes: string',
				'city: string',
				'country: string',
				'homePhone: string'
			]
		})

		
	    const selection = {
			enabled: true,
			checkBoxes: {
				enabled: true
			}
		}
		
		const onRowInit = (index, row) => {
			if (index === 0 || index === 3 || index === 7 || index === 8 || index === 4) {
				row.selected = true;
			}
		}
	    
		const columns = [{
				label: 'Photo',
				cardSpan: true,
				cardHeight: 3,
				dataField: 'Photo',
				width: 60,
				cellsVerticalAlign: 'middle',
				verticalAlign: 'middle',
				align: 'center',
				cellsAlign: 'center',
				formatFunction(settings) {
					settings.template = '<img height="50" width="90" src="' + '../../images/phonebook/' + settings.row.data.firstName.toLowerCase() + '.png"/>';
				}
			},
			{
				label: 'First Name',
				dataField: 'firstName',
			},
			{
				label: 'Last Name',
				dataField: 'lastName'
			},
			{
				label: 'Title',
				dataField: 'title',
				align: 'left',
				width: 200
			},
			{
				label: 'City',
				dataField: 'city'
			},
			{
				label: 'Country',
				width: 70,
				cellsAlign: 'center',
				align: 'left',
				dataField: 'country'
			},
			{
				label: 'Phone',
				dataField: 'homePhone',
				align: 'left',
				template: '<a href="#{{value}}">{{value}}</a>'
			}
		]
				
		const exportData = () => {
			const grid = gridRef.current;
			if (grid) {
				grid.exportData('xlsx');
			}
		}
		
		const dataExport = {
			formatData: (rows, exportColumns, data, completed) => {
				let imagesCount = 0;
				let base64Count = 0;

				// convert image to base64
				const imageUrlToBase64 = async (url) => {
					const data = await fetch(url);
					const blob = await data.blob();
					return new Promise((resolve, reject) => {
						const reader = new FileReader();
						reader.readAsDataURL(blob);
						reader.onloadend = () => {
							const base64data = reader.result;
							resolve(base64data);
						};
						reader.onerror = reject;
					});
				};

				let hasImageUrl = false;
				for (let i = 0; i < rows.length; i++) {
					const rowData = rows[i];
					for (let j = 0; j < exportColumns.length; j++) {
						const column = exportColumns[j];

						if (column.dataField === 'Photo') {
							let value = '../../images/phonebook/' + rowData.firstName.toLowerCase() + '.png';

							let images = [];

							if (!value) {
								continue;
							}

							if (value.indexOf(',') >= 0) {
								images = value.split(',');
								let base64Images = [];
								if (images[0].indexOf('data:image') >= 0) {
									for (let f = 0; f < images.length; f += 2) {
										const image = images[f] + ',' + images[f + 1];
										base64Images.push(image);
									}
								}
								if (base64Images.length) {
									images = base64Images;
								}
							} else {
								images = [value];
							}

							// update the data cell 
							rowData[column.dataField] = images;
							imagesCount += images.length;
							for (let m = 0; m < images.length; m++) {
								const image = images[m];
								if (image.indexOf('data:image') >= 0) {
									base64Count++;
									continue;
								}

								hasImageUrl = true;
								imageUrlToBase64(image).then((data) => {
									images[m] = data;
									base64Count++;
									// when all images are in base64 format, export the Grid.
									if (base64Count === imagesCount) {
										completed(rows);
									}
								})
							}
						}
					}
				}

				if (base64Count === imagesCount && hasImageUrl === false) {
					completed(rows);
				}
			},
			addImageToCell: (index, column, currentValue, value) => {
				if (column === 'Photo' && value) {
					return {
						image: {
							id: 'myImage' + index,
							base64: value,
							imageType: 'png',
							width: 40,
							height: 50,
							position: {
								offsetX: 10,
								offsetY: 5.5,
							},
						},
						value
					}
				}
			},
			setRowHeight: (index) => {
				return 50;
			}
		}
		
		return (
			<div>
			  
				<Grid id="grid"
					ref={gridRef}
					dataSource={dataSource}
					dataExport={dataExport}
					columns={columns}
				></Grid>
			    <br />
			    <br />
			<div className="options">
				<div className="caption"></div>
				<div className="option">
					<Button onClick={exportData}>Export to XLSX</Button>
				</div>
			</div>
			</div>
		);
}

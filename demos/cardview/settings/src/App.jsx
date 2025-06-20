import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { CardView } from 'smart-webcomponents-react/cardview';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const cardview = useRef();
	const dropdownlist = useRef();

	const dataSource = this.generateData(50);

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			icon: 'firstName'
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			icon: 'lastName'
		},
		{
			label: 'Birthday',
			dataField: 'birthday',
			icon: 'birthday',
			formatSettings: {
				formatString: 'd'
			}
		},
		{
			label: 'Pet Name',
			dataField: 'petName',
			icon: 'petName'
		},
		{
			label: 'Product Name',
			dataField: 'productName',
			icon: 'productName'
		},
		{
			label: 'Price',
			dataField: 'price',
			icon: 'price',
			formatSettings: {
				formatString: 'c2'
			}
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			icon: 'quantity',
			formatFunction: function (settings) {
				const value = settings.value;
				let className;
				if (value < 20) {
					className = 'red';
				} else if (value < 35) {
					className = 'yellow';
				} else {
					className = 'green';
				}
				settings.template = `<div class="${className}">${value}</div>`;
			}
		},
		{
			label: 'Time of Purchase',
			dataField: 'timeOfPurchase',
			icon: 'timeOfPurchase',
			formatSettings: {
				formatString: 'hh:mm tt'
			}
		},
		{
			label: 'Travel photos',
			dataField: 'travelPhotos',
			icon: 'photo',
			formatFunction: photoFormatFunction,
			image: true
		},
		{
			label: 'Contact photos',
			dataField: 'contactPhotos',
			icon: 'photo',
			formatFunction: photoFormatFunction,
			image: true
		}
	];

	const cellOrientation = 'horizontal';
	const collapsible = true;
	const coverField = 'travelPhotos';
	const titleField = 'firstName';

	const handleCollapsibleChange = (event) => {
		cardview.current.collapsible = event.detail.value;
	}

	const handleIconsChange = () => {
		cardview.current.nativeElement.classList.toggle('disabled-icons');
	}

	const handleHorizontalChange = () => {
		cardview.current.cellOrientation = 'horizontal';
	}

	const handleVerticalChange = () => {
		cardview.current.cellOrientation = 'vertical';
	}

	const handleCropChange = () => {
		cardview.current.coverMode = 'crop';
	}

	const handleFitChange = () => {
		cardview.current.coverMode = 'fit';
	}

	const handleTitleFieldChange = () => {
		switch (dropdownlist.current.selectedIndexes[0]) {
			case 0:
				cardview.current.titleField = 'firstName';
				break;
			case 1:
				cardview.current.titleField = 'lastName';
				break;
			case 2:
				cardview.current.titleField = 'petName';
				break;
		}
	}

	function generateData() {
		const sampleData = [],
			firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'],
			lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'],
			petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'],
			productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'],
			contactImages = ['andrew.png', 'anne.png', 'avril.jpeg', 'janet.png', 'johanna.jpeg', 'johnny.jpeg', 'laura.png', 'margaret.png', 'Maria.jpeg', 'mark.jpeg', 'maya.jpeg', 'michael.png', 'monica.jpeg', 'nancy.png', 'robert.png', 'steven.jpeg', 'steven.png', 'toni.jpeg'];
		for (let i = 0; i < 20; i++) {
			const row = {};
			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
			row.petName = petNames[Math.floor(Math.random() * petNames.length)];
			row.productName = productNames[Math.floor(Math.random() * productNames.length)];
			row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
			row.quantity = Math.round(Math.random() * (50 - 1) + 1);
			row.timeOfPurchase = new Date(2018, 8, 19, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
			row.travelPhotos = [];
			row.contactPhotos = [];
			const maxPhotos = Math.floor(Math.random() * Math.floor(3)) + 1;
			for (let i = 0; i < maxPhotos; i++) {
				row.travelPhotos.push(`https://www.htmlelements.com/demos//images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
				row.contactPhotos.push(`https://www.htmlelements.com/demos//images/phonebook/${contactImages[Math.floor(Math.random() * contactImages.length)]}`);
			}
			row.travelPhotos = row.travelPhotos.join(',');
			row.contactPhotos = row.contactPhotos.join(',');
			sampleData[i] = row;
		}

		return sampleData;
	}

	function photoFormatFunction(settings) {
		const photoList = settings.value.split(',');
		let htmlResult = '';
		photoList.forEach((photoUrl) => {
			htmlResult += `<img class="thumb" src="${photoUrl}" />`;
		});
		settings.template = htmlResult;
	}

	return (
		<div>
			<div className="options" style={{ position: 'absolute', right: '10px' }}>
				<CheckBox id="collapsible" checked onChange={handleCollapsibleChange}>Collapsible cards</CheckBox>
				<CheckBox id="icons" checked onChange={handleIconsChange}>Icons</CheckBox>
				<div>
					<p>Cell orientation:</p>
					<RadioButton id="horizontal" checked onChange={handleHorizontalChange}>horizontal</RadioButton>
					<RadioButton id="vertical" onChange={handleVerticalChange}>vertical</RadioButton>
				</div>
				<div>
					<p>Cover mode:</p>
					<RadioButton id="crop" checked onChange={handleCropChange}>crop</RadioButton>
					<RadioButton id="fit" onChange={handleFitChange}>fit</RadioButton>
				</div>
				<p>Title:</p>
				<DropDownList
					ref={dropdownlist}
					id="titleField"
					dataSource={["First name", "Last name", "Pet name"]}
					selectedIndexes={[0]}
					onChange={handleTitleFieldChange}
				></DropDownList>
			</div>
			<CardView
				ref={cardview}
				id="cardView"
				dataSource={dataSource}
				columns={columns}
				cellOrientation={cellOrientation}
				collapsible={collapsible}
				coverField={coverField}
				titleField={titleField}
			></CardView>
		</div>
	)
}
import React from "react";
import ReactDOM from 'react-dom/client';
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
	const generateDataSource = (items) => {
		const basePath = 'https://www.htmlelements.com/demos/images/';
		const dataSource = Array(items).fill({});

		dataSource.forEach((element, index) => dataSource[index] = {
			image: `${basePath}carousel-medium-${index + 1}.jpg`,
			label: 'Slide ' + index,
			content: 'Content ' + index
		});

		return dataSource
	}

	return (
		<Carousel dataSource={generateDataSource(6)}></Carousel>
	);
}



export default App;

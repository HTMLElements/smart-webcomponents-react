import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Card } from 'smart-webcomponents-react/card';

const App = () => {
	const dataSource = {
		content: 'Swipe left/right'
	};

	useEffect(() => {
		// Define the card template
		document.getElementById('templateContainer').innerHTML = `
			<template id="cardTemplate">
				<div class="card-content">{{content}}</div>
			</template>
		`;

		// Add swipe event listeners
		const cards = document.querySelectorAll('smart-card');

		cards.forEach(card => {
			card.addEventListener('swipeleft', () => {
				card.classList.add('swipe-left');
			});

			card.addEventListener('swiperight', () => {
				card.classList.add('swipe-right');
			});

			card.addEventListener('animationend', () => {
				card.remove();
			});
		});
	}, []);

	return (
		<div>
			<smart-cards>
				{Array.from({ length: 21 }).map((_, index) => (
					<Card key={index} dataSource={dataSource} itemTemplate="cardTemplate" />
				))}
			</smart-cards>
			<div id="templateContainer"></div>
		</div>
	);
};

export default App;

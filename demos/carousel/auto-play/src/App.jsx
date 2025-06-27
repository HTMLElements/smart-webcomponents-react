import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const generateDataSource = (items) => {
  const headlines = [
    'Lorem ipsum dolor sit amet',
    'Pellentesque facilisis',
    'Mauris tempus elit et metus sollicitudin',
    'Cras dictum mauris et erat',
    'Duis in libero eu tortor'
  ];

  const contentParagraphs = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus ac bibendum volutpat...`,
    `Nullam eget fermentum tellus. Nullam hendrerit ante eget pharetra ornare...`,
    `Maecenas placerat vitae nunc sed egestas. Class aptent taciti sociosqu...`,
    `Cras euismod iaculis tellus et laoreet. Proin eleifend porttitor mattis...`,
    `Aliquam scelerisque elit pharetra, finibus turpis quis, dictum ex...`
  ];

  const dataSource = [];

  for (let i = 0; i < items; i++) {
    const headline = headlines[Math.floor(Math.random() * headlines.length)];
    const content = contentParagraphs[Math.floor(Math.random() * contentParagraphs.length)];

    dataSource.push({
      image: `./../../../src/images/carousel-medium-${i + 1}.jpg`,
      label: headline,
      content: content.substring(0, 60) + '...'
    });
  }

  return dataSource;
};

const App = () => {
  const dataSource = generateDataSource(6);

  return (
    <div>
      <Carousel
        dataSource={dataSource}
        autoPlay
        slideShow
        interval={2000}
        loop
      />
    </div>
  );
};

export default App;

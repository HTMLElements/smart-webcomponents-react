import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {

  const generateDataSource = (items) => {
    const headlines = [
      'Lorem ipsum dolor sit amet',
      'Pellentesque facilisis',
      'Mauris tempus elit et metus sollicitudin',
      'Cras dictum mauris et erat',
      'Duis in libero eu tortor'
    ];

    const contentParagraphs = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus ac bibendum volutpat, justo orci finibus nulla, sed laoreet velit mauris eget est.`,
      `Nullam eget fermentum tellus. Nullam hendrerit ante eget pharetra ornare. Pellentesque posuere arcu elit, ut sagittis sapien lobortis quis.`,
      `Maecenas placerat vitae nunc sed egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      `Cras euismod iaculis tellus et laoreet. Proin eleifend porttitor mattis. Maecenas in dolor dignissim, mollis lacus consequat, tempus nunc.`,
      `Aliquam scelerisque elit pharetra, finibus turpis quis, dictum ex. Morbi venenatis sodales commodo. Pellentesque habitant morbi tristique.`
    ];

    const dataSource = [];

    for (let i = 0; i < items; i++) {
      const randomIndex = Math.floor(Math.random() * 5);
      const item = {
        image: `./../../../src/images/carousel-medium-${i + 1}.jpg`,
        label: headlines[randomIndex].substring(0, 5 + Math.floor(Math.random() * 10)),
        content: contentParagraphs[randomIndex].substring(0, 50 + Math.floor(Math.random() * 10)) + '.'
      };
      dataSource.push(item);
    }

    return dataSource;
  };

  const dataSource = useMemo(() => generateDataSource(6), []);

  return (
    <div>
      <Carousel dataSource={dataSource} autoPlay slideShow interval={2000} loop />
      <Carousel dataSource={dataSource} className="fade" autoPlay slideShow interval={2000} loop />
      <Carousel dataSource={dataSource} className="slide" autoPlay slideShow interval={2000} loop />
      <Carousel dataSource={dataSource} className="slide-right" autoPlay slideShow interval={2000} loop />
      <Carousel dataSource={dataSource} className="slide-top" autoPlay slideShow interval={2000} loop />
      <Carousel dataSource={dataSource} className="slide-bottom" autoPlay slideShow interval={2000} loop />
    </div>
  );
};

export default App;

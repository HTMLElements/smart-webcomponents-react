import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useMemo } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  const carouselRef = useRef();

  const generateDataSource = (items = 1, headlineLength = 10, contentLength = 100) => {
    const headlines = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Pellentesque facilisis dui ut faucibus laoreet',
      'Mauris tempus elit et metus sollicitudin, sit amet tempor justo auctor',
      'Cras dictum mauris et erat fringilla, ac porta nisl faucibus',
      'Duis in libero eu tortor cursus porttitor'
    ];

    const contentParagraphs = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
      `Nullam eget fermentum tellus. Nullam hendrerit ante...`,
      `Maecenas placerat vitae nunc sed egestas...`,
      `Cras euismod iaculis tellus et laoreet...`,
      `Aliquam scelerisque elit pharetra, finibus turpis quis...`
    ];

    const dataSource = [];

    for (let i = 0; i < items; i++) {
      const image = `./../../../src/images/carousel-medium-${i + 1}.jpg`;
      const headline = headlines[Math.floor(Math.random() * headlines.length)].substring(0, headlineLength);
      const content = contentParagraphs[Math.floor(Math.random() * contentParagraphs.length)].substring(0, contentLength) + '.';
      dataSource.push({ image, headline, content });
    }

    return dataSource;
  };

  const dataSource = useMemo(() => generateDataSource(6, 30, 250), []);

  useEffect(() => {
    const template = document.createElement('template');
    template.id = 'itemTemplate';
    template.innerHTML = `
      <div class="image-container" style="background-image:url('{{image}}')">
        <span class="date-container">29 July 2018</span>
      </div>
      <div class="text-container">
        <h2>{{headline}}</h2>
        <p>{{content}}</p>
        <p>Read more ...</p>
      </div>
      <div class="footer-container">
        <span class="footer-item">
          <i class="material-icons">local_offer</i>
          <span class="footer-text">Art</span>
        </span>
        <span class="footer-item"><i class="material-icons">person</i> admin</span>
        <span class="footer-item"><i class="material-icons">forum</i> 4</span>
        <span class="footer-item"><i class="material-icons">favorite</i> Favorite</span>
      </div>`;

    document.body.appendChild(template);

    if (carouselRef.current) {
      carouselRef.current.itemTemplate = template.id;
    }
  }, []);

  return (
    <div>
      <Carousel
        dataSource={dataSource}
        ref={carouselRef}
        id="carousel"
        autoPlay
        loop
        wheel
        keyboard
        displayMode="3d"
        interval={10000}
      />
    </div>
  );
};

export default App;

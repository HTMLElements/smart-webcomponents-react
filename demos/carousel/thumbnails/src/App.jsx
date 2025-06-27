import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  const carouselRef = useRef();

  const generateDataSource = (items) => {
    const basePath = './../../../src/images/';
    return Array.from({ length: items }, (_, index) => ({
      image: `${basePath}carousel-large-${index + 1}.jpg`,
      thumb: `${basePath}carousel-xs-${index + 1}.jpg`
    }));
  };

  const dataSource = generateDataSource(7);

  useEffect(() => {
    const template = document.createElement('template');
    template.innerHTML = '<img src="{{thumb}}"/>';
    template.id = 'thumb';

    document.body.appendChild(template);

    if (carouselRef.current) {
      carouselRef.current.indicatorTemplate = 'thumb';
    }

    // Optional: clean up the template when the component unmounts
    return () => {
      const existing = document.getElementById('thumb');
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <div>
      <Carousel
        ref={carouselRef}
        id="carousel"
        dataSource={dataSource}
        autoPlay
        slideShow
        loop
      />
    </div>
  );
};

export default App;

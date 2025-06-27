import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from 'react';
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  const generateDataSource = (items) => {
    const basePath = 'https://www.htmlelements.com/demos/images/';
    return Array.from({ length: items }, (_, index) => ({
      image: `${basePath}carousel-medium-${index + 1}.jpg`,
      label: `Slide ${index}`,
      content: `Content ${index}`
    }));
  };

  const dataSource = useMemo(() => generateDataSource(6), []);

  return <Carousel dataSource={dataSource} autoPlay slideShow loop />;
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  const generateDataSource = (items) => {
    const dataSource = [];
    for (let i = 0; i < items; i++) {
      dataSource.push({
        image: `./../../../src/images/carousel-square-${i + 1}.jpg`
      });
    }
    return dataSource;
  };

  const dataSource = useMemo(() => generateDataSource(7), []);

  return (
    <div>
      <Carousel
        dataSource={dataSource}
        id="carousel"
        className="vertical circle"
        autoPlay
        slideShow
        loop
        keyboard
        displayMode="3d"
        interval={10000}
      />
    </div>
  );
};

export default App;

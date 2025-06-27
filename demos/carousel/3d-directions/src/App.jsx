import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo, useEffect } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  // Generate image data source
  const dataSource = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => ({
      image: `./../../../src/images/carousel-square-${index + 1}.jpg`
    }));
  }, []);

  useEffect(() => {
    // Component did mount logic (if needed)
  }, []);

  return (
    <div>
      <h2>Horizontal 3D Carousel</h2>
      <Carousel
        dataSource={dataSource}
        id="carouselHorizontal"
        className="horizontal"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
        interval={10000}
      />

      <Carousel
        dataSource={dataSource}
        id="carouselHorizontal2"
        className="horizontal circle"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
        interval={10000}
      />

      <br />
      <br />

      <h2>Bottom - Top 3D Carousel</h2>
      <Carousel
        dataSource={dataSource}
        id="carouselBottomTop"
        className="bottom-top"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
      />

      <Carousel
        dataSource={dataSource}
        id="carouselBottomTop2"
        className="bottom-top circle"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
      />

      <br />
      <br />

      <h2>Top - Bottom 3D Carousel</h2>
      <Carousel
        dataSource={dataSource}
        id="carouselTopBottom"
        className="top-bottom"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
      />

      <Carousel
        dataSource={dataSource}
        id="carouselTopBottom2"
        className="top-bottom circle"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
      />
    </div>
  );
};

export default App;

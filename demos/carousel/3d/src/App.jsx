import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useMemo } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  // Generate image data source (memoized to avoid regeneration)
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
      <h2>3d Carousel Square Style</h2>
      <Carousel
        dataSource={dataSource}
        id="carouselSquare"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
        interval={10000}
      />

      <h2>3d Carousel Circle Style</h2>
      <Carousel
        dataSource={dataSource}
        id="carouselCircle"
        className="circle"
        autoPlay
        slideShow
        loop
        hideIndicators
        keyboard
        displayMode="3d"
        interval={10000}
      />
    </div>
  );
};

export default App;

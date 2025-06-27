import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useMemo, useCallback } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { TextBox } from 'smart-webcomponents-react/textbox';

const App = () => {
  const carouselRef = useRef(null);
  const textboxRef = useRef(null);

  const generateDataSource = (items) => {
    return Array.from({ length: items }, (_, index) => ({
      image: `./../../../src/images/carousel-medium-${index + 1}.jpg`,
      label: 'Slide ' + index,
      content: 'Content ' + index
    }));
  };

  const dataSource = useMemo(() => generateDataSource(6), []);

  const handleChange = useCallback((property, event) => {
    if (carouselRef.current) {
      carouselRef.current[property] = property.startsWith('hide')
        ? !event.detail.value
        : event.detail.value;
    }
  }, []);

  const handleClick = useCallback((methodName) => {
    if (carouselRef.current && typeof carouselRef.current[methodName] === 'function') {
      carouselRef.current[methodName]();
    }
  }, []);

  const handleSlideTo = useCallback(() => {
    if (carouselRef.current && textboxRef.current) {
      const value = parseInt(textboxRef.current.value, 10);
      carouselRef.current.slideTo(isNaN(value) ? 0 : value);
    }
  }, []);

  return (
    <div>
      <Carousel ref={carouselRef} dataSource={dataSource} id="carousel" />

      <div id="navigationBox">
        <CheckBox onChange={(e) => handleChange('hideArrows', e)} id="arrows" checked>
          Show Arrows
        </CheckBox>
        <br />
        <CheckBox onChange={(e) => handleChange('hideIndicators', e)} id="indicators" checked>
          Show Indicators
        </CheckBox>
        <br />
        <CheckBox onChange={(e) => handleChange('wheel', e)} id="wheel">
          Navigate via Mouse Wheel
        </CheckBox>
        <br />
        <CheckBox onChange={(e) => handleChange('swipe', e)} id="swipe">
          Navigate via Swipe Left / Swipe Right
        </CheckBox>
        <br />
        <CheckBox onChange={(e) => handleChange('slideShow', e)} id="slideShow">
          SlideShow
        </CheckBox>
        <br />
        <CheckBox onChange={(e) => handleChange('loop', e)} id="loop">
          Loop
        </CheckBox>
        <br />
        <hr />
        <Button onClick={() => handleClick('play')} id="playButton">
          Play
        </Button>
        <Button onClick={() => handleClick('pause')} id="pauseButton">
          Pause
        </Button>
        <br />
        <br />
        <Button onClick={() => handleClick('prev')} id="prevButton">
          Prev
        </Button>
        <Button onClick={() => handleClick('next')} id="nextButton">
          Next
        </Button>
        <br />
        <br />
        <Button onClick={handleSlideTo} id="slideToButton">
          Slide To
        </Button>
        <br />
        <TextBox ref={textboxRef} id="slideToValue" placeholder="Value" />
      </div>
    </div>
  );
};

export default App;

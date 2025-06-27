import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  const carouselRef = useRef();

  const dataSource = [
    {
      label: 'Mauris eget nisi ipsum',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisi ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. In diam nisi, congue in leo quis, sodales pharetra elit. Sed eu facilisis lectus.`,
      image: `./../../../src/images/carousel-square-1.jpg`
    },
    {
      label: 'Ut faucibus commodo velit',
      content: `Duis non viverra nisl, at varius arcu. Ut faucibus commodo velit id blandit. In diam nisi, congue in leo quis, sodales pharetra elit.`,
      image: `./../../../src/images/carousel-square-2.jpg`
    },
    {
      label: 'Donec tincidunt',
      content: `Nulla imperdiet eleifend laoreet. Fusce tincidunt ligula nisi, ac lobortis neque aliquet ac. Donec tincidunt, justo et viverra feugiat.`,
      image: `./../../../src/images/carousel-square-3.jpg`
    }
  ];

  useEffect(() => {
    const template = document.createElement('template');
    template.id = 'itemTemplate';
    template.innerHTML = `
      <h3 class="template-header">{{label}}</h3>
      <p class="template-content">{{content}}</p>
      <img class="template-image" src="{{image}}" />
    `;

    document.body.appendChild(template);

    if (carouselRef.current) {
      carouselRef.current.itemTemplate = template.id;
    }

    // Optional cleanup if templates need to be removed
    return () => {
      if (document.getElementById('itemTemplate')) {
        document.getElementById('itemTemplate').remove();
      }
    };
  }, []);

  return (
    <div>
      <Carousel
        ref={carouselRef}
        id="carousel"
        className="slide"
        autoPlay
        slideShow
        loop
        dataSource={dataSource}
      />
    </div>
  );
};

export default App;

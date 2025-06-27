import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { Card } from 'smart-webcomponents-react/card';

const App = () => {
  const carouselRef = useRef();

  const dataSource = [
    { HTMLcontent: '<div id="content1"></div>' },
    { HTMLcontent: '<div id="content2"></div>' },
    { HTMLcontent: '<div id="content3"></div>' }
  ];

  const handleReady = () => {
    const renderCards = (id, cards) => {
      const root = ReactDOM.createRoot(document.getElementById(id));
      root.render(<>{cards}</>);
    };

    renderCards('content1', [
      <Card key="1">
        <img src="./../../../src/images/carousel-small-1.jpg" style={{ width: '100%' }} />
        <h3>Lorem ipsum dolor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non semper magna, quis congue ipsum.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>,
      <Card key="2">
        <img src="./../../../src/images/carousel-small-2.jpg" style={{ width: '100%' }} />
        <h3>Aenean condimentum</h3>
        <p>
          Pellentesque vitae enim vel neque viverra suscipit ut placerat nunc. Curabitur pretium tellus sit.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>,
      <Card key="3">
        <img src="./../../../src/images/carousel-small-3.jpg" style={{ width: '100%' }} />
        <h3>Nulla mollis velit</h3>
        <p>
          Proin mollis elementum urna non sodales. Phasellus tempus pretium nibh at luctus.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>
    ]);

    renderCards('content2', [
      <Card key="4">
        <img src="./../../../src/images/carousel-small-4.jpg" style={{ width: '100%' }} />
        <h3>Nullam ac tellus</h3>
        <p>
          Sed aliquet eget sem in ornare. Proin lacinia, nisi et aliquam tincidunt, risus purus gravida lorem.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>,
      <Card key="5">
        <img src="./../../../src/images/carousel-small-5.jpg" style={{ width: '100%' }} />
        <h3>Maecenas turpis velit</h3>
        <p>
          Aenean sit amet felis ac enim eleifend luctus et eget justo. Sed sit amet dui tellus.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>,
      <Card key="6">
        <img src="./../../../src/images/carousel-small-6.jpg" style={{ width: '100%' }} />
        <h3>Nunc arcu lectus</h3>
        <p>
          Etiam varius ultrices mauris a iaculis. Duis mauris mi, viverra sodales ex sit amet.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>
    ]);

    renderCards('content3', [
      <Card key="7">
        <img src="./../../../src/images/carousel-small-7.jpg" style={{ width: '100%' }} />
        <h3>Nulla mollis velit</h3>
        <p>
          Nulla ut cursus leo. Nullam ac tellus porta, laoreet est in, condimentum velit.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>,
      <Card key="8">
        <img src="./../../../src/images/carousel-small-8.jpg" style={{ width: '100%' }} />
        <h3>Aenean ullamcorper</h3>
        <p>
          Proin vehicula, sapien bibendum consectetur ornare, lacus velit posuere lacus.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>,
      <Card key="9">
        <img src="./../../../src/images/carousel-small-9.jpg" style={{ width: '100%' }} />
        <h3>Vestibulum faucibus</h3>
        <p>
          Sed condimentum felis ac faucibus cursus. Pellentesque ut vestibulum massa.
        </p>
        <a href="#">Lorem Ipsum</a>
      </Card>
    ]);
  };

  return (
    <div>
      <Carousel
        ref={carouselRef}
        dataSource={dataSource}
        onReady={handleReady}
        id="carousel"
        className="slide"
        autoPlay
        slideShow
        loop
      />
    </div>
  );
};

export default App;

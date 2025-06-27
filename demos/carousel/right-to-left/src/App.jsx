import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Carousel } from 'smart-webcomponents-react/carousel';

const App = () => {
  const generateDataSource = (items) => {
    return Array.from({ length: items }, (_, index) => ({
      image: `./../../../src/images/carousel-medium-${index + 1}.jpg`,
      label: 'שקופית ' + index,
      content: 'תוכן ' + index
    }));
  };

  const dataSource = useMemo(() => generateDataSource(6), []);

  return (
    <div>
      <Carousel dataSource={dataSource} rightToLeft keyboard />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {

  useEffect(() => {
    const template1 = document.createElement('template'),
      template2 = document.createElement('template'),
      template3 = document.createElement('template'),
      template4 = document.createElement('template');

    template1.id = 'template1';
    template1.innerHTML = '<img src="https://www.htmlelements.com/demos//images/sun.png" />Sun';
    template2.id = 'template2';
    template2.innerHTML = '<img src="https://www.htmlelements.com/demos//images/earth.png" />Earth';
    template3.id = 'template3';
    template3.innerHTML = '<img src="https://www.htmlelements.com/demos//images/moon.png" />Moon';
    template4.id = 'template4';
    template4.innerHTML = '<img src="https://www.htmlelements.com/demos//images/mars.png" />Mars';

    document.body.appendChild(template1);
    document.body.appendChild(template2);
    document.body.appendChild(template3);
    document.body.appendChild(template4);

    // Optional cleanup: remove templates when component unmounts
    return () => {
      document.body.removeChild(template1);
      document.body.removeChild(template2);
      document.body.removeChild(template3);
      document.body.removeChild(template4);
    };
  }, []);

  return (
    <div>
      <Tabs id="tabs">
        <TabItem label="template1">The Sun is the star at the center of the Solar System.</TabItem>
        <TabItem label="template2" selected>
          Earth is the third planet from the Sun and the only object in the Universe known to harbor life.
        </TabItem>
        <TabItem label="template3">
          The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite.
        </TabItem>
        <TabItem label="template4">
          Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury.
        </TabItem>
      </Tabs>
    </div>
  );
};

export default App;

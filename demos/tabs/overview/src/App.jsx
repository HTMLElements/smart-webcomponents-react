import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => (
  <div>
    <div className="smart-demo-container">
      {/* Your descriptive sections */}
      <section>
        <h2>Tabs make it easy to explore and switch between different views.</h2>
        <div className="module">
          <p>Tabs enable content organization at a high level, such as switching between
            views, data sets, or functional aspects of an app.</p>
          <h3>Types of Tabs Layouts</h3>
          <p>Fixed<br />Scrollable<br />Overflow with DropDown<br />Shrink<br />Wrap</p>
          <h3>Tab labels</h3>
          <p>Tab labels may include icons and text.</p>
        </div>
      </section>
      {/* Example Tabs */}
      <Tabs id="tabs3" className="animation mobile">
        <TabItem label="Tab One">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TabItem>
        <TabItem label="Tab Two">Contrary to popular belief, Lorem Ipsum is not simply random text.</TabItem>
        <TabItem label="Tab Three">It is a long established fact that a reader will be distracted by the readable content.</TabItem>
      </Tabs>
      {/* More Tabs as needed */}
    </div>
  </div>
);

export default App;

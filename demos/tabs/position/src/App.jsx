import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabs = useRef(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // Handlers for radio buttons to select tabs programmatically
  const handleRadioButtonChange = (index) => {
    setSelectedTabIndex(index);
    // Also select tab imperatively in case it's needed
    tabs.current?.select(index);
  };

  return (
    <div>
      <p>tabPosition: 'hidden'</p>
      <Tabs
        ref={tabs}
        id="hiddenTabs"
        className="demoTabs animation"
        tabPosition="hidden"
        selectedIndex={selectedTabIndex}
        onChange={e => setSelectedTabIndex(e.detail.index)}
      >
        <TabItem label="Snow leopard">
          <div className="demoContainer tabsContent">
            The snow leopard or ounce (<em>Panthera uncia</em> syn. <em>Uncia uncia</em>)
            is a large cat native to the mountain ranges of Central and South Asia.
          </div>
          <div className="demoContainer tabsContent">
            <img
              className="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lightmatter_snowleopard.jpg/220px-Lightmatter_snowleopard.jpg"
              alt="Snow leopard"
            />
          </div>
        </TabItem>
        <TabItem label="Cheetah">
          <div className="demoContainer tabsContent">
            The cheetah (<em>Acinonyx jubatus</em>) is a large felid of the subfamily Felinae.
            Cheetahs are active mainly during the day, with hunting their major activity.
          </div>
          <div className="demoContainer tabsContent">
            <img
              className="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/220px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg"
              alt="Cheetah"
            />
          </div>
        </TabItem>
        <TabItem label="Cougar">
          <div className="demoContainer tabsContent">
            The cougar (<em>Puma concolor</em>), also commonly known as the mountain lion,
            puma, panther, or catamount, is a large felid of the subfamily Felinae native
            to the Americas.
          </div>
          <div className="demoContainer tabsContent">
            <img
              className="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cougar_25.jpg/220px-Cougar_25.jpg"
              alt="Cougar"
            />
          </div>
        </TabItem>
      </Tabs>

      <br /><br /><br />

      <p>tabPosition: 'top'</p>
      <Tabs className="demoTabs animation" selectedIndex={0}>
        <TabItem label="Bengal tiger">
          <div className="demoContainer tabsContent">
            The Bengal tiger (<em>Panthera tigris tigris</em>) is the most numerous tiger.
            By 2011, the total population was estimated at fewer than 2,500 individuals with a decreasing trend.
          </div>
          <div className="demoContainer tabsContent">
            <img
              className="tabsDemoImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
              alt="Bengal tiger"
            />
          </div>
        </TabItem>
        {/* ... (rest of your TabItems unchanged) */}
      </Tabs>

      {/* Repeat other Tabs as in your original code */}

      <br /><br /><br />

      <div className="options">
        <div className="caption">Select Tab</div>
        <div className="option">
          <RadioButton
            checked={selectedTabIndex === 0}
            groupName="selectTab"
            onChange={() => handleRadioButtonChange(0)}
          >
            Snow leopard
          </RadioButton>
          <br />
          <RadioButton
            checked={selectedTabIndex === 1}
            groupName="selectTab"
            onChange={() => handleRadioButtonChange(1)}
          >
            Cheetah
          </RadioButton>
          <br />
          <RadioButton
            checked={selectedTabIndex === 2}
            groupName="selectTab"
            onChange={() => handleRadioButtonChange(2)}
          >
            Cougar
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabs = useRef();

  const handleTopChange = () => {
    tabs.current.tabPosition = 'top';
  };

  const handleBottomChange = () => {
    tabs.current.tabPosition = 'bottom';
  };

  const handleLeftChange = () => {
    tabs.current.tabPosition = 'left';
  };

  const handleRightChange = () => {
    tabs.current.tabPosition = 'right';
  };

  const handleHorizontalChange = () => {
    tabs.current.tabTextOrientation = 'horizontal';
  };

  const handleVerticalChange = () => {
    tabs.current.tabTextOrientation = 'vertical';
  };

  const handleClickChange = () => {
    tabs.current.selectionMode = 'click';
  };

  const handleDblclickChange = () => {
    tabs.current.selectionMode = 'dblclick';
  };

  const handleMouseenterChange = () => {
    tabs.current.selectionMode = 'mouseenter';
  };

  const handleNoneChange = () => {
    tabs.current.selectionMode = 'none';
  };

  return (
    <div>
      <Tabs
        ref={tabs}
        id="tabs"
        className="demoTabs"
        selectedIndex={3}
        tabPosition="left"
        selectionMode="click"
        tabTextOrientation="vertical"
      >
        <TabItem label="New York">
          The City of New York, usually known as either New York City (NYC), or simply New York (NY), is the most populous
          city in the United States.
        </TabItem>
        <TabItem label="Hong Kong">
          Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China (HKSAR), is
          a city and special administrative region of China in the eastern Pearl River Delta by the South China Sea.
        </TabItem>
        <TabItem label="Troyan">
          Troyan is a town remembering the name of Roman Emperor Trajan, in Lovech Province in central Bulgaria.
        </TabItem>
        <TabItem label="Bali">
          Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.
        </TabItem>
      </Tabs>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <p>Tab position</p>
          <RadioButton id="top" groupName="tabPosition" onChange={handleTopChange}>top</RadioButton>
          <br />
          <RadioButton id="bottom" groupName="tabPosition" onChange={handleBottomChange}>bottom</RadioButton>
          <br />
          <RadioButton id="left" groupName="tabPosition" checked onChange={handleLeftChange}>left</RadioButton>
          <br />
          <RadioButton id="right" groupName="tabPosition" onChange={handleRightChange}>right</RadioButton>
        </div>
        <div className="option">
          <p>Tab text orientation</p>
          <RadioButton id="horizontal" groupName="tabTextOrientation" onChange={handleHorizontalChange}>horizontal</RadioButton>
          <br />
          <RadioButton id="vertical" groupName="tabTextOrientation" checked onChange={handleVerticalChange}>vertical</RadioButton>
        </div>
        <div className="option">
          <p>Selection mode</p>
          <RadioButton id="click" groupName="selectionMode" checked onChange={handleClickChange}>click</RadioButton>
          <br />
          <RadioButton id="dblclick" groupName="selectionMode" onChange={handleDblclickChange}>dblclick</RadioButton>
          <br />
          <RadioButton id="mouseenter" groupName="selectionMode" onChange={handleMouseenterChange}>mouseenter</RadioButton>
          <br />
          <RadioButton id="none" groupName="selectionMode" onChange={handleNoneChange}>none</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;

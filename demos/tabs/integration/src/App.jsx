import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  return (
    <div>
      <Tabs selectedIndex={1}>
        <TabItem label="Gauge">
          <Gauge
            analogDisplayType="fill"
            digitalDisplay
            startAngle={-30}
            endAngle={210}
            min={0}
            max={100}
            value={30}
          />
        </TabItem>
        <TabItem label="ListBox">
          <ListBox>
            <ListItemsGroup label="Swedish Cars">
              <ListItem selected value="volvo">Volvo</ListItem>
              <ListItem value="saab">Saab</ListItem>
              <ListItem value="scania">Scania</ListItem>
            </ListItemsGroup>
            <ListItemsGroup label="German Cars">
              <ListItem value="mercedes">Mercedes</ListItem>
              <ListItem value="vw">VW</ListItem>
              <ListItem value="audi">Audi</ListItem>
              <ListItem value="porsche">Porsche</ListItem>
            </ListItemsGroup>
            <ListItemsGroup label="Japanese Cars">
              <ListItem value="mazda">Mazda</ListItem>
              <ListItem value="honda">Honda</ListItem>
              <ListItem value="infinity">Infinity</ListItem>
              <ListItem value="mitsubishi">Mitsubishi</ListItem>
              <ListItem value="toyota">Toyota</ListItem>
            </ListItemsGroup>
          </ListBox>
        </TabItem>
        <TabItem label="Tank">
          <Tank id="tank" orientation="vertical" value={90} />
        </TabItem>
        <TabItem label="SwitchButton">
          <SwitchButton checked />
          <br />
          <SwitchButton />
        </TabItem>
      </Tabs>
    </div>
  );
};

export default App;

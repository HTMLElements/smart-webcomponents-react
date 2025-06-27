import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { ListBox, ListItem } from 'smart-webcomponents-react/listbox';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
  const windowRef = useRef();
  const tabitem = useRef();
  const tabitem2 = useRef();
  const tabitem3 = useRef();

  const handleClick = () => {
    if (windowRef.current.opened) {
      windowRef.current.close();
    } else {
      windowRef.current.open();
    }
  };

  useEffect(() => {
    // Inject templates into the container
    const container = document.getElementById('templateContainer');
    if (container) {
      container.innerHTML = `
        <template id="primaryTemplate">Primary <span class="smart-badge smart-badge-success">10</span></template>
        <template id="promotionsTemplate">Promotions <span class="smart-badge smart-badge-info">0</span></template>
        <template id="spamTemplate">Spam <span class="smart-badge smart-badge-danger">1</span></template>
      `;

      if (tabitem.current) tabitem.current.label = 'primaryTemplate';
      if (tabitem2.current) tabitem2.current.label = 'promotionsTemplate';
      if (tabitem3.current) tabitem3.current.label = 'spamTemplate';
    }
  }, []);

  return (
    <div>
      <div className="options">
        <div className="option">
          <Button id="openButton" onClick={handleClick}>Open/Close</Button>
        </div>
      </div>
      <div id="templateContainer"></div>
      <Window ref={windowRef} opened label="Mailbox">
        <Tabs id="tabs" selectedIndex={0}>
          <TabItem ref={tabitem}>
            <ListBox className="mailList">
              <ListItem>Re: Exam <strong className="date">9/1/17</strong></ListItem>
              <ListItem>Dinner tonight? <strong className="date">8/16/17</strong></ListItem>
              <ListItem>Hi <strong className="date">8/1/17</strong></ListItem>
              <ListItem>About the interview <strong className="date">7/11/17</strong></ListItem>
              <ListItem>Re: Query about car purchase <strong className="date">6/29/17</strong></ListItem>
              <ListItem>Your weekly newsletter <strong className="date">6/17/17</strong></ListItem>
              <ListItem>Important update <strong className="date">5/30/17</strong></ListItem>
              <ListItem>Re: Introduction <strong className="date">5/30/17</strong></ListItem>
              <ListItem>Welcome to our forums <strong className="date">5/28/17</strong></ListItem>
              <ListItem>Your weekly newsletter <strong className="date">4/17/17</strong></ListItem>
            </ListBox>
          </TabItem>
          <TabItem ref={tabitem2}>Your Promotions tab is empty.</TabItem>
          <TabItem ref={tabitem3}>
            <ListBox className="mailList">
              <ListItem>Join our club today! <strong className="date">9/1/17</strong></ListItem>
            </ListBox>
          </TabItem>
        </Tabs>
      </Window>
    </div>
  );
};

export default App;

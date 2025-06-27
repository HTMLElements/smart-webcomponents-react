import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from 'react';
import { ListBox, ListItem } from 'smart-webcomponents-react/listbox';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {

  useEffect(() => {
    const primaryTemplate = document.createElement('template');
    const promotionsTemplate = document.createElement('template');
    const spamTemplate = document.createElement('template');

    primaryTemplate.id = 'primaryTemplate';
    primaryTemplate.innerHTML = 'Primary <span class="smart-badge smart-badge-success">10</span>';

    promotionsTemplate.id = 'promotionsTemplate';
    promotionsTemplate.innerHTML = 'Promotions <span class="smart-badge smart-badge-info">0</span>';

    spamTemplate.id = 'spamTemplate';
    spamTemplate.innerHTML = 'Spam <span class="smart-badge smart-badge-danger">1</span>';

    document.body.appendChild(primaryTemplate);
    document.body.appendChild(promotionsTemplate);
    document.body.appendChild(spamTemplate);

    // Cleanup function to remove templates when component unmounts
    return () => {
      document.body.removeChild(primaryTemplate);
      document.body.removeChild(promotionsTemplate);
      document.body.removeChild(spamTemplate);
    };
  }, []);

  return (
    <div>
      <Tabs id="tabs" selectedIndex={0} animation="none">
        <TabItem label="primaryTemplate">
          <ListBox className="mailList">
            <ListItem>Re: Exam <strong className="date">9/1/17</strong></ListItem>
            <ListItem>Dinner tonight? <strong className="date">8/16/17</strong></ListItem>
            <ListItem>Hi <strong className="date">8/1/17</strong></ListItem>
            <ListItem>About the interview <strong className="date">7/11/17</strong></ListItem>
            <ListItem>Re: Query about car purchase <strong className="date">6/29/17</strong></ListItem>
            <ListItem>Your weekly newsletter <strong className="date">6/17/17</strong></ListItem>
          </ListBox>
        </TabItem>
        <TabItem label="promotionsTemplate">
          Your Promotions tab is empty.
        </TabItem>
        <TabItem label="spamTemplate">
          <ListBox className="mailList">
            <ListItem>Join our club today! <strong className="date">9/1/17</strong></ListItem>
          </ListBox>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default App;

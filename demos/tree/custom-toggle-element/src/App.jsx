import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);
  const tree2 = useRef(null);

  const handleNearChange = () => {
    if (tree.current) tree.current.toggleElementPosition = 'near';
    if (tree2.current) tree2.current.toggleElementPosition = 'near';
  };

  const handleFarChange = () => {
    if (tree.current) tree.current.toggleElementPosition = 'far';
    if (tree2.current) tree2.current.toggleElementPosition = 'far';
  };

  const handleAutoHideToggleElementChange = (event) => {
    const autoHideToggleElement = event.detail.value;
    if (tree.current) tree.current.autoHideToggleElement = autoHideToggleElement;
    if (tree2.current) tree2.current.autoHideToggleElement = autoHideToggleElement;
  };

  return (
    <div>
      <Tree ref={tree} id="tree1" className="animation">
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup>
          Solutions
          <TreeItem>Education</TreeItem>
          <TreeItem>Financial services</TreeItem>
          <TreeItem>Government</TreeItem>
          <TreeItem>Manufacturing</TreeItem>
          <TreeItemsGroup>
            Solutions
            <TreeItem>Consumer photo and video</TreeItem>
            <TreeItem>Mobile</TreeItem>
            <TreeItem>Rich Internet applications</TreeItem>
            <TreeItem>Technical communication</TreeItem>
            <TreeItem>Training and eLearning</TreeItem>
            <TreeItem>Web conferencing</TreeItem>
          </TreeItemsGroup>
          <TreeItem>All industries and solutions</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>
          Products
          <TreeItem>PC products</TreeItem>
          <TreeItem>Mobile products</TreeItem>
          <TreeItem>All products</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          Support
          <TreeItem>Support home</TreeItem>
          <TreeItem>Customer Service</TreeItem>
          <TreeItem>Knowledge base</TreeItem>
          <TreeItem>Books</TreeItem>
          <TreeItem>Training and certification</TreeItem>
          <TreeItem>Support programs</TreeItem>
          <TreeItem>Forums</TreeItem>
          <TreeItem>Documentation</TreeItem>
          <TreeItem>Updates</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          Communities
          <TreeItem>Designers</TreeItem>
          <TreeItem>Developers</TreeItem>
          <TreeItem>Educators and students</TreeItem>
          <TreeItem>Partners</TreeItem>
          <TreeItemsGroup>
            By resource
            <TreeItem>Labs</TreeItem>
            <TreeItem>TV</TreeItem>
            <TreeItem>Forums</TreeItem>
            <TreeItem>Exchange</TreeItem>
            <TreeItem>Blogs</TreeItem>
            <TreeItem>Experience Design</TreeItem>
          </TreeItemsGroup>
        </TreeItemsGroup>
        <TreeItemsGroup>
          Company
          <TreeItem>About Us</TreeItem>
          <TreeItem>Press</TreeItem>
          <TreeItem>Investor Relations</TreeItem>
          <TreeItem>Corporate Affairs</TreeItem>
          <TreeItem>Careers</TreeItem>
          <TreeItem>Showcase</TreeItem>
          <TreeItem>Events</TreeItem>
          <TreeItem>Contact Us</TreeItem>
          <TreeItem>Become an affiliate</TreeItem>
        </TreeItemsGroup>
      </Tree>

      <Tree ref={tree2} id="tree2" className="animation plus-minus">
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup>
          Solutions
          <TreeItem>Education</TreeItem>
          <TreeItem>Financial services</TreeItem>
          <TreeItem>Government</TreeItem>
          <TreeItem>Manufacturing</TreeItem>
          <TreeItemsGroup>
            Solutions
            <TreeItem>Consumer photo and video</TreeItem>
            <TreeItem>Mobile</TreeItem>
            <TreeItem>Rich Internet applications</TreeItem>
            <TreeItem>Technical communication</TreeItem>
            <TreeItem>Training and eLearning</TreeItem>
            <TreeItem>Web conferencing</TreeItem>
          </TreeItemsGroup>
          <TreeItem>All industries and solutions</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>
          Products
          <TreeItem>PC products</TreeItem>
          <TreeItem>Mobile products</TreeItem>
          <TreeItem>All products</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          Support
          <TreeItem>Support home</TreeItem>
          <TreeItem>Customer Service</TreeItem>
          <TreeItem>Knowledge base</TreeItem>
          <TreeItem>Books</TreeItem>
          <TreeItem>Training and certification</TreeItem>
          <TreeItem>Support programs</TreeItem>
          <TreeItem>Forums</TreeItem>
          <TreeItem>Documentation</TreeItem>
          <TreeItem>Updates</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          Communities
          <TreeItem>Designers</TreeItem>
          <TreeItem>Developers</TreeItem>
          <TreeItem>Educators and students</TreeItem>
          <TreeItem>Partners</TreeItem>
          <TreeItemsGroup>
            By resource
            <TreeItem>Labs</TreeItem>
            <TreeItem>TV</TreeItem>
            <TreeItem>Forums</TreeItem>
            <TreeItem>Exchange</TreeItem>
            <TreeItem>Blogs</TreeItem>
            <TreeItem>Experience Design</TreeItem>
          </TreeItemsGroup>
        </TreeItemsGroup>
        <TreeItemsGroup>
          Company
          <TreeItem>About Us</TreeItem>
          <TreeItem>Press</TreeItem>
          <TreeItem>Investor Relations</TreeItem>
          <TreeItem>Corporate Affairs</TreeItem>
          <TreeItem>Careers</TreeItem>
          <TreeItem>Showcase</TreeItem>
          <TreeItem>Events</TreeItem>
          <TreeItem>Contact Us</TreeItem>
          <TreeItem>Become an affiliate</TreeItem>
        </TreeItemsGroup>
      </Tree>

      <div className="options">
        <div className="caption">Settings</div>
        <div>
          <p>Toggle element position:</p>
          <br />
          <RadioButton id="near" checked onChange={handleNearChange}>
            Near
          </RadioButton>
          <br />
          <RadioButton id="far" onChange={handleFarChange}>
            Far
          </RadioButton>
        </div>
        <br />
        <CheckBox id="autoHideToggleElement" onChange={handleAutoHideToggleElementChange}>
          Auto-hide toggle element
        </CheckBox>
      </div>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);
  const tree2 = useRef(null);

  const handleAutoChange = () => {
    if (tree.current && tree2.current) {
      tree.current.overflow = 'auto';
      tree2.current.overflow = 'auto';
    }
  };

  const handleHiddenChange = () => {
    if (tree.current && tree2.current) {
      tree.current.overflow = 'hidden';
      tree2.current.overflow = 'hidden';
    }
  };

  const handleScrollChange = () => {
    if (tree.current && tree2.current) {
      tree.current.overflow = 'scroll';
      tree2.current.overflow = 'scroll';
    }
  };

  return (
    <div>
      <Tree
        ref={tree}
        id="tree1"
        filterable
        filterMode="containsIgnoreCase"
        scrollMode="scrollbar"
      >
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup expanded>
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
        <TreeItemsGroup>
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

      <br />

      <Tree
        ref={tree2}
        id="tree2"
        className="animation"
        filterable
        filterMode="containsIgnoreCase"
        scrollMode="scrollButtons"
      >
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup expanded>
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
        <TreeItemsGroup>
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
        <div className="caption"></div>
        <div className="option">
          <RadioButton id="auto" checked onChange={handleAutoChange}>
            Auto
          </RadioButton>
          <br />
          <RadioButton id="hidden" onChange={handleHiddenChange}>
            Hidden
          </RadioButton>
          <br />
          <RadioButton id="scroll" onChange={handleScrollChange}>
            Scroll
          </RadioButton>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;

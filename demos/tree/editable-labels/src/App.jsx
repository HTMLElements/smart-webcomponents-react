import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  return (
    <div>
      <em>Note: Double-click or press F2 to edit an item.</em>
      <br />
      <br />
      <Tree
        id="tree"
        className="animation"
        allowDrag
        allowDrop
        editable
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="containsIgnoreCase"
      >
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup disabled>
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
          <TreeItem disabled>All products</TreeItem>
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
    </div>
  );
};

export default App;

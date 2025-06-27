import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleRowChange = () => {
    if (tree.current) {
      tree.current.selectionDisplayMode = 'row';
    }
  };

  const handleLabelChange = () => {
    if (tree.current) {
      tree.current.selectionDisplayMode = 'label';
    }
  };

  return (
    <div>
      <Tree ref={tree} id="tree" selectionDisplayMode="label">
        <TreeItem>Home</TreeItem>
        <TreeItem selected>Education</TreeItem>
        <TreeItem>Financial services</TreeItem>
        <TreeItem>Government</TreeItem>
        <TreeItem disabled>Manufacturing</TreeItem>
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
        <TreeItemsGroup disabled>
          Products
          <TreeItem>PC products</TreeItem>
          <TreeItem>Mobile products</TreeItem>
          <TreeItem>All products</TreeItem>
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
      </Tree>

      <div className="options">
        <div className="caption"></div>
        <div className="option">
          <p>Selection display mode:</p>
          <RadioButton id="row" onChange={handleRowChange}>
            Row
          </RadioButton>
          <br />
          <RadioButton id="label" checked onChange={handleLabelChange}>
            Label
          </RadioButton>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;

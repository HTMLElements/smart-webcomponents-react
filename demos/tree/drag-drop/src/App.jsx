import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree2 = useRef(null);

  const handleDragStart = (event) => {
    if (event.detail.items[0].label === 'Communities') {
      event.preventDefault();
    }
  };

  const handleDragEnd = (event) => {
    if (event.detail.items[0].label === 'Financial services') {
      event.preventDefault();
      return;
    }
    if (!event.detail.container.closest('smart-tree')) {
      const textBox = event.detail.target.closest('smart-multiline-text-box');
      if (textBox) {
        textBox.value = event.detail.items[0].label;
      }
    }
  };

  return (
    <div>
      <em>
        Note: <strong>Communities</strong> cannot be dragged and{' '}
        <strong>Financial services</strong> cannot be dropped.
      </em>{' '}
      You can drag items only from Tree A. Items in Tree B are not draggable.
      <br />
      <br />
      <Tree
        id="tree1"
        className="animation"
        allowDrag
        allowDrop
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup expanded>
          Solutions
          <TreeItem>Education</TreeItem>
          <TreeItem>Transportation</TreeItem>
        </TreeItemsGroup>
        <TreeItem style={{ color: 'red' }}>Communities</TreeItem>
        <TreeItem style={{ color: 'blue' }}>Financial services</TreeItem>
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
      </Tree>

      <Tree ref={tree2} id="tree2" allowDrop scrollMode="scrollButtons">
        <TreeItem>Products</TreeItem>
        <TreeItemsGroup expanded>
          Support
          <TreeItem>Support home</TreeItem>
          <TreeItem>Customer Service</TreeItem>
        </TreeItemsGroup>
        <TreeItem>Knowledge base</TreeItem>
        <TreeItem>Forum</TreeItem>
      </Tree>

      <br />
      <br />
      <div style={{ clear: 'both' }}></div>
      <MultilineTextBox placeholder="Drop Tree items here..."></MultilineTextBox>
    </div>
  );
};

export default App;

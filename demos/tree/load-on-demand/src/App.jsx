import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleExpanding = (event) => {
    if (event.detail.label === 'Group 2' && event.detail.children.length === 0) {
      const load = window.confirm('Do you wish to load items dynamically?');
      if (!load) {
        event.preventDefault();
      }
    }
  };

  const handleExpand = (event) => {
    if (event.detail.children.length > 0) {
      return;
    }

    const treeElement = tree.current;

    treeElement.displayLoadingIndicator = true;
    setTimeout(() => {
      const newItem1 = document.createElement('smart-tree-item');
      const newItem2 = document.createElement('smart-tree-item');
      newItem1.label = 'Item ' + event.detail.path + '.0';
      newItem2.label = 'Item ' + event.detail.path + '.1';
      treeElement.addTo(newItem1, event.detail.item);
      treeElement.addTo(newItem2, event.detail.item);
      if (event.detail.item.level < 4) {
        const newItemsGroup = document.createElement('smart-tree-items-group');
        newItemsGroup.label = 'Group ' + event.detail.path + '.2';
        treeElement.addTo(newItemsGroup, event.detail.item);
      }
      treeElement.displayLoadingIndicator = false;
    }, 1000);
  };

  return (
    <div>
      <Tree
        ref={tree}
        id="tree"
        className="animation"
        showLines
        showRootLines
        onExpanding={handleExpanding}
        onExpand={handleExpand}
      >
        <TreeItemsGroup>Group 0</TreeItemsGroup>
        <TreeItem>Item 1</TreeItem>
        <TreeItemsGroup>Group 2</TreeItemsGroup>
        <TreeItemsGroup>
          Group 3
          <TreeItem>Item 1.1</TreeItem>
        </TreeItemsGroup>
      </Tree>
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useCallback } from 'react';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const customSortingFunction = useCallback((items, parentItem) => {
    if (parentItem.label === 'Numbers') {
      items.sort((a, b) => parseFloat(a.label) - parseFloat(b.label));
    } else if (parentItem.label === 'Letters') {
      items.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    } else {
      // apply default sorting
      items.sort((a, b) => a.label.localeCompare(b.label));
    }
  }, []);

  return (
    <div>
      <Tree
        id="tree1"
        filterable
        showLines
        showRootLines
        sortDirection="asc"
        sorted
        toggleElementPosition="near"
      >
        <TreeItemsGroup expanded>Numbers
          <TreeItem>2</TreeItem>
          <TreeItem>3</TreeItem>
          <TreeItem>1</TreeItem>
          <TreeItem>10</TreeItem>
          <TreeItem>210</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>Letters
          <TreeItem value="1000">A</TreeItem>
          <TreeItem value="50">C</TreeItem>
          <TreeItem value="30000">D</TreeItem>
          <TreeItem value="2">B</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>Greek letters
          <TreeItem>β</TreeItem>
          <TreeItem>δ</TreeItem>
          <TreeItem>α</TreeItem>
          <TreeItem>γ</TreeItem>
        </TreeItemsGroup>
      </Tree>
      <p>Sort direction: ascending</p>
      <br />
      <br />
      <Tree
        filterable
        showLines
        showRootLines
        sortDirection="desc"
        sorted
        toggleElementPosition="near"
      >
        <TreeItemsGroup expanded>Numbers
          <TreeItem>2</TreeItem>
          <TreeItem>3</TreeItem>
          <TreeItem>1</TreeItem>
          <TreeItem>10</TreeItem>
          <TreeItem>210</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>Letters
          <TreeItem value="1000">A</TreeItem>
          <TreeItem value="50">C</TreeItem>
          <TreeItem value="30000">D</TreeItem>
          <TreeItem value="2">B</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>Greek letters
          <TreeItem>β</TreeItem>
          <TreeItem>δ</TreeItem>
          <TreeItem>α</TreeItem>
          <TreeItem>γ</TreeItem>
        </TreeItemsGroup>
      </Tree>
      <p>Sort direction: descending</p>
      <br />
      <br />
      <Tree
        filterable
        showLines
        showRootLines
        sort={customSortingFunction}
        sorted
        toggleElementPosition="near"
      >
        <TreeItemsGroup expanded>Numbers
          <TreeItem>2</TreeItem>
          <TreeItem>3</TreeItem>
          <TreeItem>1</TreeItem>
          <TreeItem>10</TreeItem>
          <TreeItem>210</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>Letters
          <TreeItem value="1000">A</TreeItem>
          <TreeItem value="50">C</TreeItem>
          <TreeItem value="30000">D</TreeItem>
          <TreeItem value="2">B</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup expanded>Greek letters
          <TreeItem>β</TreeItem>
          <TreeItem>δ</TreeItem>
          <TreeItem>α</TreeItem>
          <TreeItem>γ</TreeItem>
        </TreeItemsGroup>
      </Tree>
      <p>Sorting via a custom function</p>
    </div>
  );
};

export default App;

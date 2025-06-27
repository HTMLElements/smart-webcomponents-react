import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleMoveUpClick = () => {
    const treeElement = tree.current;

    if (treeElement.selectedIndexes.length === 0) return;

    treeElement.getItem(treeElement.selectedIndexes[0]).then((selectedItem) => {
      treeElement.moveUp(selectedItem);
    });
  };

  const handleMoveDownClick = () => {
    const treeElement = tree.current;

    if (treeElement.selectedIndexes.length === 0) return;

    treeElement.getItem(treeElement.selectedIndexes[0]).then((selectedItem) => {
      treeElement.moveDown(selectedItem);
    });
  };

  return (
    <div>
      <Tree ref={tree} id="tree" className="animation" showLines showRootLines>
        <TreeItemsGroup id="numbers" expanded>
          Numbers
          <TreeItem>3</TreeItem>
          <TreeItem>2</TreeItem>
          <TreeItem id="one">1</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup id="letters" expanded>
          Letters
          <TreeItem>A</TreeItem>
          <TreeItem>C</TreeItem>
          <TreeItem>Z</TreeItem>
          <TreeItem>B</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup id="greekLetters" expanded>
          Greek letters
          <TreeItem>β</TreeItem>
          <TreeItem>δ</TreeItem>
          <TreeItem>α</TreeItem>
          <TreeItem>γ</TreeItem>
        </TreeItemsGroup>
      </Tree>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button id="moveUp" title="Move selected item up" onClick={handleMoveUpClick}>
            Up
          </Button>
          <Button id="moveDown" title="Move selected item down" onClick={handleMoveDownClick}>
            Down
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

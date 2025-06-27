import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleAddBeforeClick = (event) => {
    const newItem = document.createElement('smart-tree-item');
    newItem.label = 'Y';
    tree.current.addBefore(newItem, 'zed');
    event.target.disabled = true;
  };

  const handleAddAfterClick = (event) => {
    const newItem = document.createElement('smart-tree-item');
    newItem.innerHTML = '0';
    tree.current.addAfter(newItem, 'three');
    event.target.disabled = true;
  };

  const handleAddToClick = (event) => {
    const newItem = document.createElement('smart-tree-item');
    newItem.innerHTML = 'D';
    tree.current.addTo(newItem, 'letters');
    event.target.disabled = true;
  };

  const handleAddGroupToClick = (event) => {
    const newItemsGroup = document.createElement('smart-tree-items-group');
    newItemsGroup.innerHTML = `
      Capital letters
      <smart-tree-item>Α</smart-tree-item>
      <smart-tree-item>Γ</smart-tree-item>
      <smart-tree-item>Δ</smart-tree-item>
      <smart-tree-item>Σ</smart-tree-item>
      <smart-tree-item>Β</smart-tree-item>
    `;
    newItemsGroup.expanded = true;
    tree.current.addTo(newItemsGroup, 'greekLetters');
    event.target.disabled = true;
  };

  const handleRemoveItemClick = (event) => {
    tree.current.removeItem('one');
    event.target.disabled = true;
  };

  const handleSortedChange = (event) => {
    tree.current.sorted = event.detail.value;
  };

  const handleAutoSortChange = (event) => {
    tree.current.autoSort = event.detail.value;
  };

  useEffect(() => {
    const nativeTree = tree.current.nativeElement;

    function handleSwipe(event) {
      const originalTarget = event.originalEvent.target;
      const closestItem =
        originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');
      if (closestItem) {
        const remove = window.confirm(`Do you wish to remove item "${closestItem.label}"?`);
        if (remove) {
          tree.current.removeItem(closestItem);
        }
      }
    }

    nativeTree.addEventListener('swipeleft', handleSwipe);
    nativeTree.addEventListener('swiperight', handleSwipe);

    return () => {
      nativeTree.removeEventListener('swipeleft', handleSwipe);
      nativeTree.removeEventListener('swiperight', handleSwipe);
    };
  }, []);

  return (
    <div>
      <Tree
        ref={tree}
        id="tree"
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="contains"
        showLines
        showRootLines
        toggleElementPosition="near"
      >
        <TreeItemsGroup id="numbers" expanded>
          Numbers
          <TreeItem id="three">3</TreeItem>
          <TreeItem>2</TreeItem>
          <TreeItem id="one">1</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup id="letters" expanded>
          Letters
          <TreeItem>A</TreeItem>
          <TreeItem>C</TreeItem>
          <TreeItem id="zed">Z</TreeItem>
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
        <Button id="addBefore" className="demoButton" onClick={handleAddBeforeClick}>
          Add before "Z"
        </Button>
        <br />
        <br />
        <Button id="addAfter" className="demoButton" onClick={handleAddAfterClick}>
          Add after "3"
        </Button>
        <br />
        <br />
        <Button id="addTo" className="demoButton" onClick={handleAddToClick}>
          Add to "Letters"
        </Button>
        <br />
        <br />
        <Button id="addGroupTo" className="demoButton" onClick={handleAddGroupToClick}>
          Add to
          <br />
          "Greek letters"
        </Button>
        <br />
        <br />
        <Button id="removeItem" className="demoButton" onClick={handleRemoveItemClick}>
          Remove "1"
        </Button>
        <br />
        <br />
        <CheckBox id="sorted" onChange={handleSortedChange}>
          Sorted
        </CheckBox>
        <br />
        <br />
        <CheckBox id="autoSort" checked onChange={handleAutoSortChange}>
          Auto sort
        </CheckBox>
        <br />
        <em>Note: Items can also be removed by swiping left or right.</em>
      </div>
    </div>
  );
};

export default App;

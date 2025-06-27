import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef();
  const button3 = useRef();
  const checkbox = useRef();

  const [isLoadDisabled, setIsLoadDisabled] = useState(true);
  const [isSorted, setIsSorted] = useState(false);

  const handleGetStateClick = () => {
    tree.current.getState().then((state) => {
      alert(JSON.stringify(state));
    });
  };

  const handleSaveStateClick = () => {
    tree.current.saveState();
    setIsLoadDisabled(false);
  };

  const handleLoadStateClick = () => {
    tree.current.loadState();
    setIsSorted(tree.current.sorted);
    if (checkbox.current) {
      checkbox.current.checked = tree.current.sorted;
    }
  };

  const handleSortedChange = (event) => {
    const value = event.detail.value;
    setIsSorted(value);
    if (tree.current) {
      tree.current.sorted = value;
    }
  };

  return (
    <div>
      <Tree
        ref={tree}
        id="tree"
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="containsIgnoreCase"
        selectionMode="oneOrMany"
      >
        <TreeItem>Home</TreeItem>
        <TreeItemsGroup>Solutions
          <TreeItem>Education</TreeItem>
          <TreeItem>Financial services</TreeItem>
          <TreeItem>Government</TreeItem>
          <TreeItem>Manufacturing</TreeItem>
          <TreeItemsGroup>Solutions
            <TreeItem>Consumer photo and video</TreeItem>
            <TreeItem>Mobile</TreeItem>
            <TreeItem>Rich Internet applications</TreeItem>
            <TreeItem>Technical communication</TreeItem>
            <TreeItem>Training and eLearning</TreeItem>
            <TreeItem>Web conferencing</TreeItem>
          </TreeItemsGroup>
          <TreeItem>All industries and solutions</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>Products
          <TreeItem>PC products</TreeItem>
          <TreeItem>Mobile products</TreeItem>
          <TreeItem>All products</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>Support
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
        <TreeItemsGroup>Communities
          <TreeItem>Designers</TreeItem>
          <TreeItem>Developers</TreeItem>
          <TreeItem>Educators and students</TreeItem>
          <TreeItem>Partners</TreeItem>
          <TreeItemsGroup>By resource
            <TreeItem>Labs</TreeItem>
            <TreeItem>TV</TreeItem>
            <TreeItem>Forums</TreeItem>
            <TreeItem>Exchange</TreeItem>
            <TreeItem>Blogs</TreeItem>
            <TreeItem>Experience Design</TreeItem>
          </TreeItemsGroup>
        </TreeItemsGroup>
        <TreeItemsGroup>Company
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
          <Button id="getState" onClick={handleGetStateClick}>Get state</Button>
          <br />
          <br />
          <Button id="saveState" onClick={handleSaveStateClick}>Save state</Button>
          <br />
          <br />
          <Button ref={button3} id="loadState" disabled={isLoadDisabled} onClick={handleLoadStateClick}>Load state</Button>
          <br />
          <br />
          <br />
          <CheckBox
            ref={checkbox}
            id="sorted"
            checked={isSorted}
            onChange={handleSortedChange}
          >
            Sorted tree
          </CheckBox>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;

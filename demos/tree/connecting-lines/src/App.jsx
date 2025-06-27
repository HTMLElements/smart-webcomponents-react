import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef();
  const tree2 = useRef();
  const tree3 = useRef();
  const tree4 = useRef();

  const [showLines, setShowLines] = useState(true);
  const [showRootLines, setShowRootLines] = useState(true);

  const handleShowLinesChange = (event) => {
    const checked = event.detail.value;
    setShowLines(checked);
    tree.current.showLines = checked;
    tree2.current.showLines = checked;
    tree3.current.showLines = checked;
    tree4.current.showLines = checked;
  };

  const handleShowRootLinesChange = (event) => {
    const checked = event.detail.value;
    setShowRootLines(checked);
    tree.current.showRootLines = checked;
    tree2.current.showRootLines = checked;
    tree3.current.showRootLines = checked;
    tree4.current.showRootLines = checked;
  };

  return (
    <div>
      <CheckBox id="showLines" checked={showLines} onChange={handleShowLinesChange}>
        Show lines
      </CheckBox>
      <CheckBox id="showRootLines" checked={showRootLines} onChange={handleShowRootLinesChange}>
        Show root lines
      </CheckBox>
      <br />
      <br />
      <Tree
        ref={tree}
        id="tree1"
        className="animation"
        autoLoadState
        showLines={showLines}
        showRootLines={showRootLines}
        autoSaveState
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="containsIgnoreCase"
        toggleElementPosition="far"
      >
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

      <Tree
        ref={tree2}
        id="tree2"
        className="animation"
        autoLoadState
        showLines={showLines}
        showRootLines={showRootLines}
        autoSaveState
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="containsIgnoreCase"
      >
        {/* Same structure as above */}
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

      <Tree
        ref={tree3}
        id="tree3"
        className="animation"
        autoLoadState
        showLines={showLines}
        showRootLines={showRootLines}
        autoSaveState
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="containsIgnoreCase"
        rightToLeft
        toggleElementPosition="far"
      >
        {/* Same structure */}
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

      <Tree
        ref={tree4}
        id="tree4"
        className="animation"
        autoLoadState
        showLines={showLines}
        showRootLines={showRootLines}
        autoSaveState
        filterable
        filterInputPlaceholder="Filter query..."
        filterMode="containsIgnoreCase"
        rightToLeft
      >
        {/* Same structure */}
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
    </div>
  );
};

export default App;

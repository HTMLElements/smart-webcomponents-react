import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleNoneChange = () => {
    if (tree.current) tree.current.selectionMode = 'none';
  };

  const handleOneChange = () => {
    if (tree.current) tree.current.selectionMode = 'one';
  };

  const handleZeroOrOneChange = () => {
    if (tree.current) tree.current.selectionMode = 'zeroOrOne';
  };

  const handleZeroOrManyChange = () => {
    if (tree.current) tree.current.selectionMode = 'zeroOrMany';
  };

  const handleOneOrManyChange = () => {
    if (tree.current) tree.current.selectionMode = 'oneOrMany';
  };

  const handleOneOrManyExtendedChange = () => {
    if (tree.current) tree.current.selectionMode = 'oneOrManyExtended';
  };

  const handleCheckBoxChange = () => {
    if (tree.current) tree.current.selectionMode = 'checkBox';
  };

  const handleRadioButtonChange = () => {
    if (tree.current) tree.current.selectionMode = 'radioButton';
  };

  const handleDblclickChange = () => {
    if (tree.current) tree.current.toggleMode = 'dblclick';
  };

  const handleClickChange = () => {
    if (tree.current) tree.current.toggleMode = 'click';
  };

  const handleArrowChange = () => {
    if (tree.current) tree.current.toggleMode = 'arrow';
  };

  return (
    <div>
      <Tree
        ref={tree}
        id="tree"
        className="animation"
        selectionMode="zeroOrMany"
        selectedIndexes={['0', '4']}
      >
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
          <div>
            <p>Selection mode:</p>
            <RadioButton id="none" onChange={handleNoneChange}>
              None
            </RadioButton>
            <br />
            <RadioButton id="one" onChange={handleOneChange}>
              One
            </RadioButton>
            <br />
            <RadioButton id="zeroOrOne" onChange={handleZeroOrOneChange}>
              Zero or one
            </RadioButton>
            <br />
            <RadioButton id="zeroOrMany" checked onChange={handleZeroOrManyChange}>
              Zero or many
            </RadioButton>
            <br />
            <RadioButton id="oneOrMany" onChange={handleOneOrManyChange}>
              One or many
            </RadioButton>
            <br />
            <RadioButton id="oneOrManyExtended" onChange={handleOneOrManyExtendedChange}>
              One or many extended
            </RadioButton>
            <br />
            <RadioButton id="checkBox" onChange={handleCheckBoxChange}>
              Checkbox
            </RadioButton>
            <br />
            <RadioButton id="radioButton" onChange={handleRadioButtonChange}>
              Radio button
            </RadioButton>
          </div>
          <br />
          <div>
            <p>Toggle mode:</p>
            <RadioButton id="dblclick" checked onChange={handleDblclickChange}>
              Item double click
            </RadioButton>
            <br />
            <RadioButton id="click" onChange={handleClickChange}>
              Item click
            </RadioButton>
            <br />
            <RadioButton id="arrow" onChange={handleArrowChange}>
              Item arrow click
            </RadioButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

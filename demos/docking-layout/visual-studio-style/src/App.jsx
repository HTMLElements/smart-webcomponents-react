import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { TextBox } from 'smart-webcomponents-react/textbox';

const layout = [
  {
    id: 'item0',
    label: 'View',
    items: [
      {
        label: 'Team Explorer',
        selected: true,
        content: 'This is the first item of the Tabs 0.',
      },
      {
        label: 'Server Explorer',
        content: '<div id="textBoxContainer"></div>',
      },
    ],
    autoHide: true,
    autoHidePosition: 'left',
  },
  {
    type: 'LayoutGroup',
    items: [
      {
        type: 'LayoutPanel',
        id: 'tabPanel',
        label: 'Tabs 1',
        items: [
          {
            label: 'helloWorld.js',
            selected: true,
            content: '<div id="multilineTextBoxContainer"></div>',
          },
          {
            label: 'helloWorld.css',
            content: '<div id="multilineTextBoxContainer2"></div>',
          },
          {
            label: 'helloWorld.html',
            content: '<div id="multilineTextBoxContainer3"></div>',
          },
        ],
        headerPosition: 'none',
        tabCloseButtons: true,
        panelContainerSettings: {
          size: '75%',
        },
      },
      {
        type: 'LayoutPanel',
        label: 'Output',
        items: [
          {
            label: 'Output',
            headerPosition: 'none',
            content: 'All files are up to date.',
          },
        ],
        headerPosition: 'none',
      },
    ],
    orientation: 'horizontal',
  },
  {
    id: 'item2',
    label: 'Solution Explorer',
    items: [
      {
        label: 'Solution Explorer',
        content: '<div id="treeContainer"></div>',
      },
    ],
    tabPosition: 'hidden',
  },
];

const App = () => {
  const handleReady = () => {
    const mount = (id, component) => {
      const container = document.getElementById(id);
      if (container) {
        ReactDOM.createRoot(container).render(component);
      }
    };

    mount('textBoxContainer', <TextBox>Some Text Inside the Text Box</TextBox>);

    mount(
      'multilineTextBoxContainer',
      <MultilineTextBox>
        {`this.button.current.addEventListener('click', function() {
  //..
};`}
      </MultilineTextBox>
    );

    mount('multilineTextBoxContainer2', <MultilineTextBox id="editor2">smart-button {'{}'}</MultilineTextBox>);

    mount('multilineTextBoxContainer3', (
      <MultilineTextBox id="editor3">
        {'<smart-button>Click Me</smart-button>'}
      </MultilineTextBox>
    ));

    mount(
      'treeContainer',
      <Tree id="tree" filterable>
        <TreeItemsGroup>
          <i className="material-icons">folder</i> Attractions
          <TreeItem>Movies</TreeItem>
          <TreeItem>Circus</TreeItem>
          <TreeItem>Concerts</TreeItem>
          <TreeItem>Monuments</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">folder</i> Dining
          <TreeItem>Restaurants</TreeItem>
          <TreeItem>Cafés</TreeItem>
          <TreeItem>Bars</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">folder</i> Education
          <TreeItem>Schools</TreeItem>
          <TreeItem>Colleges</TreeItem>
          <TreeItem>Universities</TreeItem>
          <TreeItem>Educational courses</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">folder</i> Family
          <TreeItem>Babysitting</TreeItem>
          <TreeItem>Family trips</TreeItem>
          <TreeItem>Theme parks</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">folder</i> Health
          <TreeItem>Hospitals</TreeItem>
          <TreeItem>Family physicians</TreeItem>
          <TreeItem>Optics</TreeItem>
        </TreeItemsGroup>
      </Tree>
    );
  };

  return (
    <div>
      <DockingLayout layout={layout} onReady={handleReady}></DockingLayout>
    </div>
  );
};

export default App;

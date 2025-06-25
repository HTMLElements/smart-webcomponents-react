import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Window } from 'smart-webcomponents-react/window';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { TextBox } from 'smart-webcomponents-react/textbox';
import { createPortal } from 'react-dom';

const App = () => {
  const dockingLayoutRef = useRef();

  const [ready, setReady] = useState(false);

  const layout = [
    {
      id: 'item0',
      label: 'Tabs 0',
      autoHide: true,
      autoHidePosition: 'left',
      items: [
        {
          label: 'Tab A',
          selected: true,
          content: 'This is the first item of the Tabs 0.'
        },
        {
          label: 'Tab B',
          content: '<div id="textBoxContainer"></div>'
        }
      ]
    },
    {
      id: 'item1',
      label: 'Tabs 1',
      headerPosition: 'none',
      tabCloseButtons: true,
      items: [
        {
          label: 'Tab 1',
          selected: true,
          content: '<div id="multilineTextBoxContainer3"></div>'
        },
        {
          label: 'Tab 2',
          content: '<div id="multilineTextBoxContainer"></div>'
        },
        {
          label: 'Tab 3',
          content: '<div id="multilineTextBoxContainer2"></div>'
        }
      ]
    },
    {
      id: 'item2',
      label: 'Solution Explorer',
      tabPosition: 'hidden',
      items: [
        {
          label: 'Tab 4',
          content: '<div id="treeContainer"></div>'
        }
      ]
    },
    {
      id: 'item3',
      label: 'Tabs 3',
      autoHide: true,
      autoHidePosition: 'top',
      items: [
        {
          label: 'Tab 4',
          selected: true,
          content: '<div id="gaugeContainer"></div>'
        },
        {
          label: 'Tab 5',
          content: 'Contents of Tab Item 5.'
        }
      ]
    }
  ];

  const handleReady = () => {
    setReady(true);
  };

  useEffect(() => {
    // DockingLayout will trigger onReady after layout renders
    // Use this to flag when it's safe to mount portal content
  }, []);

  // Portal rendering
  const portals = ready ? (
    <>
      {createPortal(<TextBox>Some Text Inside the Text Box</TextBox>, document.getElementById('textBoxContainer'))}
      {createPortal(<MultilineTextBox id="editor2">File Editor 2</MultilineTextBox>, document.getElementById('multilineTextBoxContainer'))}
      {createPortal(<MultilineTextBox id="editor3">File Editor 3</MultilineTextBox>, document.getElementById('multilineTextBoxContainer2'))}
      {createPortal(<Gauge />, document.getElementById('gaugeContainer'))}
      {createPortal(
        <MultilineTextBox id="editor1">
          <Tree id="tree" filterable>
            <TreeItemsGroup label="Attractions">
              <TreeItem>Movies</TreeItem>
              <TreeItem>Circus</TreeItem>
              <TreeItem>Concerts</TreeItem>
              <TreeItem>Monuments</TreeItem>
            </TreeItemsGroup>
            <TreeItemsGroup label="Dining">
              <TreeItem>Restaurants</TreeItem>
              <TreeItem>Cafés</TreeItem>
              <TreeItem>Bars</TreeItem>
            </TreeItemsGroup>
            <TreeItemsGroup label="Education">
              <TreeItem>Schools</TreeItem>
              <TreeItem>Colleges</TreeItem>
              <TreeItem>Universities</TreeItem>
              <TreeItem>Educational courses</TreeItem>
            </TreeItemsGroup>
            <TreeItemsGroup label="Family">
              <TreeItem>Babysitting</TreeItem>
              <TreeItem>Family trips</TreeItem>
              <TreeItem>Theme parks</TreeItem>
            </TreeItemsGroup>
            <TreeItemsGroup label="Health">
              <TreeItem>Hospitals</TreeItem>
              <TreeItem>Family physicians</TreeItem>
              <TreeItem>Optics</TreeItem>
            </TreeItemsGroup>
          </Tree>
        </MultilineTextBox>,
        document.getElementById('multilineTextBoxContainer3')
      )}
      {createPortal(
        <Tree id="tree" filterable>
          <TreeItemsGroup label="Attractions">
            <TreeItem>Movies</TreeItem>
            <TreeItem>Circus</TreeItem>
            <TreeItem>Concerts</TreeItem>
            <TreeItem>Monuments</TreeItem>
          </TreeItemsGroup>
          <TreeItemsGroup label="Dining">
            <TreeItem>Restaurants</TreeItem>
            <TreeItem>Cafés</TreeItem>
            <TreeItem>Bars</TreeItem>
          </TreeItemsGroup>
          <TreeItemsGroup label="Education">
            <TreeItem>Schools</TreeItem>
            <TreeItem>Colleges</TreeItem>
            <TreeItem>Universities</TreeItem>
            <TreeItem>Educational courses</TreeItem>
          </TreeItemsGroup>
          <TreeItemsGroup label="Family">
            <TreeItem>Babysitting</TreeItem>
            <TreeItem>Family trips</TreeItem>
            <TreeItem>Theme parks</TreeItem>
          </TreeItemsGroup>
          <TreeItemsGroup label="Health">
            <TreeItem>Hospitals</TreeItem>
            <TreeItem>Family physicians</TreeItem>
            <TreeItem>Optics</TreeItem>
          </TreeItemsGroup>
        </Tree>,
        document.getElementById('treeContainer')
      )}
    </>
  ) : null;

  return (
    <div>
      <Window label="Smart Docking Layout" opened resizeMode="both" id="layoutWindow">
        <DockingLayout ref={dockingLayoutRef} id="layout" layout={layout} onReady={handleReady} />
      </Window>
      {portals}
    </div>
  );
};

export default App;

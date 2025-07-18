import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

const App = () => {
  const dockinglayoutRef = useRef();

  const layout = [
    {
      type: "LayoutGroup",
      orientation: "horizontal",
      items: [
        {
          type: "LayoutGroup",
          orientation: "vertical",
          size: 395,
          items: [
            {
              type: "LayoutPanel",
              id: "item1",
              label: "Tabs 1",
              tabPosition: "top",
              dropPosition: ["top", "bottom", "header", "layout-top", "layout-left", "layout-right", "layout-bottom"],
              items: [{
                type: "LayoutPanelItem",
                label: "Tab 1",
                selected: true,
                content: "Item dropping is allowed only on the top, bottom and header positions."
              }],
              min: 200,
              size: 627
            },
            {
              type: "LayoutPanel",
              id: "item2",
              label: "Tab 2",
              tabPosition: "top",
              items: [{
                type: "LayoutPanelItem",
                label: "Tab 2",
                selected: true,
                content: "Dragging of this Item is disabled.",
                draggable: false
              }],
              size: 952
            },
            {
              type: "LayoutPanel",
              id: "item3",
              label: "Tabs 3",
              tabPosition: "top",
              dropPosition: ["top", "bottom", "header", "left", "right", "center"],
              items: [{
                type: "LayoutPanelItem",
                label: "Tab 3",
                selected: true,
                content: "Content of Tab 3"
              }],
              min: 200,
              size: 305
            }
          ]
        },
        {
          type: "LayoutPanel",
          label: "Tab 4",
          tabPosition: "top",
          dropPosition: ["none"],
          items: [{
            type: "LayoutPanelItem",
            label: "Tab 4",
            selected: true,
            content: "Item dropping is not allowed here."
          }],
          size: 200
        }
      ]
    }
  ];

  return (
    <div>
      <DockingLayout ref={dockinglayoutRef} snapMode="advanced" layout={layout} />
      <div className="description">smartDockingLayout Drag & Drop Customization</div>

      <p>
        Every DockingLayout item can have a specific drop position. Drop position is the destination of an item as a result of a dragging operation (reordering of items). They are applied as a property <b>dropPosition</b> to the items of the Layout.
      </p>
      <p>The Drop position is an array of strings indicating the allowed locations at which the item can be dropped. Possible values are:</p>
      <ul>
        <li>All - all possible drop positions are available</li>
        <li>Top - position Top is allowed.</li>
        <li>Bottom - position Bottom is allowed.</li>
        <li>Left - position Left is allowed.</li>
        <li>Right - position Right is allowed.</li>
        <li>Center - position Center (available only in snapMode = "advanced") is allowed.</li>
        <li>Header - position Header is allowed.</li>
        <li>None - dropping is not allowed.</li>
      </ul>
      <p><b>draggable</b> is a smartTabItem property that can be applied in order to disable the dragging of a specific tab item.</p>
    </div>
  );
};

export default App;

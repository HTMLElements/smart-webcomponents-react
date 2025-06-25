import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

const App = () => {
  const layout = [
    {
      type: 'LayoutGroup',
      orientation: 'vertical',
      items: [
        {
          label: 'TabsWindow A',
          size: '25%',
          items: [
            {
              label: 'Tab A1',
              content: 'Content of A1'
            }
          ]
        },
        {
          type: 'LayoutGroup',
          orientation: 'horizontal',
          items: [
            {
              label: 'TabsWindow B',
              size: '50%',
              items: [
                {
                  label: 'Tab B1',
                  selected: true,
                  content: 'Content of B1'
                }
              ]
            },
            {
              label: 'TabsWindow C',
              size: '50%',
              items: [
                {
                  label: 'Tab C2',
                  content: 'Content of C2'
                }
              ]
            }
          ]
        },
        {
          type: 'LayoutGroup',
          orientation: 'vertical',
          size: '50%',
          items: [
            {
              label: 'TabsWindow D',
              size: '50%',
              items: [
                {
                  label: 'Tab D1',
                  content: 'Content of D1'
                }
              ]
            },
            {
              label: 'TabsWindow E',
              size: '50%',
              items: [
                {
                  label: 'Tab E1',
                  content: 'Content of E1'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <DockingLayout layout={layout}></DockingLayout>
      <div className="description">
        Smart Docking Layout has two types of Layout Groups. Layout group represents
        a container of items. There are "horizontal" and "vertical" groups and
        you can put layout group inside another layout group with API and UI drag
        and drop.
      </div>
    </div>
  );
};

export default App;

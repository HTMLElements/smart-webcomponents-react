import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

const App = () => {
  const layout = [
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          label: 'TabsWindow A',
          size: '50%',
          items: [
            {
              label: 'Tab A1',
              content: 'Content of A1'
            }
          ]
        },
        {
          label: 'TabsWindow B',
          size: '25%',
          items: [
            {
              label: 'Tab B1',
              selected: true,
              content: 'Content of B1'
            },
            {
              label: 'Tab B2',
              content: 'Content of B2'
            }
          ]
        },
        {
          label: 'TabsWindow C',
          size: '25%',
          items: [
            {
              label: 'Tab C1',
              content: 'Content of C1'
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
        In this demo, the Docking Layout has Layout Items, which are inside one Layout Group.
      </div>
    </div>
  );
};

export default App;

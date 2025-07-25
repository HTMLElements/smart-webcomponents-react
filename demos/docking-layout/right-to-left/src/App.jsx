import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

const App = () => {
  const layout = [
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          type: 'LayoutPanel',
          label: 'חלון א',
          items: [
            {
              id: 'Itme',
              label: '#Itme',
              content: 'תוכן הפריט עם המזהה "Itme"',
              selected: true
            }
          ]
        },
        {
          type: 'LayoutGroup',
          id: 'verticalGroup',
          orientation: 'vertical',
          items: [
            {
              type: 'LayoutPanel',
              label: 'חלון ב',
              size: '50%',
              items: [
                {
                  id: 'פריט ב',
                  label: '#פריט ב',
                  content: 'תוכן הפריט עם המזהה "פריט ב"',
                }
              ]
            },
            {
              type: 'LayoutPanel',
              label: 'חלון ג',
              items: [
                {
                  id: 'פריט ג',
                  label: '#פריט ג',
                  content: 'תוכן הפריט עם המזהה "פריט ג"'
                }
              ]
            }
          ]
        },
        {
          type: 'LayoutPanel',
          label: 'חלון ד',
          items: [
            {
              id: 'פריטים',
              label: '#פריטים',
              content: 'תוכן הפריט עם המזהה "פריטים"',
            }
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <DockingLayout id="layout" rightToLeft layout={layout}></DockingLayout>
    </div>
  );
};

export default App;

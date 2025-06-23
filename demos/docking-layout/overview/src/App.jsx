import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Slider } from 'smart-webcomponents-react/slider';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

const layout = [
  {
    type: 'LayoutGroup',
    orientation: 'horizontal',
    items: [
      {
        type: 'LayoutGroup',
        orientation: 'vertical',
        items: [
          {
            type: 'LayoutPanel',
            id: 'tabPanel',
            label: 'Input',
            items: [
              {
                label: 'TextBox Tab',
                content: '<div style="padding:10px;" id="firstContainer"></div>',
              },
              {
                label: 'Slider Tab',
                content: '<div style="padding:10px;" id="secondContainer"></div>',
              },
            ],
          },
          {
            type: 'LayoutPanel',
            label: 'Output',
            items: [
              {
                id: 'outputTab',
                label: 'Output',
                headerPosition: 'none',
                content: 'Write more text here ...',
              },
            ],
          },
        ],
      },
      {
        id: 'item0',
        label: 'Tabs 0',
        items: [
          {
            label: 'Tab A',
            selected: true,
            content:
              `What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. ` +
              `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ` +
              `took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ` +
              `but also the leap into electronic typesetting, remaining essentially unchanged.\n\n` +
              `Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content ` +
              `of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ` +
              `distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
          },
        ],
      },
    ],
  },
];

const App = () => {
  const handleReady = () => {
    const firstContainer = document.getElementById('firstContainer');
    const secondContainer = document.getElementById('secondContainer');

    if (firstContainer && !firstContainer.hasChildNodes()) {
      ReactDOM.createRoot(firstContainer).render(<MultilineTextBox />);
    }

    if (secondContainer && !secondContainer.hasChildNodes()) {
      ReactDOM.createRoot(secondContainer).render(<Slider />);
    }
  };

  return (
    <div>
      <DockingLayout layout={layout} onReady={handleReady} />
    </div>
  );
};

export default App;

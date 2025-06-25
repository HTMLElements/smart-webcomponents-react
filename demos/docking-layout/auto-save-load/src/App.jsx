import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';
import { Tank } from 'smart-webcomponents-react/tank';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

const App = () => {
  const dockinglayoutRef = useRef(null);
  const urlString = 'https://picsum.photos/1000/500/?image=';

  const layoutConfig = [
    {
      type: "LayoutGroup",
      orientation: "horizontal",
      items: [
        {
          type: "LayoutGroup",
          orientation: "vertical",
          size: 381,
          items: [
            {
              type: "LayoutGroup",
              orientation: "horizontal",
              size: 203,
              items: [
                {
                  type: "LayoutPanel",
                  label: "Tab 10",
                  size: 153,
                  items: [{
                    id: "tabItem10",
                    type: "LayoutPanelItem",
                    label: "Tab 10"
                  }]
                },
                {
                  type: "LayoutPanel",
                  label: "Tabs 1",
                  size: 218,
                  items: [{
                    id: "tabItem1",
                    type: "LayoutPanelItem",
                    label: "Tab 1"
                  }]
                }
              ]
            },
            {
              type: "LayoutPanel",
              label: "Tab 6",
              tabPosition: "hidden",
              size: 739,
              items: [{
                id: "tabItem6",
                type: "LayoutPanelItem",
                label: "Tab 6"
              }]
            }
          ]
        },
        {
          type: "LayoutGroup",
          orientation: "vertical",
          size: 334,
          items: [
            {
              type: "LayoutPanel",
              label: "Tabs 2",
              size: 604,
              items: [{
                id: "tabItem2",
                type: "LayoutPanelItem",
                label: "Tab 2"
              }]
            },
            {
              type: "LayoutPanel",
              label: "Tabs 3",
              size: 338,
              resizeMode: 'both',
              items: [{
                id: "tabItem7",
                type: "LayoutPanelItem",
                label: "Tab 7"
              }]
            }
          ]
        }
      ]
    }
  ];

  const mountReactWidget = (id, element) => {
    const container = document.getElementById(id);
    if (container) {
      const mount = document.createElement('div');
      container.appendChild(mount);
      createRoot(mount).render(element);
    }
  };

  const handleReady = () => {
    const layout = dockinglayoutRef.current;
    if (!layout || layout.items?.length > 0) return;

    layout.layout = layoutConfig;

    setTimeout(() => {
      mountReactWidget('tabItem10', <ProgressBar showProgressValue value={50} />);

      mountReactWidget('tabItem7', (
        <Gauge
          onChange={(e) => {
            const progress = document.querySelector('#tabItem10 smart-progress-bar');
            if (progress) {
              progress.value = e.detail.value;
            }
          }}
        />
      ));

      const carouselItems = Array.from({ length: 5 }, (_, i) => ({
        image: urlString + (100 + i)
      }));

      mountReactWidget('tabItem6', (
        <Carousel
          dataSource={carouselItems}
          swipe
          slideShow
          loop
          keyboard
        />
      ));

      mountReactWidget('tabItem2', (
        <MultilineTextBox
          value={`What is Lorem Ipsum? \n\nLorem Ipsum is simply dummy text of the printing and typesetting industry...`}
        />
      ));

      mountReactWidget('tabItem1', <Tank max={50} value={25} />);
    }, 100);
  };

  useEffect(() => {
    const layout = dockinglayoutRef.current;
    if (layout && typeof layout.whenRendered === 'function') {
      layout.whenRendered().then(() => handleReady());
    }
  }, []);

  return (
    <div>
      <DockingLayout
        ref={dockinglayoutRef}
        id="layout"
        autoSaveState
        autoLoadState
      />
      <div className="description">
        Automatic State Handling. Resize or reorder items. The state (like a snapshot of the layout)
        is automatically saved. Then open the demo again, and your layout is restored.
      </div>
    </div>
  );
};

export default App;

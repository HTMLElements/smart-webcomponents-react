import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { ProgressBar } from 'smart-webcomponents-react/progressbar';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Tank } from 'smart-webcomponents-react/tank';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

const App = () => {
  const dockinglayoutRef = useRef();
  const stateRef = useRef();
  const currentStateRef = useRef(null);

  const loadData = () => {
    if (!dockinglayoutRef.current || !dockinglayoutRef.current.items?.length) return;

    let progressBar1, progressBar2;

    // ProgressBar 1
    ReactDOM.render(<ProgressBar />, document.createDocumentFragment(), function () {
      progressBar1 = this;
      progressBar1.showProgressValue = true;
      document.getElementById('tabItem10')?.appendChild(progressBar1.nativeElement);
    });

    // ProgressBar 2
    ReactDOM.render(<ProgressBar />, document.createDocumentFragment(), function () {
      progressBar2 = this;
      progressBar2.showProgressValue = true;
      document.getElementById('tabItem10')?.appendChild(progressBar2.nativeElement);
    });

    // Gauge 1
    ReactDOM.render(<Gauge />, document.createDocumentFragment(), function () {
      this.nativeElement.addEventListener('change', e => {
        progressBar1.value = e.detail.value;
      });
      document.getElementById('tabItem7')?.appendChild(this.nativeElement);
    });

    // Gauge 2
    ReactDOM.render(<Gauge />, document.createDocumentFragment(), function () {
      this.analogDisplayType = 'fill';
      this.startAngle = 0;
      this.endAngle = 180;
      this.digitalDisplay = true;
      this.digitalDisplayPosition = 'center';
      this.nativeElement.addEventListener('change', e => {
        progressBar2.value = e.detail.value;
      });
      document.getElementById('tabItem8')?.appendChild(this.nativeElement);
    });

    // Carousel
    ReactDOM.render(<Carousel />, document.createDocumentFragment(), function () {
      const data = Array.from({ length: 5 }, (_, i) => ({
        image: `https://picsum.photos/1000/500/?image=${100 + i}`
      }));
      this.dataSource = data;
      this.swipe = this.slideShow = this.loop = this.indicators = this.keyboard = true;
      document.getElementById('tabItem6')?.appendChild(this.nativeElement);
    });

    // MultilineTextBox
    ReactDOM.render(<MultilineTextBox />, document.createDocumentFragment(), function () {
      this.value = `What is Lorem Ipsum?\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...`;
      document.getElementById('tabItem2')?.appendChild(this.nativeElement);
    });

    // Tank
    ReactDOM.render(<Tank />, document.createDocumentFragment(), function () {
      this.max = 50;
      this.value = 25;
      document.getElementById('tabItem1')?.appendChild(this.nativeElement);
    });

    // Print layout JSON
    dockinglayoutRef.current.getJSONStructure().then(state => {
      stateRef.current.innerHTML = JSON.stringify(state, null, 4);
    });
  };

  const handleLayout = () => {
    dockinglayoutRef.current.layout = [
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
                    items: [{ id: "tabItem10", label: "Tab 10", selected: true }]
                  },
                  {
                    type: "LayoutPanel",
                    label: "Tabs 1",
                    size: 218,
                    items: [{ id: "tabItem1", label: "Tab 1", selected: true }]
                  }
                ]
              },
              {
                type: "LayoutPanel",
                label: "Tab 6",
                tabPosition: "hidden",
                size: 739,
                items: [{ id: "tabItem6", label: "Tab 6", selected: true }]
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
                items: [{ id: "tabItem2", label: "Tab 2", selected: true }]
              },
              {
                type: "LayoutPanel",
                label: "Tabs 3",
                size: 338,
                resizeMode: "both",
                items: [
                  { id: "tabItem7", label: "Tab 7", selected: true },
                  { id: "tabItem8", label: "Tab 8" }
                ]
              }
            ]
          }
        ]
      }
    ];

    loadData();
  };

  const handleStateChange = () => {
    dockinglayoutRef.current.getJSONStructure().then(state => {
      stateRef.current.innerHTML = JSON.stringify(state, null, 4);
    });
  };

  const handleSaveState = () => dockinglayoutRef.current.saveState();

  const handleSaveCurrentState = () => {
    dockinglayoutRef.current.getState().then(value => {
      currentStateRef.current = value;
    });
  };

  const handleLoadState = () => {
    if (currentStateRef.current) {
      dockinglayoutRef.current.loadState(currentStateRef.current);
    }
  };

  const handleClearState = () => dockinglayoutRef.current.clearState();

  return (
    <div>
      <DockingLayout
        ref={dockinglayoutRef}
        id="layout"
        snapMode="simple"
        onReady={loadData}
        onStateChange={handleStateChange}
      ></DockingLayout>
      <div className="options">
        <div className="caption">State Maintenance</div>
        <div className="option"><Button onClick={handleLayout}>Load Layout</Button></div>
        <div className="option"><Button onClick={handleSaveState}>Save Layout State</Button></div>
        <div className="option"><Button onClick={handleSaveCurrentState}>Save Current State</Button></div>
        <div className="option"><Button onClick={handleLoadState}>Load Layout State</Button></div>
        <div className="option"><Button onClick={handleClearState}>Clear State</Button></div>
        <div className="option"><div ref={stateRef} id="state"></div></div>
      </div>
    </div>
  );
};

export default App;

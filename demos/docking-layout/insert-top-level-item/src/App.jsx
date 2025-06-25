import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';

const App = () => {
  const dockinglayoutRef = useRef(null);
  const [insertCount, setInsertCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const layout = [
    {
      type: 'LayoutPanel',
      label: 'Tabs 0',
      items: [
        {
          label: 'Tab 0',
          content: 'Content of Tab 0'
        }
      ]
    },
    {
      type: 'LayoutPanel',
      label: 'Tabs 1',
      items: [
        {
          label: 'Tab 1',
          content: 'Content of Tab 1'
        }
      ]
    }
  ];

  const validate = () => {
    const newCount = insertCount + 1;
    setInsertCount(newCount);

    if (newCount >= 2) {
      setDisabled(true);
    }

    return newCount <= 2;
  };

  const handleInsertLayout = (position) => {
    if (!validate()) return;

    const newLayoutItem = {
      label: 'New Item',
      items: [
        {
          label: 'New Tab Item',
          content: 'New Tab Item Content'
        }
      ]
    };

    dockinglayoutRef.current[`insertLayout${position}`](newLayoutItem);
  };

  return (
    <div>
      <DockingLayout ref={dockinglayoutRef} id="layout" layout={layout} />
      <div className="options">
        <div className="caption">Insert Layout</div>
        <div className="option">
          <Button
            id="insertLayoutLeft"
            onClick={() => handleInsertLayout('Left')}
            disabled={disabled}
          >
            Left
          </Button>
        </div>
        <div className="option">
          <Button
            id="insertLayoutRight"
            onClick={() => handleInsertLayout('Right')}
            disabled={disabled}
          >
            Right
          </Button>
        </div>
        <div className="option">
          <Button
            id="insertLayoutTop"
            onClick={() => handleInsertLayout('Top')}
            disabled={disabled}
          >
            Top
          </Button>
        </div>
        <div className="option">
          <Button
            id="insertLayoutBottom"
            onClick={() => handleInsertLayout('Bottom')}
            disabled={disabled}
          >
            Bottom
          </Button>
        </div>
      </div>
      <br />
      <br />
      <div className="description">
        Insert Top Level Docking Layout Item on Left, Right, Top, Bottom
      </div>
    </div>
  );
};

export default App;

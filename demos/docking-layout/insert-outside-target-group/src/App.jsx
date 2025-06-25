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
      type: 'LayoutGroup',
      size: '50%',
      orientation: 'horizontal',
      items: [
        {
          type: 'LayoutPanel',
          label: 'Tabs 0',
          size: '50%',
          items: [{ label: 'Tab 0', content: 'Content of Tab 0' }]
        },
        {
          type: 'LayoutPanel',
          label: 'Tabs 1',
          items: [{ label: 'Tab 1', content: 'Content of Tab 1' }]
        }
      ]
    },
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          type: 'LayoutPanel',
          label: 'Tabs 2',
          size: '25%',
          items: [{ label: 'Tab 2', content: 'Content of Tab 2' }]
        },
        {
          type: 'LayoutPanel',
          label: 'Tabs 3',
          items: [{ label: 'Tab 3', content: 'Content of Tab 3' }]
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

  const handleInsertOutsideTargetGroup = (position) => {
    if (!validate()) return;

    const newTab = {
      label: 'New Item',
      items: [
        {
          label: 'New Tab Item',
          content: 'New Tab Item Content'
        }
      ]
    };

    dockinglayoutRef.current[`insertOutsideTargetGroup${position}`](0, newTab);
  };

  return (
    <div>
      <DockingLayout ref={dockinglayoutRef} id="layout" layout={layout} />
      <div className="options">
        <div className="caption">Insert Outside Tab 0 and Tab 1 group:</div>
        <div className="option">
          <Button
            id="insertOutsideTargetGroupLeft"
            disabled={disabled}
            onClick={() => handleInsertOutsideTargetGroup('Left')}
          >
            Left
          </Button>
        </div>
        <div className="option">
          <Button
            id="insertOutsideTargetGroupRight"
            disabled={disabled}
            onClick={() => handleInsertOutsideTargetGroup('Right')}
          >
            Right
          </Button>
        </div>
        <div className="option">
          <Button
            id="insertOutsideTargetGroupTop"
            disabled={disabled}
            onClick={() => handleInsertOutsideTargetGroup('Top')}
          >
            Top
          </Button>
        </div>
        <div className="option">
          <Button
            id="insertOutsideTargetGroupBottom"
            disabled={disabled}
            onClick={() => handleInsertOutsideTargetGroup('Bottom')}
          >
            Bottom
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default App;

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Menu } from 'smart-webcomponents-react/menu';

const menuDataSource = [
  {
    label: 'File',
    items: [
      {
        label: 'New',
        shortcut: 'Ctrl+N'
      },
      {
        label: 'Open',
        shortcut: 'Ctrl+0'
      },
      {
        label: 'Open Containing Folder',
        items: [
          {
            label: 'Explorer'
          },
          {
            label: 'cmd'
          }
        ]
      },
      {
        label: 'Save',
        shortcut: 'Ctrl+S',
        disabled: true,
        separator: true
      },
      {
        label: 'Exit',
        shortcut: 'Alt+F4'
      }
    ]
  },
  {
    label: '<img id="helpIcon" src="https://www.htmlelements.com/demos/images/help-icon.png" title="Help" />'
  },
  {
    label: '<div className="planetIcon" title="Planet"></div>'
  },
  {
    label: 'About',
    value: 'customValue'
  }
];

function App() {
  // You can use useEffect for componentDidMount equivalent if needed
  // React.useEffect(() => {
  //   // componentDidMount logic here
  // }, []);

  return (
    <div>
      <Menu id="menu" dataSource={menuDataSource}></Menu>
    </div>
  );
}

export default App;
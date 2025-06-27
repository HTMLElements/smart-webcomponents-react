import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
import { Tree } from 'smart-webcomponents-react/tree';

const App = () => {
  const treeDataSource = [
    {
      label: 'Cats',
      selected: true,
      items: [
        { label: 'Tiger', selected: true },
        { label: 'Lion' },
        { label: 'Jaguar' },
        { label: 'Leopard' },
        { label: 'Serval' },
        { label: 'Domestic cat' },
      ],
    },
    {
      label: 'Dogs',
      items: [
        { label: 'Gray wolf' },
        { label: 'Ethiopian wolf', selected: true },
        { label: 'Arctic fox', selected: true },
        { label: 'Dingo' },
        { label: 'Domestic dog', selected: true },
      ],
    },
  ];

  return (
    <div>
      <Tree
        id="tree"
        scrollMode="scrollbar"
        className="animation"
        selectionMode="oneOrMany"
        showLines
        dataSource={treeDataSource}
      ></Tree>
    </div>
  );
};

export default App;

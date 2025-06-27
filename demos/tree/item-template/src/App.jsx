import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { Tree } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleClick = (event) => {
    const target = event.target;
    const button = target.closest('smart-button');
    if (!button) {
      return;
    }
    const input = button.previousElementSibling,
      editorItem = button.closest('smart-tree-item'),
      treeItemsGroup = button.closest('smart-tree-items-group');
    if (input.value) {
      const newItem = document.createElement('smart-tree-item');
      newItem.innerHTML = input.value;
      tree.current.addBefore(newItem, editorItem);
      input.value = '';
    }
  };

  useEffect(() => {
    const treeElement = tree.current;

    function handleSwipe(event) {
      const originalTarget = event.originalEvent.target,
        closestItem =
          originalTarget.closest('smart-tree-item') ||
          originalTarget.closest('smart-tree-items-group');
      if (closestItem && closestItem.level > 1 && closestItem.label !== 'editorTemplate') {
        const remove = window.confirm(
          'Do you wish to remove item "' + closestItem.label + '"?'
        );
        if (remove) {
          treeElement.removeItem(closestItem);
        }
      }
    }

    treeElement.nativeElement.addEventListener('swipeleft', handleSwipe);
    treeElement.nativeElement.addEventListener('swiperight', handleSwipe);

    // Create and append the editor template only once
    if (!document.getElementById('editorTemplate')) {
      const editorTemplate = document.createElement('template');
      editorTemplate.id = 'editorTemplate';
      editorTemplate.innerHTML = `
        <input class="tree-input" placeholder="New item..." />
        <smart-button class="btn primary" title="Add item">+</smart-button>
      `;
      document.body.appendChild(editorTemplate);
    }

    treeElement.dataSource = [
      {
        label: 'Groceries',
        expanded: true,
        items: [
          { label: 'Bread' },
          { label: 'Milk' },
          { label: 'Potatoes' },
          { label: 'editorTemplate' }
        ]
      },
      {
        label: 'To do',
        expanded: true,
        items: [
          { label: 'Check car' },
          { label: 'Attend board meeting' },
          { label: 'Take kids from school' },
          { label: 'Change light bulb' },
          { label: 'editorTemplate' }
        ]
      }
    ];

    return () => {
      // Cleanup event listeners
      treeElement.nativeElement.removeEventListener('swipeleft', handleSwipe);
      treeElement.nativeElement.removeEventListener('swiperight', handleSwipe);
    };
  }, []);

  return (
    <div>
      <em>
        Note: Sub-items can be removed by swiping left or right and can be edited by
        double-clicking or pressing F2.
      </em>
      <br />
      <br />
      <Tree
        ref={tree}
        id="tree"
        editable
        showLines
        showRootLines
        toggleElementPosition="near"
        onClick={handleClick}
      ></Tree>
    </div>
  );
};

export default App;

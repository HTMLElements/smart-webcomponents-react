import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);
  const menu = useRef(null);
  const itemRef = useRef(null);
  const itemGroupRef = useRef(null);

  const handleMenuItemClick = (event) => {
    const treeInstance = tree.current;
    const eventDetail = event.detail;
    const methodName = eventDetail.value;

    switch (methodName) {
      case 'addAfter':
      case 'addTo':
        ReactDOM.createRoot(document.createDocumentFragment()).render(
          <TreeItem>New item</TreeItem>,
          function () {
            treeInstance[methodName](
              this.nativeElement,
              methodName === 'addTo' ? itemGroupRef.current : (itemRef.current || itemGroupRef.current)
            );
          }
        );
        break;
      case 'removeItem':
        treeInstance[methodName](itemRef.current || itemGroupRef.current);
        break;
    }
  };

  useEffect(() => {
    const treeNative = tree.current.nativeElement;
    const menuInstance = menu.current;

    const onContextMenu = (event) => {
      const target = event.target;

      itemRef.current = target.closest('smart-tree-item');
      itemGroupRef.current = target.closest('smart-tree-items-group');

      if (!itemRef.current && !itemGroupRef.current) {
        return;
      }
      // Prevent the default context menu
      event.preventDefault();

      const menuItems = menuInstance.items;

      for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];

        // Disable "addTo" if clicked item is a leaf item
        if (menuItem.value === 'addTo' && itemRef.current) {
          menuItem.disabled = true;
        } else {
          menuItem.disabled = false;
        }
      }

      // Open the Smart.Menu at mouse position
      menuInstance.open(event.pageX, event.pageY);
    };

    treeNative.addEventListener('contextmenu', onContextMenu);

    return () => {
      treeNative.removeEventListener('contextmenu', onContextMenu);
    };
  }, []);

  return (
    <div>
      <div className="demo-description">
        <p>Right click on a Tree item to open the Context menu for the target item.</p>
      </div>
      <Tree ref={tree} id="tree">
        <TreeItemsGroup expanded>
          <i className="material-icons">fastfood</i> Fast Food
          <TreeItem>Subway</TreeItem>
          <TreeItem>Starbucks</TreeItem>
          <TreeItem>McDonald's</TreeItem>
          <TreeItem>Dunkin</TreeItem>
          <TreeItem>Burger King</TreeItem>
          <TreeItem>Pizza Hut</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">local_pizza</i> Pizza
          <TreeItem>Margherita</TreeItem>
          <TreeItem>Carbonara</TreeItem>
          <TreeItem>Quattro Stagioni</TreeItem>
          <TreeItem>Crudo</TreeItem>
          <TreeItem>Napoletana</TreeItem>
          <TreeItem>Frutti di Mare</TreeItem>
          <TreeItem>Diavola</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">local_bar</i> Drinks
          <TreeItem>Wine</TreeItem>
          <TreeItem>Coffee</TreeItem>
          <TreeItem>Lemonade</TreeItem>
          <TreeItem>Iced tea</TreeItem>
          <TreeItem>Milkshake</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          <i className="material-icons">cake</i> Snacks
          <TreeItem>Hummus</TreeItem>
          <TreeItem>Candy</TreeItem>
          <TreeItem>Snack Bars</TreeItem>
          <TreeItem>Nuts</TreeItem>
          <TreeItem>Crackers</TreeItem>
        </TreeItemsGroup>
      </Tree>
      <Menu
        ref={menu}
        mode="dropDown"
        close-action="down"
        onItemClick={handleMenuItemClick}
      >
        <MenuItem value="addAfter">
          <i className="material-icons">playlist_add</i>Add new sibling item
        </MenuItem>
        <MenuItem value="addTo">
          <i className="material-icons">playlist_add</i>Add new child item
        </MenuItem>
        <MenuItem value="removeItem">
          <i className="material-icons">delete</i>Delete item
        </MenuItem>
      </Menu>
    </div>
  );
};

export default App;

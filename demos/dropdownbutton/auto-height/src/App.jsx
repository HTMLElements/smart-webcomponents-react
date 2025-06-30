import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
    const dropdownbutton = useRef();
    const tree = useRef();

    const handleChange = useCallback((event) => {
        if (dropdownbutton.current) {
            dropdownbutton.current.placeholder = event.detail.item.label;
        }
    }, []);

    const handleReady = useCallback(() => {
        const dropDownButton = dropdownbutton.current;
        const treeElement = tree.current?.nativeElement;

        if (dropDownButton && treeElement) {
            // Get the label of the selected tree item
            const selected = treeElement.querySelector('smart-tree-item[selected], smart-tree-items-group[selected]');
            if (selected) {
                dropDownButton.placeholder = selected.label;
            }
        }
    }, []);

    return (
        <div>
            <DropDownButton
                ref={dropdownbutton}
                dropDownWidth="auto"
                onChange={handleChange}
            >
                <Tree ref={tree} onReady={handleReady}>
                    <TreeItem>Home</TreeItem>
                    <TreeItemsGroup>Solutions
                        <TreeItem>Education</TreeItem>
                        <TreeItem>Financial services</TreeItem>
                        <TreeItem>Government</TreeItem>
                        <TreeItem>Manufacturing</TreeItem>
                        <TreeItem>All industries and solutions</TreeItem>
                    </TreeItemsGroup>
                    <TreeItemsGroup expanded>Products
                        <TreeItem>PC products</TreeItem>
                        <TreeItem>Mobile products</TreeItem>
                        <TreeItem>All products</TreeItem>
                    </TreeItemsGroup>
                </Tree>
            </DropDownButton>
        </div>
    );
};

export default App;
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';

function App() {
    const listmenu = useRef();

    useEffect(() => {
        const listMenu = listmenu.current;

        if (!listMenu) return;

        function handleScrollBottomReached() {
            listMenu.displayLoadingIndicator = true;
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    const newItem = document.createElement('smart-menu-items-group');
                    newItem.value = 'emptyItem';
                    listMenu.addItem(newItem);
                }
                listMenu.displayLoadingIndicator = false;
            }, 1000);
        }

        function handleExpand(event) {
            if (event.detail.value === 'emptyItem') {
                listMenu.displayLoadingIndicator = true;
                setTimeout(() => {
                    for (let i = 0; i < 3; i++) {
                        const newItem = document.createElement('smart-menu-item');
                        listMenu.addItem(newItem, event.detail.path);
                    }
                    listMenu.displayLoadingIndicator = false;
                }, 1000);
                event.detail.item.value = 'populatedItem';
            }
        }

        listMenu.nativeElement.addEventListener("scrollBottomReached", handleScrollBottomReached);
        listMenu.nativeElement.addEventListener("expand", handleExpand);

        // Cleanup
        return () => {
            listMenu.nativeElement.removeEventListener("scrollBottomReached", handleScrollBottomReached);
            listMenu.nativeElement.removeEventListener("expand", handleExpand);
        };
    }, []);

    return (
        <div>
            <i>Hint: Scroll to the bottom to lazy load items.</i>
            <ListMenu ref={listmenu} id="listMenu">
                <MenuItem>Janet Leverling</MenuItem>
                <MenuItem>Andrew Fuller</MenuItem>
                <MenuItem>Robert King</MenuItem>
                <MenuItem>Anne Dodsworth</MenuItem>
                <MenuItem>Margaret Peacock</MenuItem>
                <MenuItem>Michael Suyama</MenuItem>
                <MenuItem>Nancy Davolio</MenuItem>
                <MenuItem>Steven Buchanan</MenuItem>
                <MenuItem>Laura Callahan</MenuItem>
            </ListMenu>
        </div>
    );
}

export default App;

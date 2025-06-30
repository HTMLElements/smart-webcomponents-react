import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

function App() {
    const menu = useRef();

    useEffect(() => {
        const handleItemClick = (event) => {
            window.open('https://en.wikipedia.org/wiki/' + event.detail.value, '_blank');
        };

        const menuEl = menu.current?.nativeElement;
        if (menuEl) {
            menuEl.addEventListener('itemClick', handleItemClick);

            // Optional: Cleanup on unmount
            return () => {
                menuEl.removeEventListener('itemClick', handleItemClick);
            };
        }
    }, []);

    return (
        <div>
            <Menu ref={menu} id="menu">
                <MenuItem value="Sun">
                    <img src="https://www.htmlelements.com/demos/images/sun.png" title="Sun" />Sun
                </MenuItem>
                <MenuItemsGroup>
                    <img src="https://www.htmlelements.com/demos/images/earth.png" title="Planets" />Planets
                    <MenuItem value="Earth">
                        <img src="https://www.htmlelements.com/demos/images/earth.png" title="Earth" />Earth
                    </MenuItem>
                    <MenuItem value="Mars">
                        <img src="https://www.htmlelements.com/demos/images/mars.png" title="Mars" />Mars
                    </MenuItem>
                </MenuItemsGroup>
                <MenuItem value="Moon">
                    <img src="https://www.htmlelements.com/demos/images/moon.png" title="Moon" />Moon
                </MenuItem>
            </Menu>
        </div>
    );
}

export default App;

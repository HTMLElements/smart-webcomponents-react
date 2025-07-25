import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';

const App = () => {
    // If you need logic from componentDidMount or init, consider useEffect/useCallback hooks

    return (
        <div>
            <ListMenu id="listMenu" filterable>
                <MenuItemsGroup>File
                    <MenuItem shortcut="Ctrl+N">New</MenuItem>
                    <MenuItem shortcut="Ctrl+0">Open</MenuItem>
                    <MenuItemsGroup>Open Containing Folder
                        <MenuItem>Explorer</MenuItem>
                        <MenuItem>cmd</MenuItem>
                    </MenuItemsGroup>
                    <MenuItem shortcut="Ctrl+S" disabled>Save</MenuItem>
                    <MenuItem shortcut="Ctrl+Alt+S" separator>Save As...</MenuItem>
                    <MenuItem shortcut="Alt+F4">Exit</MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup>Edit
                    <MenuItem shortcut="Ctrl+Z">Undo</MenuItem>
                    <MenuItem shortcut="Ctrl+Y" separator>Redo</MenuItem>
                    <MenuItem shortcut="Ctrl+X">Cut</MenuItem>
                    <MenuItem shortcut="Ctrl+C">Copy</MenuItem>
                    <MenuItem shortcut="Ctrl+V" disabled>Paste</MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup>Encoding
                    <MenuItem>Encode in ANSI</MenuItem>
                    <MenuItem>Encode in UTF-8</MenuItem>
                    <MenuItem>Encode in UTF-8-BOM</MenuItem>
                    <MenuItem>Encode in UTCS-2 BE BOM</MenuItem>
                    <MenuItem>Encode in UTCS-2 LE BOM</MenuItem>
                    <MenuItemsGroup separator>Character sets
                        <MenuItemsGroup>Cyrillic
                            <MenuItem>ISO 8859-5</MenuItem>
                            <MenuItem>KOI8-R</MenuItem>
                            <MenuItem>KOI8-U</MenuItem>
                            <MenuItem>Windows-1251</MenuItem>
                        </MenuItemsGroup>
                        <MenuItemsGroup>Chinese
                            <MenuItem>Big5 (Traditional)</MenuItem>
                            <MenuItem>GB2312 (Simplified)</MenuItem>
                        </MenuItemsGroup>
                        <MenuItemsGroup>Western European
                            <MenuItem>ISO 8859-1</MenuItem>
                            <MenuItem>ISO 8859-15</MenuItem>
                            <MenuItem>OEM 850</MenuItem>
                            <MenuItem>Windows-1252</MenuItem>
                        </MenuItemsGroup>
                    </MenuItemsGroup>
                    <MenuItem>Convert to ANSI</MenuItem>
                    <MenuItem>Convert to UTF-8</MenuItem>
                    <MenuItem>Convert to UTF-8-BOM</MenuItem>
                    <MenuItem>Convert to UTCS-2 BE BOM</MenuItem>
                    <MenuItem>Convert to UTCS-2 LE BOM</MenuItem>
                </MenuItemsGroup>
            </ListMenu>
        </div>
    );
};

export default App;

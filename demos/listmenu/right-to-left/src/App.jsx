import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';

const App = () => {
    // If you need lifecycle methods like componentDidMount, use useEffect:
    // React.useEffect(() => {
    //     // componentDidMount code here
    // }, []);

    return (
        <div>
            <ListMenu rightToLeft>
                <MenuItemsGroup>קובץ
                    <MenuItem shortcut="Ctrl+N">חדש</MenuItem>
                    <MenuItem shortcut="Ctrl+0">פתוח</MenuItem>
                    <MenuItemsGroup>תיקייה פתוחה המכילה
                        <MenuItem>מגלה ארצות</MenuItem>
                        <MenuItem>cmd</MenuItem>
                    </MenuItemsGroup>
                    <MenuItem shortcut="Ctrl+S" disabled>להציל</MenuItem>
                    <MenuItem shortcut="Ctrl+Alt+S" separator>שמור כ...</MenuItem>
                    <MenuItem shortcut="Alt+F4">יציאה</MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup>ערוך
                    <MenuItem shortcut="Ctrl+Z">לבטל</MenuItem>
                    <MenuItem shortcut="Ctrl+Y" separator>מוכן</MenuItem>
                    <MenuItem shortcut="Ctrl+X">גזירה</MenuItem>
                    <MenuItem shortcut="Ctrl+C">עותק</MenuItem>
                    <MenuItem shortcut="Ctrl+V" disabled>הדבק</MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup>קידוד
                    <MenuItem>קידוד ב- ANSI</MenuItem>
                    <MenuItem>קידוד ב- UTF-8</MenuItem>
                    <MenuItem>קידוד ב- UTF-8-BOM</MenuItem>
                    <MenuItem>קידוד ב- UTCS-2 BE BOM</MenuItem>
                    <MenuItem>קידוד ב- UTCS-2 LE BOM</MenuItem>
                    <MenuItemsGroup separator>ערכות תווים
                        <MenuItemsGroup>קירילית
                            <MenuItem>ISO 8859-5</MenuItem>
                            <MenuItem>KOI8-R</MenuItem>
                            <MenuItem>KOI8-U</MenuItem>
                            <MenuItem>Windows-1251</MenuItem>
                        </MenuItemsGroup>
                        <MenuItemsGroup>סינית
                            <MenuItem>Big5 (מסורתי)</MenuItem>
                            <MenuItem>GB2312 (מפושט)</MenuItem>
                        </MenuItemsGroup>
                        <MenuItemsGroup>Western European
                            <MenuItem>ISO 8859-1</MenuItem>
                            <MenuItem>ISO 8859-15</MenuItem>
                            <MenuItem>OEM 850</MenuItem>
                            <MenuItem>Windows-1252</MenuItem>
                        </MenuItemsGroup>
                    </MenuItemsGroup>
                    <MenuItem>להמיר ל ANSI</MenuItem>
                    <MenuItem>להמיר ל UTF-8</MenuItem>
                    <MenuItem>להמיר ל UTF-8-BOM</MenuItem>
                    <MenuItem>להמיר ל UTCS-2 BE BOM</MenuItem>
                    <MenuItem>להמיר ל UTCS-2 LE BOM</MenuItem>
                </MenuItemsGroup>
            </ListMenu>
        </div>
    );
};

export default App;

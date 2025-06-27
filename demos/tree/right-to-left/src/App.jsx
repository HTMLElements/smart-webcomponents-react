import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
  const tree = useRef(null);

  const handleShowLinesChange = (event) => {
    tree.current.showLines = event.detail.value;
  };

  const handleShowRootLinesChange = (event) => {
    tree.current.showRootLines = event.detail.value;
  };

  return (
    <div>
      <CheckBox id="showLines" checked onChange={handleShowLinesChange}>
        הצג שורות
      </CheckBox>
      <CheckBox id="showRootLines" checked onChange={handleShowRootLinesChange}>
        הצג קווי שורש
      </CheckBox>
      <br />
      <Tree
        ref={tree}
        id="tree4"
        filterable
        filterInputPlaceholder="סנן שאילתה ..."
        filterMode="containsIgnoreCase"
        rightToLeft
        showLines
        showRootLines
      >
        <TreeItem>בית</TreeItem>
        <TreeItemsGroup>
          פתרונות
          <TreeItem>חינוך</TreeItem>
          <TreeItem>שירותים פיננסיים</TreeItem>
          <TreeItem>ממשלה</TreeItem>
          <TreeItem>ייצור</TreeItem>
          <TreeItemsGroup>
            פתרונות
            <TreeItem>צילום ווידאו לצרכן</TreeItem>
            <TreeItem>נייד</TreeItem>
            <TreeItem>יישומי אינטרנט עשירים</TreeItem>
            <TreeItem>תקשורת טכנית</TreeItem>
            <TreeItem>הדרכה ולמידה אלקטרונית</TreeItem>
            <TreeItem>ועידת רשת</TreeItem>
          </TreeItemsGroup>
          <TreeItem>כל הענפים והפתרונות</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          מוצרים
          <TreeItem>מוצרי מחשב</TreeItem>
          <TreeItem>מוצרים ניידים</TreeItem>
          <TreeItem>כל המוצרים</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          תמיכה
          <TreeItem>תמיכה בבית</TreeItem>
          <TreeItem>שירות לקוחות</TreeItem>
          <TreeItem>בסיס ידע</TreeItem>
          <TreeItem>ספרים</TreeItem>
          <TreeItem>הכשרה והסמכה</TreeItem>
          <TreeItem>תוכניות תמיכה</TreeItem>
          <TreeItem>פורומים</TreeItem>
          <TreeItem>תיעוד</TreeItem>
          <TreeItem>עדכונים</TreeItem>
        </TreeItemsGroup>
        <TreeItemsGroup>
          קהילות
          <TreeItem>מעצבים</TreeItem>
          <TreeItem>מפתחים</TreeItem>
          <TreeItem>מחנכים ותלמידים</TreeItem>
          <TreeItem>שותפים</TreeItem>
          <TreeItemsGroup>
            לפי משאב
            <TreeItem>מעבדות</TreeItem>
            <TreeItem>טלוויזיה</TreeItem>
            <TreeItem>פורומים</TreeItem>
            <TreeItem>חליפין</TreeItem>
            <TreeItem>בלוגים</TreeItem>
            <TreeItem>התנסות בעיצוב</TreeItem>
          </TreeItemsGroup>
        </TreeItemsGroup>
        <TreeItemsGroup>
          החברה
          <TreeItem>עלינו</TreeItem>
          <TreeItem>ללחוץ</TreeItem>
          <TreeItem>קשרי משקיעים</TreeItem>
          <TreeItem>ענייני חברה</TreeItem>
          <TreeItem>קריירה</TreeItem>
          <TreeItem>חלון ראווה</TreeItem>
          <TreeItem>אירועים</TreeItem>
          <TreeItem>תיצור איתנו קשר</TreeItem>
          <TreeItem>להיות שותף</TreeItem>
        </TreeItemsGroup>
      </Tree>
    </div>
  );
};

export default App;

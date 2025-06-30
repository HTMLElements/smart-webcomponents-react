import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';

function App() {
  return (
    <div>
      <Splitter id="splitter" rightToLeft>
        <SplitterItem id="item0">
          <p>
            הנמר (Panthera tigris) הוא מין החתולים הגדול ביותר, שזוהה בעיקר בזכות
            דפוס הפסים האנכיים הכהים שלו על פרווה כתומה אדמדמה עם החלק התחתון הבהיר
            יותר.
          </p>
        </SplitterItem>
        <SplitterItem id="item1">
          <h2>טיגריס בנגלי</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
            alt="טיגריס בנגלי"
          />
          <p>
            מעיל הנמר של בנגל צהוב עד כתום בהיר, עם פסים הנעים בין חום כהה לשחור;
            הבטן והחלקים הפנימיים של הגפיים לבנים, והזנב כתום עם טבעות שחורות.
          </p>
          <p>
            אורך הזכרים הממוצע בין 270 ל 310 ס&quot;מ (110 עד 120 אינץ ') כולל הזנב, ואילו
            הנקבות בממוצע 240 עד 265 ס&quot;מ (94 עד 104 אינץ'). בדרך כלל הזנב הוא 85 עד
            110 ס&quot;מ.
          </p>
        </SplitterItem>
      </Splitter>
    </div>
  );
}

export default App;
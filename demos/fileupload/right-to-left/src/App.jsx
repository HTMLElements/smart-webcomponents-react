import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const App = () => {
    const fileupload = useRef();

    useEffect(() => {
        if (fileupload.current) {
            const messages = Object.assign({}, fileupload.current.messages);
            messages['he'] = {
                'browse': 'דפדף',
                'uploadFile': 'העלה קובץ',
                'cancelFile': 'בטל קובץ',
                'pauseFile': 'השהה קובץ',
                'uploadAll': 'העלה הכל',
                'cancelAll': 'בטל הכל',
                'pauseAll': 'השהה הכל',
                'totalFiles': 'סך הקבצים: ',
                'connectionError': '{{elementType}}: העלאת קובץ דורשת חיבור לשרת.',
                'wrongItemIndex': '{{elementType}}: אין קובץ עם אינדקס כזה ברשימת הקבצים שהועלה.',
                'tooLongFileName': '{{elementType}}: שם הקובץ ארוך מדי.'
            };
            fileupload.current.messages = messages;
        }
    }, []);

    return (
        <div>
            <div className="demo-description">
                העלאת קבצים - רכיב המאפשר להעלות קובץ אחד או מספר רב של קבצים.
            </div>
            <FileUpload ref={fileupload} rightToLeft locale="he"></FileUpload>
        </div>
    );
};

export default App;
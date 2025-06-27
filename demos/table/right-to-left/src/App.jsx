import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {

    const dataSource = GetData(100);

    const filtering = true;
    const filterRow = true;
    const keyboardNavigation = true;
    const locale = 'he';
    const paging = true;
    const rightToLeft = true;
    const sortMode = 'one';

    const messages = {
        'en': {
            'clearFilter': 'Clear filter',
            'CONTAINS': 'contains',
            'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)',
            'DOES_NOT_CONTAIN': 'does not contain',
            'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)',
            'EMPTY': 'empty',
            'ENDS_WITH': 'ends with',
            'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)',
            'EQUAL': 'equal',
            'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)',
            'filterPlaceholder': 'Filter',
            'filterCondition': 'Filter condition',
            'firstButton': 'First',
            'GREATER_THAN': 'greater than',
            'GREATER_THAN_OR_EQUAL': 'greater than or equal',
            'invalidValue': 'Invalid value',
            'itemsPerPage': 'Items per page:',
            'lastButton': 'Last',
            'LESS_THAN': 'less than',
            'LESS_THAN_OR_EQUAL': 'less than or equal',
            'nextButton': 'Next',
            'NOT_EMPTY': 'not empty',
            'NOT_EQUAL': 'not equal',
            'NOT_NULL': 'not null',
            'NULL': 'null',
            'previousButton': 'Previous',
            'STARTS_WITH': 'starts with',
            'STARTS_WITH_CASE_SENSITIVE': 'starts with (case sensitive)',
            'summaryPrefix': 'of'
        },
        'he': {
            'clearFilter': 'נקה את המסנן',
            'CONTAINS': 'מכיל',
            'CONTAINS_CASE_SENSITIVE': 'מכיל (רגיש רישיות)',
            'DOES_NOT_CONTAIN': 'לא מכיל',
            'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'אינו מכיל (רגיש רישיות)',
            'EMPTY': 'ריק',
            'ENDS_WITH': 'נגמר עם',
            'ENDS_WITH_CASE_SENSITIVE': 'מסתיים ב (רגיש רישיות)',
            'EQUAL': 'שווה',
            'EQUAL_CASE_SENSITIVE': 'שווה (רגיש אותיות רישיות)',
            'filterPlaceholder': 'סנן',
            'filterCondition': 'מצב סינון',
            'firstButton': 'ראשון',
            'GREATER_THAN': 'גדול מ',
            'GREATER_THAN_OR_EQUAL': 'גדול או שווה',
            'invalidValue': 'ערך לא תקין',
            'itemsPerPage': 'פריטים לעמוד:',
            'lastButton': 'אחרון',
            'LESS_THAN': 'פחות מ',
            'LESS_THAN_OR_EQUAL': 'פחות מ או שווה',
            'nextButton': 'הבא',
            'NOT_EMPTY': 'לא ריק',
            'NOT_EQUAL': 'לא שווה',
            'NOT_NULL': 'לא ריק',
            'NULL': 'null',
            'previousButton': 'קודם',
            'STARTS_WITH': 'מתחיל עם',
            'STARTS_WITH_CASE_SENSITIVE': 'מתחיל עם (רגיש רישיות)',
            'summaryPrefix': 'של'
        }
    };

    const columns = [
        {
            label: 'תעודת זהות',
            dataField: 'id',
            dataType: 'number'
        },
        {
            label: 'שם מוצר',
            dataField: 'productName',
            dataType: 'string'
        },
        {
            label: 'כמות',
            dataField: 'quantity',
            dataType: 'number'
        },
        {
            label: 'מחיר',
            dataField: 'price',
            dataType: 'number'
        },
        {
            label: 'תאריך רכישה',
            dataField: 'date',
            dataType: 'date'
        }
    ];

    return (
        <div>
            <div className="demo-description">
                This demo showcases the right-to-left layout of Table.
            </div>
            <Table
                id="table"
                dataSource={dataSource}
                filtering={filtering}
                filterRow={filterRow}
                keyboardNavigation={keyboardNavigation}
                locale={locale}
                messages={messages}
                paging={paging}
                rightToLeft={rightToLeft}
                sortMode={sortMode}
                columns={columns}
            />
        </div>
    );
};

export default App;

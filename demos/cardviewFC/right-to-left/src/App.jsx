import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { CardView } from 'smart-webcomponents-react/cardview';

export default function App() {

	function generateData(length) {
		const sampleData = [],
			firstNames = ['אנדרו', 'ננסי', 'שלי', "רג'ינה", 'יושי', 'אנטוני', 'מיומי', 'איאן', 'פיטר', 'לארס', 'פטרה', 'מרטין', 'סוון', 'אליו', 'ביט', 'שריל', 'מיכאל', 'גווילן'],
			lastNames = ['מלא יותר', 'דבוליו', 'בורק', 'מרפי', 'נגאס', 'סאוודרה', 'אוי לא', 'מתלהב', 'וילסון', 'פטרסון', 'וינקלר', 'וינקלר', 'פטרסן', 'רוסי', 'וילייד', 'סיילור', 'ביורן', 'נודייה'],
			petNames = ['סם', 'בוב', 'מזל', 'טומי', "צ'רלי", 'אוליבר', 'מיקסי', 'פלאפי', 'בלוט', 'מקור'],
			countries = ['בולגריה', 'ארה"ב', 'בריטניה', 'סינגפור', 'תאילנד', 'רוסיה', 'סין', 'בליז'],
			productNames = ['תה שחור', 'תה ירוק', 'קפה אספרסו', 'זוגות אספרסו', 'קפה לאטה', 'מוקה שוקולד לבן', 'קרמל לאטה', 'קפה אמריקנו', "קפוצ'ינו", 'אספרסו כמהין', 'אספרסו קון פנה', 'מנטה מנטה טוויסט'];
		for (let i = 0; i < length; i++) {
			const row = {};
			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
			row.petName = petNames[Math.floor(Math.random() * petNames.length)];
			row.country = countries[Math.floor(Math.random() * countries.length)];
			row.productName = productNames[Math.floor(Math.random() * productNames.length)];
			row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
			row.quantity = Math.round(Math.random() * (50 - 1) + 1);
			row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
			row.expired = Math.random() >= 0.5;
			row.attachments = [];
			const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
			for (let i = 0; i < maxAttachments; i++) {
				row.attachments.push(`https://www.htmlelements.com/demos/images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
			}
			row.attachments = row.attachments.join(',');
			sampleData[i] = row;
		}
		return sampleData;
	}

	const rightToLeft = true;

	const addNewButton = true;

	const dataSource = this.generateData(50);

	const columns = [
		{
			label: 'שם פרטי',
			dataField: 'firstName',
			icon: 'firstName'
		},
		{
			label: 'שם משפחה',
			dataField: 'lastName',
			icon: 'lastName'
		},
		{
			label: 'יום הולדת',
			dataField: 'birthday',
			icon: 'birthday',
			formatSettings: {
				formatString: 'd'
			}
		},
		{
			label: 'שם חיית המחמד',
			dataField: 'petName',
			icon: 'petName'
		},
		{
			label: 'מדינה',
			dataField: 'country',
			icon: 'country'
		},
		{
			label: 'שם מוצר',
			dataField: 'productName',
			icon: 'productName'
		},
		{
			label: 'מחיר',
			dataField: 'price',
			icon: 'price',
			formatSettings: {
				formatString: 'c2'
			}
		},
		{
			label: 'כמות',
			dataField: 'quantity',
			icon: 'quantity',
			formatFunction: function (settings) {
				const value = settings.value;
				let className;
				if (value < 20) {
					className = 'red';
				} else if (value < 35) {
					className = 'yellow';
				} else {
					className = 'green';
				}
				settings.template = `<div class="${className}">${value}</div>`;
			}
		},
		{
			label: 'זמן הרכישה',
			dataField: 'timeOfPurchase',
			icon: 'timeOfPurchase',
			formatSettings: {
				formatString: 'hh:mm tt'
			}
		},
		{
			label: 'לא בתוקף',
			dataField: 'expired',
			icon: 'expired',
			formatFunction: function (settings) {
				settings.template = settings.value ? '☑' : '☐';
			}
		},
		{
			label: 'קבצים מצורפים',
			dataField: 'attachments',
			image: true
		}
	];

	const coverField = 'attachments';

	const headerPosition = 'top';

	const editable = true;

	const titleField = 'firstName';

	const messages = {
		'he': {
			'addFilter': '+ הוסף פילטר',
			'addImage': 'הוסף',
			'and': 'ו',
			'apply': 'להגיש מועמדות',
			'booleanFirst': '☐',
			'booleanLast': '☑',
			'cancel': 'בטל',
			'CONTAINS': 'מכיל',
			'CONTAINS_CASE_SENSITIVE': 'מכיל (רגיש רישיות)',
			'coverField': 'שדה כיסוי',
			'crop': 'חיתוך',
			'customize': 'התאם אישית כרטיסים',
			'dateFirst': '1',
			'dateLast': '9',
			'dateTabLabel': 'תאריך',
			'DOES_NOT_CONTAIN': 'לא מכיל',
			'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'אינו מכיל (רגיש רישיות)',
			'draggedRecord': 'תקליט {{id}}',
			'EMPTY': 'ריק',
			'ENDS_WITH': 'נגמר עם',
			'ENDS_WITH_CASE_SENSITIVE': 'מסתיים ב (רגיש רישיות)',
			'EQUAL': 'שווה',
			'EQUAL_CASE_SENSITIVE': 'שווה (רגיש אותיות רישיות)',
			'filter': 'סנן',
			'filteredByMultiple': '{{n}} פילטרים',
			'filteredByOne': '1 סינון',
			'find': 'מצא שדה',
			'findInView': 'מצא בתצוגה',
			'firstBy': 'מיין לפי',
			'fit': 'בכושר',
			'found': '{{n}} של {{nth}}',
			'from': 'מ',
			'GREATER_THAN': 'גדול מ',
			'GREATER_THAN_OR_EQUAL': 'גדול או שווה',
			'imageUrl': 'כתובת אתר חדשה לתמונה:',
			'incorrectStructure': '"dataSource" חייב להיות מופע של smartDataAdapter או מערך של אובייקטים עם זוגות ערכי מפתח.',
			'LESS_THAN': 'פחות מ',
			'LESS_THAN_OR_EQUAL': 'פחות מ או שווה',
			'nextRecord': 'הרשומה הבאה',
			'noCoverField': 'אין שדה כיסוי',
			'noData': 'אין נתונים להצגה',
			'noFilters': 'לא הוחל מסננים',
			'noMatches': 'אין רשומות תואמות',
			'noSorting': 'לא הוחל מיון',
			'noResults': 'אין תוצאות',
			'NOT_EMPTY': 'לא ריק',
			'NOT_EQUAL': 'לא שווה',
			'NOT_NULL': 'לא ריק',
			'now': 'עכשיו',
			'NULL': 'null',
			'numberFirst': '1',
			'numberLast': '9',
			'ok': 'בסדר',
			'or': 'או', 
			'pickAnother': 'בחר שדה אחר למיון לפי',
			'previousRecord': 'הרשומה הקודמת',
			'reset': 'אִתחוּל',
			'removeImage': 'הסר',
			'sort': 'סוג',
			'sortedByMultiple': 'ממוין לפי שדות {{n}}',
			'sortedByOne': 'ממוין לפי שדה 1',
			'STARTS_WITH': 'מתחיל עם',
			'STARTS_WITH_CASE_SENSITIVE': 'מתחיל עם (רגיש רישיות)',
			'stringFirst': 'א',
			'stringLast': 'ז',
			'thenBy': 'ואז על ידי',
			'timeTabLabel': 'זמן',
			'toggleVisibility': 'החלף את נראות השדה',
			'where': 'איפה'
		}
	};

	return (
		<div>
			<CardView
				id="cardView"
				locale="he"
				rightToLeft={rightToLeft}
				addNewButton={addNewButton}
				dataSource={dataSource}
				columns={columns}
				coverField={coverField}
				headerPosition={headerPosition}
				editable={editable}
				titleField={titleField}
				messages={messages}
			></CardView>
		</div >
	)
}
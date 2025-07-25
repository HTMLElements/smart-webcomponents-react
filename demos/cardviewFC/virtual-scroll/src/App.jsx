import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { CardView } from 'smart-webcomponents-react/cardview';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 1000,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {
			fetch('https://randomuser.me/api/?results=' + (details.last - details.first + 1), {
				method: 'GET'
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					const results = data.results.map((result) => {
						return {
							picture: result.picture.large,
							name: result.name.first + ' ' + result.name.last,
							email: result.email,
							registered: new Date(result.registered.date)
						};
					});
					resultCallbackFunction({
						dataSource: results
					});
				});
		},
		dataFields: ['picture: string', 'name: string', 'email: string', 'registered: date']
	});
	const coverField = 'picture';
	const coverMode = 'fit';
	const columns = [
		{
			label: 'Name',
			dataField: 'name'
		},
		{
			label: 'Email',
			dataField: 'email',
			icon: 'email'
		},
		{
			label: 'Registered',
			dataField: 'registered',
			icon: 'registered',
			formatSettings: {
				formatString: 'd'
			}
		},
		{
			label: 'Picture',
			dataField: 'picture',
			image: true
		}
	];
	const scrolling = 'virtual';
	const titleField = 'name';

	return (
		<div>
			<div className="demo-description">CardView can operate in virtual mode, which greatly reduces the number
				of html elements on the web page and the start-up time when working with
				the component. In this demo, the CardView's data source is 1000 records.
				While you scroll, cards data is updated dynamically by the component depending
				on the scroll position and record index.</div>
			<CardView
				id="cardView"
				dataSource={dataSource}
				coverField={coverField}
				coverMode={coverMode}
				columns={columns}
				scrolling={scrolling}
				titleField={titleField}
			></CardView>
		</div >
	)
}
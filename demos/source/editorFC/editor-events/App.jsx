import { useRef } from "react";

import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const log = useRef();

	function handleEvent(e) {
		log.current.innerHTML += e.type + '<br />';
	}

	return (
		<div>
			<Editor id="editor"
				onChange={handleEvent.bind(this)}
				onActionStart={handleEvent.bind(this)}
				onActionEnd={handleEvent.bind(this)}
				onResizeStart={handleEvent.bind(this)}
				onResizeEnd={handleEvent.bind(this)}
				onInlineToolbarOpen={handleEvent.bind(this)}
				onInlineToolbarClose={handleEvent.bind(this)}
				onDropDownToolbarOpen={handleEvent.bind(this)}
				onDropDownToolbarClose={handleEvent.bind(this)}
				onDialogOpen={handleEvent.bind(this)}
				onDialogOpening={handleEvent.bind(this)}
				onDialogClose={handleEvent.bind(this)}
				onDialogClosing={handleEvent.bind(this)}
				onImageUploadSuccess={handleEvent.bind(this)}
				onImageUploadFailed={handleEvent.bind(this)}
				onToobarItemClick={handleEvent.bind(this)}
			>
				<p>
					<h1>HTML Image</h1>
					<img src="https://www.htmlelements.com/wp-content/design/assets/images/device-section-bg.png"
						alt="Smart HTML Elements Browser Support" />
				</p>
				<p>
					<h1>HTML Links</h1>
					<p><a href="https://www.htmlelements.com/">Smart Web Components Library</a>
					</p>
				</p>
				<p>
					<h1>HTML Table</h1>
					<table id="customers">
						<tr>
							<th>Company</th>
							<th>Contact</th>
							<th>Country</th>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Berglunds snabbköp</td>
							<td>Christina Berglund</td>
							<td>Sweden</td>
						</tr>
						<tr>
							<td>Centro comercial Moctezuma</td>
							<td>Francisco Chang</td>
							<td>Mexico</td>
						</tr>
						<tr>
							<td>Ernst Handel</td>
							<td>Roland Mendel</td>
							<td>Austria</td>
						</tr>
						<tr>
							<td>Island Trading</td>
							<td>Helen Bennett</td>
							<td>UK</td>
						</tr>
						<tr>
							<td>Königlich Essen</td>
							<td>Philip Cramer</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Laughing Bacchus Winecellars</td>
							<td>Yoshi Tannamuri</td>
							<td>Canada</td>
						</tr>
						<tr>
							<td>Magazzini Alimentari Riuniti</td>
							<td>Giovanni Rovelli</td>
							<td>Italy</td>
						</tr>
						<tr>
							<td>North/South</td>
							<td>Simon Crowther</td>
							<td>UK</td>
						</tr>
						<tr>
							<td>Paris spécialités</td>
							<td>Marie Bertrand</td>
							<td>France</td>
						</tr>
					</table>
				</p>
			</Editor>
			<div className="options">
				<h3>Events:</h3>
				<div className="demo-description">
					<p>Smart Editor fires the following events:</p>
					<ul>
						<li>change - fired on blur if the content has changed</li>
						<li>actionStart - fired when a Toolbar action is about to start. Cancelable</li>
						<li>actionEnd - fired when a Toolbar action has ended.</li>
						<li>resizeStart - fired when an image/table resizing has started</li>
						<li>resizeEnd - fired when an image/table resizing has ended</li>
						<li>inlineToolbarOpen - fired when the inline Toolbar is opening</li>
						<li>inlineToolbarClose - fired when the inline Toolbar is closed</li>
						<li>dropDownToolbarOpen - fired when the Drop Down Toolbar is opened</li>
						<li>dropDownToolbarClose - fired when the Drop Down Toolbar is closed</li>
						<li>dialogOpen - fired when the Dialog Window is opened</li>
						<li>dialogOpening - fired when the Dialog Window is opening. Cancelable</li>
						<li>dialogClose - fired when the Dialog Window is closed</li>
						<li>dialogClosing - fired when the Dialog Window is closing. Cancelable</li>
						<li>imageUploadSuccess - fired when the uploading of an image is successful</li>
						<li>imageUploadFailed - fired when the uploading of an image is unsuccessful</li>
						<li>toobarItemClick - fired when a toolbar item is clicked</li>
					</ul>
				</div>
				<div className="option" id="eventLog">
					<h3>Event Log:</h3>
					<div ref={log} id="log"></div>
				</div>
			</div>
		</div>
	)
}
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useEffect, useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const messageSettings = useRef({
		iconType: 'success',
		autoClose: true,
		autoCloseDelay: 5000
	});

	useEffect(() => {

		if (!editor.current) { return }

		setTimeout(() => {
			editor.current
				.showMessage(
					'Welcome ! A custom message will appear each time value of the Editor is changed',
					messageSettings.current
				);
		}, 50)


	}, [])

	const required = true;

	const handleChange = () => {
		messageSettings.current.iconType = 'warning';
		messageSettings.current.autoCloseDelay = 2500;

		editor.current.showMessage(
			'The Editor value has changed ! Current number of chars inside:' + editor.current.getCharCount(),
			messageSettings.current
		);
	}

	const showMessage = () => {
		editor.current.showMessage('Show Message button clicked', messageSettings.current);
	}

	const hideLastMessage = () => {
		editor.current.hideLastMessage();
	}

	const hideMessages = () => {
		editor.current.hideMessage();
	}

	const handleRadioButtonChange = (value) => {
		messageSettings.current.iconType = value;
	}

	return (
		<div>
			<Editor
				ref={editor}
				id="editor"
				required={required}
				onChange={handleChange}
			>
				<div className="section">
					<div>
						<h2 style={{ textAlign: 'center' }}>Camels</h2>
						<p>A camel is an even-toed ungulate in the genus Camelus that bears distinctive
							fatty deposits known as "humps" on its back. Camels have long been domesticated
							and, as livestock, they provide food (milk and meat) and textiles (fiber
							and felt from hair). Camels are working animals especially suited to their
							desert habitat and are a vital means of transport for passengers and cargo.
							There are three surviving species of camel. The one-humped dromedary makes
							up 94% of the world's camel population, and the two-humped Bactrian camel
							makes up 6%. The Wild Bactrian camel is a separate species and is now critically
							endangered. The word camel is also used informally in a wider sense, where
							the more correct term is "camelid", to include all seven species of the
							family Camelidae: the true camels (the above three species), along with
							the "New World" camelids: the llama, the alpaca, the guanaco, and the vicuña.
							The word itself is derived via Latin: camelus and Greek: κάμηλος (kamēlos)
							from Hebrew, Arabic or Phoenician: gāmāl.</p>
					</div>
					<img src="./../../../src/images/travel/1.jpg"></img>
				</div>
			</Editor>
			<div className="options">
				<div className="description">
					<h4>Editor Messages</h4>
					<p>Messages can be displayed inside the Editor via the <b>showMessage</b> API
						method. Messages can be customized.</p>
					<p>The <b>required</b> property set to the Editor opens an error message on
						Editor blur if the content is empty.</p>
				</div>
				<div className="option">
					<h3>Select a message type:</h3>
					<RadioButton id="info" onChange={handleRadioButtonChange.bind(null, 'info')}>Info</RadioButton>
					<RadioButton id="success" checked onChange={handleRadioButtonChange.bind(null, 'success')}>Success</RadioButton>
					<RadioButton id="warning" onChange={handleRadioButtonChange.bind(null, 'warning')}>Warning</RadioButton>
				</div>
				<div className="option">
					<Button id="showMessage" onClick={showMessage}>Show Message</Button>
					<Button id="hideLastMessage" onClick={hideLastMessage}>Hide Last Message</Button>
					<Button id="hideAllMessages" onClick={hideMessages}>Hide All Messages</Button>
				</div>
			</div>
		</div>
	)
}
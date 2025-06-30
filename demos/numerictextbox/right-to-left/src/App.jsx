import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
	const numerictextbox = useRef();

	useEffect(() => {
		if (numerictextbox.current) {
			const messages = { ...numerictextbox.current.messages };

			messages['he'] = {
				'binary': 'בינארי',
				'octal': 'אוקטלית',
				'decimal': 'עשרוני',
				'hexadecimal': 'הקסדצימלי',
				'integerOnly': 'smartNumericTextBox: The property {{property}} can only be set when inputFormat is integer.',
				'noInteger': 'smartNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.',
				'significantPrecisionDigits': 'smartNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time.'
			};

			numerictextbox.current.messages = messages;
		}
	}, []);

	return (
		<div>
			<NumericTextBox
				ref={numerictextbox}
				id="myCustomElement"
				inputFormat="integer"
				dropDownEnabled
				value="100"
				spinButtons
				radixDisplay
				spinButtonsStep="1"
				enableMouseWheelAction
				locale="he"
				rightToLeft
			/>
		</div>
	);
}

export default App;

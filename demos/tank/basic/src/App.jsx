import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
	return (
		<div>
			<Tank id="tank" max="100" value="22" interval="10"></Tank>
		</div>
	);
}

export default App;

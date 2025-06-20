import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Input } from 'smart-webcomponents-react/input';
import { MultiComboInput } from 'smart-webcomponents-react/multicomboinput';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const input = useRef();
	const input2 = useRef();
	const input3 = useRef();
	const multicomboinput = useRef();
	const multicomboinput2 = useRef();
	const multicomboinput3 = useRef();

	const tags = ['a', 'div', 'img', 'li', 'p', 'ul', 'span', 'table', 'tbody', 'td', 'tr', 'h4'];

	const attributes = ['class', 'href', 'style', 'src'];

	const styleAttributes = ['background-color', 'float'];

	const inputProps = {
		dropDownButtonPosition: 'right',
		readonly: true,
		dataSource: [{
			label: 'Black List',
			value: 'blackList'
		},
		{
			label: 'White List',
			value: 'whiteList'
		}]
	};

	const initialValue = `
		<div class="section">
		<div>
			<h2 style="text-align: center;">Camels</h2>
			<p style="background-color: floralwhite;">A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as
				"humps"
				on its back. Camels have long been domesticated and, as livestock, they provide food (milk and meat)
				and
				textiles (fiber and felt from hair). Camels are working animals especially suited to their desert
				habitat
				and are a vital means of transport for passengers and cargo. There are three surviving species of
				camel.
				The
				one-humped dromedary makes up 94% of the world's camel population, and the two-humped Bactrian camel
				makes
				up 6%. The Wild Bactrian camel is a separate species and is now critically endangered.

				The word camel is also used informally in a wider sense, where the more correct term is "camelid",
				to
				include all seven species of the family Camelidae: the true camels (the above three species), along
				with
				the
				"New World" camelids: the llama, the alpaca, the guanaco, and the vicuña. The word itself is derived
				via
				Latin: camelus and Greek: κάμηλος (kamēlos) from Hebrew, Arabic or Phoenician: gāmāl.</p>

				<h4>Three types of camels:</h4>
				<ul>
					<li>Bactrian camel</li>
					<li>Dromedary / Arabian camel</li>
					<li>Wild Bactrian camel</li>
				</ul>

				<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Common name</th>
						<th>Scientific name</th>
						<th>Distribution
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src="./../../../src/images/bactrial-camel.min.jpg" width="120" height="95" />
						</td>
						<td>Bactrian camel</td>
						<td><i>Camelus bactrianus</i></td>
						<td>domesticated; Central Asia, including the
							historical region of Bactria.
						</td>
					</tr>
					<tr>
						<td>
							<img src="./../../../src/images/arabian-camel.min.jpg" width="120" height="93" />
						</td>
						<td>
							Dromedary / Arabian camel
						</td>
						<td><i>Camelus dromedarius</i></td>
						<td>domesticated; the Middle East, Sahara Desert and Afghanistan; introduced to Australia </td>
					</tr>
					<tr>
						<td><img src="./../../../src/images/wild-bactrian-camel.min.jpg" width="120" height="90" /></td>
						<td>Wild Bactrian camel</td>
						<td><i>Camelus ferus</i></td>
						<td>Remote areas of northwest China and Mongolia </td>
					</tr>
				</tbody>
			</table>

				<p>
					<a href="https://en.wikipedia.org/wiki/Camel">You can read more about it here</a>
				</p>
		</div>
		<img src="./../../../src/images/travel/1.jpg"></img>
		</div>
		`;

	const contentFiltering = {
		tags: tags,
		tagFilterMode: 'blackList',
		attributes: attributes,
		attributeFilterMode: 'whiteList',
		styleAttributes: styleAttributes,
		styleAttributeFilterMode: 'blackList'
	}

	const tagFilterModeSettings = Object.assign({
		value: 'Black List'
	}, inputProps);

	const attributeFilterModeSettings = Object.assign({
		value: 'White List'
	}, inputProps);

	const styleAttributeFilterModeSettings = Object.assign({
		value: 'Black List'
	}, inputProps);

	const tagsInputSettings = {
		dropDownButtonPosition: 'right',
		dataSource: tags,
		value: tags.toString()
	};

	const attributesInputSettings = {
		dropDownButtonPosition: 'right',
		dataSource: attributes,
		value: attributes.toString()
	};

	const styleAttributesSettings = {
		dropDownButtonPosition: 'right',
		dataSource: styleAttributes,
		value: styleAttributes.toString()
	};

	const handleOptionChange = () => {
		
		editor.current.contentFiltering = {
			tags: multicomboinput.current.value.split(','),
			tagFilterMode: inputProps.dataSource.find(i => i.label === input.current.value).value,
			attributes: multicomboinput2.current.value.split(','),
			attributeFilterMode: inputProps.dataSource.find(i => i.label === input2.current.value).value,
			styleAttributes: multicomboinput3.current.value.split(','),
			styleAttributeFilterMode: inputProps.dataSource.find(i => i.label === input3.current.value).value
		};

		editor.current.value = initialValue;
	}

	return (
		<div>
			<Editor
				ref={editor}
				id="editor"
				value={initialValue}
				contentFiltering={contentFiltering}
			></Editor>
			<div className="options">
				<div className="description">
					<h4>Content Filtering</h4>
					<p><b>Smart.Editor</b> allows to filter out elements, element attributes or
						element style attributes via it's <b>contentFiltering</b> property.</p>
					<p>Making changes to the editor below will automatically refresh the content
						of the Editor based on the new settings.</p>
				</div>
				<div className="option">
					<h4>Tag Filter Settings:</h4>
					<Input
						ref={input}
						id="tagFilterMode"
						onChange={handleOptionChange}
						{...tagFilterModeSettings}
					></Input>
					<MultiComboInput
						ref={multicomboinput}
						id="tags"
						onChange={handleOptionChange}
						{...tagsInputSettings}
					></MultiComboInput>
				</div>
				<div className="option">
					<h4>Attribute Filter Settings:</h4>
					<Input
						ref={input2}
						id="attributeFilterMode"
						onChange={handleOptionChange}
						{...attributeFilterModeSettings}
					></Input>
					<MultiComboInput
						ref={multicomboinput2}
						id="attributes"
						onChange={handleOptionChange}
						{...attributesInputSettings}
					></MultiComboInput>
				</div>
				<div className="option">
					<h4>Style Attribute Filter Settings:</h4>
					<Input
						ref={input3}
						id="styleAttributeFilterMode"
						onChange={handleOptionChange}
						{...styleAttributeFilterModeSettings}
					></Input>
					<MultiComboInput
						ref={multicomboinput3}
						id="styleAttributes"
						onChange={handleOptionChange}
						{...styleAttributesSettings}
					></MultiComboInput>
				</div>
			</div>
		</div>
	)
}
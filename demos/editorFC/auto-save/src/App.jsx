import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const autoSave = true;

	const autoLoad = true;

	const autoSaveInterval = 500; //The interval in miliseconds

	const handleEvent = (type) => {

		switch (type) {
			case 'save':
				editor.current.saveState();
				break;
			case 'load':
				editor.current.loadState();
				break;
			case 'delete':
				editor.current.clearState();
				break;
			case 'autoSave':
				editor.current.autoSave = !editor.current.autoSave;
				break
			case 'autoLoad':
				editor.current.autoLoad = !editor.current.autoLoad;
				break
		}
	}
	return (
		<div>
			<Editor
				ref={editor}
				id="editor"
				autoSave={autoSave}
				autoLoad={autoLoad}
				autoSaveInterval={autoSaveInterval}
			>
				<h1 style={{ textAlign: 'center' }}><a href="https://en.wikipedia.org/wiki/Sozopol">Sozopol</a></h1>
				<p>
					<b>Sozopol&nbsp;</b><u>(Bulgarian:&nbsp;Созопол&nbsp;[soˈzɔpoɫ],&nbsp;Greek:&nbsp;Σωζόπολη,
					Sozopoli)</u>&nbsp;is an ancient seaside town&nbsp;located
					35 km south of&nbsp;Burgas&nbsp;on the southern&nbsp;Bulgarian Black Sea
					Coast. Today it is one of the major seaside resorts in the country, known
					for the&nbsp;Apollonia&nbsp;art and film festival (which takes place in
					early September) that is named after one of the town's ancient names.The
					busiest times of the year are the summer months, ranging from May to September
					as tourists from around the world come to enjoy the weather, sandy beaches,
					history and culture, fusion cuisine (Balkan&nbsp;and&nbsp;Mediterranean),
					and atmosphere of the colourful resort.Part of&nbsp;Burgas Province&nbsp;and
					administrative centre of the homonymous&nbsp;Sozopol Municipality, as of
					December 2009, the town has a population of 5,410 inhabitants.
					<br />
				</p>
				<h3>Climate</h3>
				<table style={{ width: '100%', textAlign: 'center', lineHeight: '1.2em', margin: 'auto' }}>
					<tbody>
						<tr>
							<th colSpan={14}><span className="mw-collapsible-toggle mw-collapsible-toggle-default" role="button" tabIndex={0} aria-expanded="true" />Climate data for Sozopol (2004-2017)</th>
						</tr>
						<tr>
							<th scope="row">Month</th>
							<th scope="col">Jan</th>
							<th scope="col">Feb</th>
							<th scope="col">Mar</th>
							<th scope="col">Apr</th>
							<th scope="col">May</th>
							<th scope="col">Jun</th>
							<th scope="col">Jul</th>
							<th scope="col">Aug</th>
							<th scope="col">Sep</th>
							<th scope="col">Oct</th>
							<th scope="col">Nov</th>
							<th scope="col">Dec</th>
							<th scope="col" style={{ borderLeftWidth: 'medium' }}>Year</th>
						</tr>
						<tr style={{ textAlign: 'center' }}>
							<th scope="row" style={{ height: '16px' }}>Average high °C (°F)</th>
							<td style={{ background: '#FFE5CC', color: '#000000' }}>8.2
								<br />(46.8)</td>
							<td style={{ background: '#FFD7B0', color: '#000000' }}>10.2
								<br />(50.4)</td>
							<td style={{ background: '#FFC790', color: '#000000' }}>12.5
								<br />(54.5)</td>
							<td style={{ background: '#FFA74F', color: '#000000' }}>17.2
								<br />(63.0)</td>
							<td style={{ background: '#FF7C00', color: '#000000' }}>23.5
								<br />(74.3)</td>
							<td style={{ background: '#FF6300', color: '#000000' }}>27.1
								<br />(80.8)</td>
							<td style={{ background: '#FF5000', color: '#000000' }}>29.8
								<br />(85.6)</td>
							<td style={{ background: '#FF5100', color: '#000000' }}>29.7
								<br />(85.5)</td>
							<td style={{ background: '#FF6A00', color: '#000000' }}>26.1
								<br />(79.0)</td>
							<td style={{ background: '#FF8914', color: '#000000' }}>21.5
								<br />(70.7)</td>
							<td style={{ background: '#FFB367', color: '#000000' }}>15.5
								<br />(59.9)</td>
							<td style={{ background: '#FFD7B0', color: '#000000' }}>10.2
								<br />(50.4)</td>
							<td style={{ background: '#FF9730', color: '#000000', borderLeftWidth: 'medium' }}>19.5
								<br />(67.1)</td>
						</tr>
						<tr style={{ textAlign: 'center' }}>
							<th scope="row" style={{ height: '16px' }}>Daily mean °C (°F)</th>
							<td style={{ background: '#F5F5FF', color: '#000000' }}>2.7
								<br />(36.9)</td>
							<td style={{ background: '#FFFCFA', color: '#000000' }}>4.8
								<br />(40.6)</td>
							<td style={{ background: '#FFE3C7', color: '#000000' }}>8.5
								<br />(47.3)</td>
							<td style={{ background: '#FFC082', color: '#000000' }}>13.5
								<br />(56.3)</td>
							<td style={{ background: '#FF9934', color: '#000000' }}>19.2
								<br />(66.6)</td>
							<td style={{ background: '#FF7E00', color: '#000000' }}>23.1
								<br />(73.6)</td>
							<td style={{ background: '#FF6800', color: '#000000' }}>26.3
								<br />(79.3)</td>
							<td style={{ background: '#FF6C00', color: '#000000' }}>25.8
								<br />(78.4)</td>
							<td style={{ background: '#FF8811', color: '#000000' }}>21.7
								<br />(71.1)</td>
							<td style={{ background: '#FFA74F', color: '#000000' }}>17.2
								<br />(63.0)</td>
							<td style={{ background: '#FFD1A4', color: '#000000' }}>11.1
								<br />(52.0)</td>
							<td style={{ background: '#FFF1E3', color: '#000000' }}>6.5
								<br />(43.7)</td>
							<td style={{ background: '#FFB367', color: '#000000', borderLeftWidth: 'medium' }}>15.5
								<br />(59.9)</td>
						</tr>
						<tr style={{ textAlign: 'center' }}>
							<th scope="row" style={{ height: '16px' }}>Average low °C (°F)</th>
							<td style={{ background: '#EDEDFF', color: '#000000' }}>1.2
								<br />(34.2)</td>
							<td style={{ background: '#F3F3FF', color: '#000000' }}>2.3
								<br />(36.1)</td>
							<td style={{ background: '#FFF6EE', color: '#000000' }}>5.7
								<br />(42.3)</td>
							<td style={{ background: '#FFDEBE', color: '#000000' }}>9.2
								<br />(48.6)</td>
							<td style={{ background: '#FFBC79', color: '#000000' }}>14.2
								<br />(57.6)</td>
							<td style={{ background: '#FFA143', color: '#000000' }}>18.1
								<br />(64.6)</td>
							<td style={{ background: '#FF8914', color: '#000000' }}>21.5
								<br />(70.7)</td>
							<td style={{ background: '#FF8914', color: '#000000' }}>21.5
								<br />(70.7)</td>
							<td style={{ background: '#FFA851', color: '#000000' }}>17.1
								<br />(62.8)</td>
							<td style={{ background: '#FFC081', color: '#000000' }}>13.6
								<br />(56.5)</td>
							<td style={{ background: '#FFEBD8', color: '#000000' }}>7.3
								<br />(45.1)</td>
							<td style={{ background: '#F5F5FF', color: '#000000' }}>2.8
								<br />(37.0)</td>
							<td style={{ background: '#FFCA96', color: '#000000', borderLeftWidth: 'medium' }}>12.1
								<br />(53.8)</td>
						</tr>
						<tr style={{ textAlign: 'center' }}>
							<th scope="row" style={{ height: '16px' }}>Average precipitation mm (inches)</th>
							<td style={{ background: '#B7FFB7', color: '#000000' }}>48
								<br />(1.9)</td>
							<td style={{ background: '#B8FFB8', color: '#000000' }}>43
								<br />(1.7)</td>
							<td style={{ background: '#C4FFC4', color: '#000000' }}>39
								<br />(1.5)</td>
							<td style={{ background: '#B6FFB6', color: '#000000' }}>47
								<br />(1.9)</td>
							<td style={{ background: '#B8FFB8', color: '#000000' }}>47
								<br />(1.9)</td>
							<td style={{ background: '#B9FFB9', color: '#000000' }}>45
								<br />(1.8)</td>
							<td style={{ background: '#C9FFC9', color: '#000000' }}>36
								<br />(1.4)</td>
							<td style={{ background: '#D5FFD5', color: '#000000' }}>28
								<br />(1.1)</td>
							<td style={{ background: '#B9FFB9', color: '#000000' }}>45
								<br />(1.8)</td>
							<td style={{ background: '#B1FFB1', color: '#000000' }}>52
								<br />(2.0)</td>
							<td style={{ background: '#8EFF8E', color: '#000000' }}>73
								<br />(2.9)</td>
							<td style={{ background: '#A2FFA2', color: '#000000' }}>62
								<br />(2.4)</td>
							<td style={{ background: '#B7FFB7', color: '#000000', borderLeftWidth: 'medium' }}>565
								<br />(22.2)</td>
						</tr>
						<tr style={{ textAlign: 'center' }}>
							<th scope="row" style={{ height: '16px' }}>Average precipitation days <span style={{ fontSize: '90%' }} className="nowrap">(≥ 1 mm)</span>
							</th>
							<td style={{ background: '#7171FF', color: '#000000' }}>11.5</td>
							<td style={{ background: '#8E8EFF', color: '#000000' }}>8.3</td>
							<td style={{ background: '#ADADFF', color: '#000000' }}>6.6</td>
							<td style={{ background: '#CACAFF', color: '#000000' }}>4.1</td>
							<td style={{ background: '#D1D1FF', color: '#000000' }}>3.7</td>
							<td style={{ background: '#C9C9FF', color: '#000000' }}>4.2</td>
							<td style={{ background: '#DEDEFF', color: '#000000' }}>2.6</td>
							<td style={{ background: '#DCDCFF', color: '#000000' }}>2.8</td>
							<td style={{ background: '#C5C5FF', color: '#000000' }}>4.5</td>
							<td style={{ background: '#A6A6FF', color: '#000000' }}>7.2</td>
							<td style={{ background: '#BFBFFF', color: '#000000' }}>5.0</td>
							<td style={{ background: '#8181FF', color: '#000000' }}>10.2</td>
							<td style={{ background: '#B5B5FF', color: '#000000', borderLeftWidth: 'medium' }}>70.2</td>
						</tr>
						<tr style={{ textAlign: 'center' }}>
							<th scope="row" style={{ height: '16px' }}>Mean monthly</th>
							<td style={{ background: '#AAAAA4', color: '#000000' }}>95</td>
							<td style={{ background: '#BABA45', color: '#000000' }}>118</td>
							<td style={{ background: '#CDCD00', color: '#000000' }}>171</td>
							<td style={{ background: '#DFDF00', color: '#000000' }}>226</td>
							<td style={{ background: '#E5E500', color: '#000000' }}>261</td>
							<td style={{ background: '#F1F112', color: '#000000' }}>302</td>
							<td style={{ background: '#F4F418', color: '#000000' }}>324</td>
							<td style={{ background: '#EDED08', color: '#000000' }}>295</td>
							<td style={{ background: '#E3E300', color: '#000000' }}>245</td>
							<td style={{ background: '#D2D200', color: '#000000' }}>181</td>
							<td style={{ background: '#B2B279', color: '#000000' }}>107</td>
							<td style={{ background: '#8A8A8A', color: '#FFFFFF' }}>76</td>
							<td style={{ background: '#D8D800', color: '#000000', borderLeftWidth: 'medium' }}>2,401</td>
						</tr>
					</tbody>
				</table>
				<h3>Name</h3>
				<div className="img-left">
					<img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sozopol_TodorBozhinov_2009_%288%29.jpg/220px-Sozopol_TodorBozhinov_2009_%288%29.jpg" decoding="async" width={220} height={294} alignment="left" />
					<div className="thumbcaption">A reconstructed gate part of Sozopol's ancient fortifications</div>
				</div>
				<p> <i>
					Sozopol is one of the oldest towns on Bulgarian Thrace's Black Sea coast. The first settlement on the
					site
					dates back to the Bronze Age. Undersea explorations in the region of the port reveal relics of
					dwellings,
					ceramic pottery, stone and bone tools from that era. Many anchors from the second and first millennium
					BC
					have been discovered in the town's bay, a proof of active shipping since ancient times.
					The town was founded in the 7th century BC by Greek colonists from Miletus as Antheia (Ancient Greek:
					Ἄνθεια). The town established itself as a trade and naval centre in the following centuries and became
					one
					of the largest and richest Greek colonies in the Black Sea region. Its trade influence in the Thracian
					territories was based on a treaty dating from the fifth century BC with the Odrysian kingdom, the most
					powerful Thracian state. Apollonia became a legendary trading rival of another Greek colony, Mesembria,
					today’s Nessebar.
					The name was changed to Apollonia,[3] on account of a temple dedicated to Apollo in the town.
					There were two temples of Apollo Iatros (Ancient Greek: Ἀπόλλων Ἰατρός), meaning healer in Greek. One
					from
					the Late Archaic period and the other from the Early Classical period.[4]
					It kept strong political and trade relations with the cities of Ancient Greece – Miletus, Athens,
					Corinth,
					Heraclea Pontica and the islands Rhodes, Chios, Lesbos, etc.
					Terracotta plaque of ancient Greek hoplites (Louvre)
					The city managed to keep its independence during the wars of Phillip II of Macedon (342-339 BC) and
					Alexander the Great (335 BC).
					In 72 BC it was conquered and sacked by the Roman legions of Marcus Lucullus, who transported the statue
					of
					Apollo to Rome and placed it in the Capitol.
				</i>
				</p>
			</Editor>
			<div className="options">
				<div className="description">
					<h4>Editor State Options</h4>
				</div>
				<div className="option">
					<CheckBox id="autoSaveState" checked onChange={handleEvent.bind(this, 'autoSave')}>Auto Save State</CheckBox>
					<CheckBox id="autoLoadState" onChange={handleEvent.bind(this, 'autoLoad')}
						checked>Auto Load State</CheckBox>
				</div>
				<div className="option">
					<Button id="saveState" onClick={handleEvent.bind(this, 'save')}>Save</Button>
					<Button id="loadState" onClick={handleEvent.bind(this, 'load')}>Load</Button>
					<Button id="deleteState" onClick={handleEvent.bind(this, 'delete')}>Delete</Button>
				</div>
			</div>
		</div>
	)
}

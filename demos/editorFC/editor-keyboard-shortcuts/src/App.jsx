import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {
	return (
		<div>
			<Editor id="editor">
				<div className="home-benefits-list">
					<h4 className="section-title underline red">Benefits of using Smart UI Toolkit</h4>
					<ul className="arrow-list two-col">
						<li>Responsive UI <a title="Web Components" href="https://www.webcomponents.org/">Web Components</a>,
							Angular, Vue &amp; React UI</li>
						<li>Works with <a href="https://www.htmlelements.com/docs/angular-cli/">any framework</a>
						</li>
						<li>Web standards compliant</li>
						<li>Native User Experience</li>
						<li>Accessibility features built according to W3C Web Content Accessibility
							Guidelines and Section 508</li>
						<li>Zero Dependencies. Works with any framework</li>
						<li>Modern Web and Mobile apps, made easy</li>
						<li>Easy to Learn and Use</li>
						<li>UI Components with proven reliability</li>
						<li>Deliver more than expected</li>
						<li>Tech assistance by Experts</li>
						<li>Royalty Free Distribution</li>
						<li>Reduces design risk with over 90% test automation coverage</li>
						<li>Helps you to create custom reusable HTML elements like Lit Element and
							Stencil</li>
					</ul>
				</div>
				<div className="col-2">
					<div>
						<h4>Technical Support</h4>
						<ul className="arrow-list">
							<li><strong>Premium Support</strong> – valid for 1 year and up to 40 support
								tickets. You will receive professional response within 24 hours, Mon-Fri.</li>
							<li><strong>Platinum Support</strong> – valid for 1 year and up to 120 support
								tickets. You will receive professional response within 24 hours, Mon-Fri.</li>
						</ul>
					</div>
					<div>
						<h4>Professional Services</h4>
						<p>HTML Element Customization – We know our products and we can assist with
							their customization and development of custom features and themes. We will
							do our best to provide you the features you need to make your project successful.</p>
						<p>Custom Development – Our experts are ready to design, build and deliver
							custom UI components that fit your application needs. Impress your customers
							with unique look and feel, cross browser and cross device compatible user
							interface.</p>
						<p>To help you deliver the best possible applications to your customers,
							please send a brief description of your needs to <a href="mailto:sales@htmlelements.com">sales@htmlelements.com</a>.</p>
					</div>
				</div>
				<div>
					<div className="copyright">
						<img alt="HTML Elements" src="https://avatars.githubusercontent.com/u/36157565?s=200&v=4" />
						<img alt="Professional UI Tools" src="https://www.htmlelements.com/wp-content/design/assets/images/ico-dl-01.png" />
						<p><a style={{ color: 'inherit' }} href="https://www.htmlelements.com/">Smart HTML Elements by
							jQWidgets</a>
							© 2018-2021. All Rights Reserved.</p>
					</div>
				</div>
			</Editor>
			<div className="options">
				<div className="description">
					<h3>Smart Editor supports the following keyboard shortcuts: </h3>
					<ul>
						<li>Insert link - <b>Control + K</b>
						</li>
						<li>Insert image - <b>Control + Shift + I</b>
						</li>
						<li>Insert table - <b>Control + Shift + E</b>
						</li>
						<li>Undo - <b>Control + Z</b>
						</li>
						<li>Redo - <b>Control + Y</b>
						</li>
						<li>Copy - <b>Control + C</b>
						</li>
						<li>Cut - <b>Control + X</b>
						</li>
						<li>Paste - <b>Control + V</b>
						</li>
						<li>Bold - <b>Control + B</b>
						</li>
						<li>Italic - <b>Control + I</b>
						</li>
						<li>Underline - <b>Control + U</b>
						</li>
						<li>Strikethrough - <b>Control + Shift + S</b>
						</li>
						<li>Uppercase - <b>Control + Shift + U</b>
						</li>
						<li>Lowercase - <b>Control + Shift + L</b>
						</li>
						<li>Superscript - <b>Control + Shift + =</b>
						</li>
						<li>Subscript - <b>Control + =</b>
						</li>
						<li>Indent - <b>Control + ]</b>
						</li>
						<li>Outdent - <b>Control + [</b>
						</li>
						<li>Source Code Mode / Preview Mode - <b>Control + Shift + H</b>
						</li>
						<li>Full Scree Mode - <b>Control + Shift + F</b>
						</li>
						<li>Justify Center - <b>Control + E</b>
						</li>
						<li>Justify Full - <b>Control + J</b>
						</li>
						<li>Justify Left - <b>Control + L</b>
						</li>
						<li>Justify Right - <b>Control + R</b>
						</li>
						<li>Clear Format - <b>Control + Shift + R</b>
						</li>
						<li>Ordered List - <b>Control + Shift + O</b>
						</li>
						<li>Unordered List - <b>Control + Alt + O</b>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
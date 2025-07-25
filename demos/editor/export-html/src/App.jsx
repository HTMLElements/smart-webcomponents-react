import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();

	const toolbarItems = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
		'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
		'LowerCase', 'UpperCase', '|',
		'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
		'Outdent', 'Indent', '|',
		'hyperlink', 'Image', '|', 'ClearFormat', 'Print',
		'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', 'subscript', 'superscript'
	];

	function handleExport(type) {
		editor.current.exportData(type);
	}

	function handlePrint() {
		editor.current.print();
	}

	return (
		<div>
			<Editor ref={editor} id="editor" toolbarItems={toolbarItems}>
				<div>
					<h2>What is Lorem Ipsum?</h2>
					<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type and scrambled
						it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages, and more recently with desktop publishing software
						like Aldus PageMaker including versions of Lorem Ipsum. <a href="www.htmlelements.com"
							title="Smart Elements">Smart Elements</a>
					</p>
					<table className="wd-Table">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Jane</td>
								<td>Doe</td>
								<td>sample@example.org</td>
								<td><a href="#">View</a> - <a href="#">Edit</a> - <a href="#">Delete</a>
								</td>
							</tr>
							<tr>
								<td>Jane</td>
								<td>Doe</td>
								<td>sample@example.org</td>
								<td><a href="#">View</a> - <a href="#">Edit</a> - <a href="#">Delete</a>
								</td>
							</tr>
							<tr>
								<td>Jane</td>
								<td>Doe</td>
								<td>sample@example.org</td>
								<td><a href="#">View</a> - <a href="#">Edit</a> - <a href="#">Delete</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<h2>Why do we use it?</h2>
					<p>It is a long established fact that a reader will be distracted by the
						readable content of a page when looking at its layout. The point of using
						Lorem Ipsum is that it has a more-or-less normal distribution of letters,
						as opposed to using 'Content here, content here', making it look like readable
						English. Many desktop publishing packages and web page editors now use
						Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
						will uncover many web sites still in their infancy. Various versions have
						evolved over the years, sometimes by accident, sometimes on purpose (injected
						humour and the like).
						<img
							src="./../../../src/images/Album.png"
							width="100px"
							height="100px"
						/>
					</p>
				</div>
				<br />
				<div>
					<h2>Where does it come from?</h2>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
						has roots in a piece of classical Latin literature from 45 BC, making it
						over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
						College in Virginia, looked up one of the more obscure Latin words, consectetur,
						from a Lorem Ipsum passage, and going through the cites of the word in
						classical literature, discovered the undoubtable source. Lorem Ipsum comes
						from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
						Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
						treatise on the theory of ethics, very popular during the Renaissance.
						The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
						a line in section 1.10.32.
					</p>
					<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
						for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
						et Malorum" by Cicero are also reproduced in their exact original form,
						accompanied by English versions from the 1914 translation by H. Rackham.
					</p>
				</div>
				<div>
					<h2>Where can I get some?</h2>
					<p>There are many variations of passages of Lorem Ipsum available, but the
						majority have suffered alteration in some form, by injected humour, or
						randomised words which don't look even slightly believable. If you are
						going to use a passage of Lorem Ipsum, you need to be sure there isn't
						anything embarrassing hidden in the middle of text. All the Lorem Ipsum
						generators on the Internet tend to repeat predefined chunks as necessary,
						making this the first true generator on the Internet. It uses a dictionary
						of over 200 Latin words, combined with a handful of model sentence structures,
						to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
						is therefore always free from repetition, injected humour, or non-characteristic
						words etc.
					</p>
				</div>
			</Editor>
			<div className="options">
				<div className="demo-description">Editor's content can be Printed or exported to HTML file via the <b>exportData</b> method
					by clicking on the corresponding button.</div>
				<div className="option">
					<Button id="exportToPDF" onClick={handleExport.bind(this, 'pdf')}>Export to PDF</Button>
				</div>
				<div className="option">
					<Button id="exportToHTML" onClick={handleExport.bind(this, 'html')}>Export to HTML</Button>
				</div>
				<div className="option">
					<Button id="print" onClick={handlePrint}>Print</Button>
				</div>
			</div>
		</div>
	)
}
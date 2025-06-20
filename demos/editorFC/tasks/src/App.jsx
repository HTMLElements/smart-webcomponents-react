import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const users = [
	{
		id: "101",
		name: "Anna Petrov",
		image: "https://randomuser.me/api/portraits/women/65.jpg",
		color: "#6E27DE"
	},
	{
		id: "102",
		name: "Liam Thompson",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		color: "#63D970"
	},
	{
		id: "103",
		name: "Elena Ivanova",
		image: "https://randomuser.me/api/portraits/women/12.jpg",
		color: "#F39C12"
	},
	{
		id: "104",
		name: "James Carter",
		image: "https://randomuser.me/api/portraits/men/74.jpg",
		color: "#3498DB"
	},
	{
		id: "105",
		name: "Natalie Georgieva",
		image: "https://randomuser.me/api/portraits/women/43.jpg",
		color: "#E91E63"
	}
	];
	
	return (
		<div>
			<Editor
				ref={editor}
				users={users}
				id="editor"
				editMode="blockHtml"
			>
			 Press '@' to insert an user.<br />

			<p><strong>Meeting Notes - April 25</strong></p>

			<p>We discussed the design timeline for the new dashboard feature.</p>

			<p><span data-task data-due-date="2025-04-28" data-user="Anna Petrov" data-status="To Do">
					Finish wireframes by <strong>Friday</strong> and assign to <strong>Lucas</strong>.
				</span></p>

			<p><span data-task data-due-date="2025-04-30" data-user="James Carter" data-status="In Progress">
					Review wireframes with product team by <strong>next Tuesday</strong> (Maria).
				</span></p>

			<p><em>Other notes:</em> The mobile version needs a redesign. Add accessibility improvements in the next sprint.
			</p>
			</Editor>
		</div>
	)
}

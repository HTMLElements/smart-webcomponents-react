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
	
	const pages = [
        {
            label: 'Page 1',
            innerHTML: '<h1>Page 1</h1><p>This is the content of page 1.</p>'
        },
        {
            label: 'Page 2',
            innerHTML: '<h1>Page 2</h1><p>This is the content of page 2.</p>'
        },
        {
            label: 'Page 3',
            innerHTML: '<h1>Page 3</h1><p>This is the content of page 3.</p>'
        }
    ];
	
	return (
		<div>
			<Editor
				ref={editor}
				users={users}
				enablePages={true}
				pages={pages}
				id="editor"

			>
			 
			</Editor>
		</div>
	)
}

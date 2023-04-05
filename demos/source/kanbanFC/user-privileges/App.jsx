import { useEffect, useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';
import { Window } from 'smart-webcomponents-react/window';
import { GetKanbanData } from './common/data';

export default function App() {

	const kanban = useRef();
	const input = useRef();
	const passwordtextbox = useRef();
	const window = useRef();
	const loginInfo = useRef();
	const pic = useRef();

	useEffect(() => {

		if (!window.current) { return }

		const footerTemplate = document.createElement('template');

		footerTemplate.id = 'footerTemplate';
		footerTemplate.innerHTML = 'You can log in as two different users - Anne (with full privileges) and Robert (with only privilege for adding and dragging tasks). The password for both users is 123.';

		document.body.appendChild(footerTemplate);
		window.current.footerTemplate = footerTemplate;

	}, [])

	const handleConfirmClick = () => {
		const userName = input.current;
		const password = passwordtextbox.current;
		const prompt = window.current;

		if (userName.value === 'Anne' && password.value === '123') {
			kanban.current.currentUser = 1;
			prompt.close();
			loginInfo.current.innerHTML = 'Logged in as Anne';
			pic.current.style.backgroundImage = 'url("https://www.htmlelements.com/demos/images/people/anne.png")';
		}
		else if (userName.value === 'Robert' && password.value === '123') {
			kanban.current.currentUser = 5;
			prompt.close();
			loginInfo.current.innerHTML = 'Logged in as Robert';
			pic.current.style.backgroundImage = 'url("https://www.htmlelements.com/demos/images/people/robert.png")';
		}
		else {
			const promptFooter = prompt.nativeElement.querySelector('.smart-footer');

			userName.value = '';
			password.value = '';
			promptFooter.classList.add('blink');
			setTimeout(() => promptFooter.classList.remove('blink'), 2000);
		}
	}

	const handleLoginAgainClick = () => {
		window.current.open();
		input.current.value = '';
		passwordtextbox.current.value = '';
	}

	const dataSource = GetKanbanData();

	const users = [
		{
			id: 0,
			name: 'Andrew',
			image: 'https://www.htmlelements.com/demos/images/people/andrew.png'
		},
		{
			id: 1,
			name: 'Anne',
			image: 'https://www.htmlelements.com/demos/images/people/anne.png',
			allowAdd: true,
			allowComment: true,
			allowDrag: true,
			allowEdit: true,
			allowRemove: true
		},
		{
			id: 2,
			name: 'Janet',
			image: 'https://www.htmlelements.com/demos/images/people/janet.png'
		},
		{
			id: 3,
			name: 'John',
			image: 'https://www.htmlelements.com/demos/images/people/john.png'
		},
		{
			id: 4,
			name: 'Laura',
			image: 'https://www.htmlelements.com/demos/images/people/laura.png'
		},
		{
			id: 5,
			name: 'Robert',
			image: 'https://www.htmlelements.com/demos/images/people/robert.png',
			allowAdd: true,
			allowComment: false,
			allowDrag: true,
			allowEdit: false,
			allowRemove: false
		},
		{
			id: 6,
			name: 'Guest',
			allowAdd: false,
			allowComment: false,
			allowDrag: false,
			allowEdit: false,
			allowRemove: false
		}
	];

	const columns = [
		{
			label: 'To do',
			dataField: 'toDo'
		},
		{
			label: 'In progress',
			dataField: 'inProgress'
		},
		{
			label: 'Testing',
			dataField: 'testing'
		},
		{
			label: 'Done',
			dataField: 'done'
		}
	];

	return (
		<div>
			<div id="header">
				<div ref={loginInfo} id="loginInfo">Logged in as Guest</div>
				<div id="loginAgain" onClick={handleLoginAgainClick}>Log in as another user</div>
				<div ref={pic} id="pic"></div>
			</div>
			<Kanban
				ref={kanban}
				id="kanban"
				addNewButton
				collapsible
				currentUser={6}
				dataSource={dataSource}
				editable
				taskActions
				taskComments
				userList
				users={users}
				columns={columns}
			></Kanban>
			<Window
				ref={window}
				id="prompt"
				modal
				opened
				label="Log in"
			>
				<form>
					<div>User name</div>
					<Input ref={input} id="userName"></Input>
					<br />
					<br />
					<div>Password</div>
					<PasswordTextBox ref={passwordtextbox} id="password"></PasswordTextBox>
					<br />
					<Button id="confirm" className="primary" onClick={handleConfirmClick}>Log in</Button>
				</form>
			</Window>
		</div>
	)
}
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { ListMenu } from 'smart-webcomponents-react/listmenu';

function App() {
    const listmenu = useRef();

    useEffect(() => {
        // Helper function to append info templates to the body
        function createInfoTemplate(id, innerHTML) {
            const template = document.createElement('template');
            template.id = id;
            template.innerHTML = innerHTML;
            document.body.appendChild(template);
        }

        createInfoTemplate('andrewInfo', `<table>
...
       
... 
        `);

        createInfoTemplate('anneInfo', `<table>
...
        `);

        createInfoTemplate('janetInfo', `<table>
...
        `);

        createInfoTemplate('lauraInfo', `<table>
...
        `);

        createInfoTemplate('margaretInfo', `<table>
...
        `);

        createInfoTemplate('michaelInfo', `<table>
...
        `);

        createInfoTemplate('nancyInfo', `<table>
...
        `);

        createInfoTemplate('robertInfo', `<table>
...
        `);

        createInfoTemplate('stevenInfo', `<table>
...
        `);

        // Assign dataSource
        if (listmenu.current) {
            listmenu.current.dataSource = [
                {
                    label: 'Janet Leverling',
                    items: [{ label: 'janetInfo' }]
                },
                {
                    label: 'Andrew Fuller',
                    items: [{ label: 'andrewInfo' }]
                },
                {
                    label: 'Robert King',
                    items: [{ label: 'robertInfo' }]
                },
                {
                    label: 'Anne Dodsworth',
                    items: [{ label: 'anneInfo' }]
                },
                {
                    label: 'Margaret Peacock',
                    items: [{ label: 'margaretInfo' }]
                },
                {
                    label: 'Michael Suyama',
                    items: [{ label: 'michaelInfo' }]
                },
                {
                    label: 'Nancy Davolio',
                    items: [{ label: 'nancyInfo' }]
                },
                {
                    label: 'Steven Buchanan',
                    items: [{ label: 'stevenInfo' }]
                },
                {
                    label: 'Laura Callahan',
                    items: [{ label: 'lauraInfo' }]
                }
            ];
        }

    }, []);

    return (
        <div>
            <ListMenu ref={listmenu} id="listMenu" filterable grouped />
        </div>
    );
}

export default App;

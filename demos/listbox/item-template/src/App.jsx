import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

function App() {
    const listbox = useRef();

    useEffect(() => {
        const template = document.createElement('template');
        template.id = 'itemTemplate';
        template.innerHTML = '<span className="glyphicon glyphicon-ok"></span><span style="margin-left:5px;">{{label}}</span>';

        document.body.appendChild(template);

        if(listbox.current) {
            listbox.current.itemTemplate = template.id;
        }

        // Optional: clean up the template if the component unmounts
        return () => {
            if(template.parentNode) {
                template.parentNode.removeChild(template);
            }
        };
    }, []);

    return (
        <div>
            <ListBox ref={listbox}>
                <ListItemsGroup label="Swedish Cars">
                    <ListItem selected value="volvo">Volvo</ListItem>
                    <ListItem value="saab">Saab</ListItem>
                    <ListItem value="saab">Scania</ListItem>
                </ListItemsGroup>
                <ListItemsGroup label="German Cars">
                    <ListItem value="mercedes">Mercedes</ListItem>
                    <ListItem value="vw">VW</ListItem>
                    <ListItem value="audi">Audi</ListItem>
                    <ListItem value="porsche">Porsche</ListItem>
                </ListItemsGroup>
                <ListItemsGroup label="Japanese Cars">
                    <ListItem value="mazda">Mazda</ListItem>
                    <ListItem value="honda">Honda</ListItem>
                    <ListItem value="infinity">Infinity</ListItem>
                    <ListItem value="mitsubishi">Mitsubishi</ListItem>
                    <ListItem value="toyota">Toyota</ListItem>
                </ListItemsGroup>
            </ListBox>
        </div>
    );
}

export default App;
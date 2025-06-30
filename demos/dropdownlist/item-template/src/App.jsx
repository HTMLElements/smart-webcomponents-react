import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

function App() {
    const dropdownlist = useRef();

    useEffect(() => {
        const template = document.createElement('template');
        template.id = 'template';
        template.innerHTML = '<span className="glyphicon glyphicon-ok"></span><span style="margin-left:5px;">{{label}}</span>';

        document.body.appendChild(template);

        if (dropdownlist.current) {
            dropdownlist.current.itemTemplate = template.id;
        }
        
        // Optional: Cleanup the template on component unmount
        return () => {
            if (template.parentNode) {
                template.parentNode.removeChild(template);
            }
        };
    }, []);

    return (
        <div>
            <DropDownList ref={dropdownlist}>
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
            </DropDownList>
        </div>
    );
}

export default App;
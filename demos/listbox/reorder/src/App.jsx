import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ListBox, ListItem } from 'smart-webcomponents-react/listbox';

function App() {
    // componentDidMount equivalent (useEffect) if needed:
    // React.useEffect(() => {
    //     // Your code here
    // }, []);

    return (
        <div>
            <ListBox allowDrag allowDrop>
                <ListItem selected value="volvo">Volvo</ListItem>
                <ListItem value="saab">Saab</ListItem>
                <ListItem value="saab">Scania</ListItem>
                <ListItem value="mercedes">Mercedes</ListItem>
                <ListItem value="vw">VW</ListItem>
                <ListItem value="audi">Audi</ListItem>
                <ListItem value="porsche">Porsche</ListItem>
                <ListItem value="mazda">Mazda</ListItem>
                <ListItem value="honda">Honda</ListItem>
                <ListItem value="infinity">Infinity</ListItem>
                <ListItem value="mitsubishi">Mitsubishi</ListItem>
                <ListItem value="toyota">Toyota</ListItem>
            </ListBox>
        </div>
    );
}

export default App;

This functional component version behaves identically to your original class component. If you want to add logic that would normally go in componentDidMount, you can use the useEffect Hook as shown in the comment.
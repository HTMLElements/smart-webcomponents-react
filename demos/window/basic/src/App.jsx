import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React,  { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Window } from 'smart-webcomponents-react/window';
import { Button } from 'smart-webcomponents-react/button';
export default function App() {
    const testalert = () => {
        alert("Hello");
    }
	
	  const buttonInput = useRef(null);
	  useEffect(() => {
    // Update the document title using the browser API
		buttonInput.current.onclick = testalert;
  });

return (
                <Window windowParent='body' opened label="Window 1">
                    <Button onClick={testalert}>jQWidgets button</Button>
                    <button ref={buttonInput}
                        type="button"
                        onClick={

                            testalert

                        }
                    >
                        <span>Html Button</span>
                    </button>
                </Window>
  )
};

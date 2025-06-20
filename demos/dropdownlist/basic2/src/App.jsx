import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import {createRef, useEffect} from 'react'
import {DropDownList, ListItem, ListItemsGroup} from 'smart-webcomponents-react/dropdownlist'

const Dropdowns = () => {
  const dropdownlist = createRef();

  useEffect(() => {}, [dropdownlist])

  return (
    <div>
      <DropDownList ref={dropdownlist} selectedIndexes={[0]}>
        <ListItem value='1'>Affogato</ListItem>
      </DropDownList>
    </div>
  )
}
export default Dropdowns
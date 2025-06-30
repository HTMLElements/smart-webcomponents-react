import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const Dropdowns = () => {
  const dropdownlist = useRef(null);

  // useEffect can be omitted unless you need its logic

  return (
    <div>
      <DropDownList ref={dropdownlist} selectedIndexes={[0]}>
        <ListItem value='1'>Affogato</ListItem>
      </DropDownList>
    </div>
  );
}

export default Dropdowns;
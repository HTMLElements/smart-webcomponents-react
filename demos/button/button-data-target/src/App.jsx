import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Toast } from 'smart-webcomponents-react/toast';
import { Window } from 'smart-webcomponents-react/window';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  return (
    <div>
      <h3>Collapse</h3>
      <Button data-toggle="collapse" data-target="#collapseExample"
        aria-expanded="false" aria-controls="collapseExample">Button with data-target</Button>
      <br />
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>

      <h3>Dropdown</h3>
      <Button id="dropdownMenuButton" data-target=".dropdown-menu"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</Button>
      <br />
      <br />
      <DropDownList selected-indexes="[0]" className="dropdown-menu">
        <ListItem>Action</ListItem>
        <ListItem>Another action</ListItem>
        <ListItem>Something else</ListItem>
      </DropDownList>

      <h3>Modal</h3>
      <Button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</Button>
      <Window header="Title" id="exampleModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div>
          <div id="article">
            <section>
              <h3>What is Lorem Ipsum?</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </section>
            <section>
              <h3>Where does it come from?</h3>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...</p>
            </section>
          </div>
          <div className="modal-footer">
            <Button type="button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
          </div>
        </div>
      </Window>

      <h3>Tooltip</h3>
      <Button type="button" className="btn btn-secondary" data-toggle="tooltip"
        data-placement="top" data-title="Tooltip on top">Tooltip on top</Button>
      <Button type="button" className="btn btn-secondary"
        data-toggle="tooltip" data-placement="bottom" data-title="Tooltip on bottom">Tooltip on bottom</Button>

      <h3>Toast</h3>
      <Button type="button" data-target="#toast" data-toggle="toggle">Toggle Toast</Button>
      <Toast id="toast" position="top-left"
        show-close-button type="mail" className="blink">You have 2 new messages.
        <button data-dismiss="toast">Close</button>
      </Toast>

      <h3>List</h3>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <Button className="nav-link active" id="home-tab" data-toggle="tab"
            data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</Button>
        </li>
        <li className="nav-item" role="presentation">
          <Button className="nav-link" id="profile-tab" data-toggle="tab"
            data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</Button>
        </li>
        <li className="nav-item" role="presentation">
          <Button className="nav-link" id="contact-tab" data-toggle="tab"
            data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</Button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Content 1</div>
        <div className="tab-pane fade smart-hidden" id="profile" role="tabpanel"
          aria-labelledby="profile-tab">Content 2</div>
        <div className="tab-pane fade smart-hidden" id="contact" role="tabpanel"
          aria-labelledby="contact-tab">Content 3</div>
      </div>

      <h3>Radio Button Group</h3>
      <div>
        Value is stored in a hidden field below the radio buttons.<br />
        <RadioButton checked name="Cappucino" data-target="#radioGroup">Cappucino</RadioButton>
        <RadioButton name="Espresso" data-target="#radioGroup">Espresso</RadioButton>
        <RadioButton name="Americano" data-target="#radioGroup">Americano</RadioButton>
        <input id="radioGroup" type="hidden" />
        <div id="log"></div>
      </div>

      <h3>Radio Button Group 2</h3>
      <div>
        Value is stored in a visible input field below the radio buttons.
        <br />
        <RadioButton checked name="Volvo" data-target="#radioGroup2">Volvo</RadioButton><br />
        <RadioButton name="Mercedes" data-target="#radioGroup2">Mercedes</RadioButton><br />
        <RadioButton name="Renault" data-target="#radioGroup2">Renault</RadioButton><br />
        <input id="radioGroup2" readOnly />
      </div>

      <h3>Checkboxes Group</h3>
      <div>
        Value is stored in a visible input field below the radio buttons.
        <br />
        <CheckBox checked name="Volvo" data-target="#checkGroup">Volvo</CheckBox><br />
        <CheckBox name="Mercedes" data-target="#checkGroup">Mercedes</CheckBox><br />
        <CheckBox name="Renault" data-target="#checkGroup">Renault</CheckBox><br />
        <input id="checkGroup" readOnly />
      </div>
    </div>
  );
};

export default App;

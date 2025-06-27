import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useRef } from "react";
import ReactDOM from 'react-dom/client';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox, ListItem } from 'smart-webcomponents-react/textbox';

function App() {
  const textboxRef = useRef(null);
  const radioManualRef = useRef(null);
  const radioInlineRef = useRef(null);
  const radioListRef = useRef(null);
  const radioBothRef = useRef(null);

  const handleRadioButtonChange = () => {
    const radios = [
      { ref: radioManualRef, mode: 'manual' },
      { ref: radioInlineRef, mode: 'inline' },
      { ref: radioListRef, mode: 'list' },
      { ref: radioBothRef, mode: 'both' },
    ];

    const selected = radios.find(r => r.ref.current && r.ref.current.checked);

    if (selected && textboxRef.current) {
      textboxRef.current.autoComplete = selected.mode;
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h3>AutoComplete Modes</h3>

      <div>
        <RadioButton ref={radioManualRef} onChange={handleRadioButtonChange} checked>
          manual
        </RadioButton>
        <RadioButton ref={radioInlineRef} onChange={handleRadioButtonChange}>
          inline
        </RadioButton>
        <RadioButton ref={radioListRef} onChange={handleRadioButtonChange}>
          list
        </RadioButton>
        <RadioButton ref={radioBothRef} onChange={handleRadioButtonChange}>
          both
        </RadioButton>
      </div>

      <br />

      <TextBox
        ref={textboxRef}
        id="textBox"
        autoComplete="manual"
        minLength={1}
        dropDownAppendTo="body"
        placeholder="Type a country"
        style={{ width: '100%' }}
      >
        <ListItem value="Afghanistan">Afghanistan</ListItem>
        <ListItem value="Albania">Albania</ListItem>
        <ListItem value="Algeria">Algeria</ListItem>
        <ListItem value="Andorra">Andorra</ListItem>
        <ListItem value="Angola">Angola</ListItem>
        <ListItem value="Argentina">Argentina</ListItem>
        <ListItem value="Armenia">Armenia</ListItem>
        <ListItem value="Australia">Australia</ListItem>
        <ListItem value="Austria">Austria</ListItem>
        <ListItem value="Azerbaijan">Azerbaijan</ListItem>
        <ListItem value="Bahamas">Bahamas</ListItem>
        <ListItem value="Bahrain">Bahrain</ListItem>
        <ListItem value="Bangladesh">Bangladesh</ListItem>
        <ListItem value="Barbados">Barbados</ListItem>
        <ListItem value="Belarus">Belarus</ListItem>
        <ListItem value="Belgium">Belgium</ListItem>
        <ListItem value="Belize">Belize</ListItem>
        <ListItem value="Benin">Benin</ListItem>
        <ListItem value="Bhutan">Bhutan</ListItem>
        <ListItem value="Bolivia">Bolivia</ListItem>
        <ListItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</ListItem>
        <ListItem value="Botswana">Botswana</ListItem>
        <ListItem value="Brazil">Brazil</ListItem>
        <ListItem value="Bulgaria">Bulgaria</ListItem>
        <ListItem value="Burkina Faso">Burkina Faso</ListItem>
        <ListItem value="Burundi">Burundi</ListItem>
        <ListItem value="Cambodia">Cambodia</ListItem>
        <ListItem value="Cameroon">Cameroon</ListItem>
        <ListItem value="Canada">Canada</ListItem>
        <ListItem value="Chad">Chad</ListItem>
        <ListItem value="Chile">Chile</ListItem>
        <ListItem value="China">China</ListItem>
        <ListItem value="Colombia">Colombia</ListItem>
        <ListItem value="Congo">Congo</ListItem>
        <ListItem value="Costa Rica">Costa Rica</ListItem>
        <ListItem value="Croatia">Croatia</ListItem>
        <ListItem value="Cuba">Cuba</ListItem>
        <ListItem value="Cyprus">Cyprus</ListItem>
        <ListItem value="Czech Republic">Czech Republic</ListItem>
        <ListItem value="Denmark">Denmark</ListItem>
        <ListItem value="Dominican Republic">Dominican Republic</ListItem>
        <ListItem value="Ecuador">Ecuador</ListItem>
        <ListItem value="Egypt">Egypt</ListItem>
        <ListItem value="Estonia">Estonia</ListItem>
        <ListItem value="Ethiopia">Ethiopia</ListItem>
        <ListItem value="Fiji">Fiji</ListItem>
        <ListItem value="Finland">Finland</ListItem>
        <ListItem value="France">France</ListItem>
        <ListItem value="Germany">Germany</ListItem>
        <ListItem value="Greece">Greece</ListItem>
        <ListItem value="Guatemala">Guatemala</ListItem>
        <ListItem value="Honduras">Honduras</ListItem>
        <ListItem value="Hungary">Hungary</ListItem>
        <ListItem value="Iceland">Iceland</ListItem>
        <ListItem value="India">India</ListItem>
        <ListItem value="Indonesia">Indonesia</ListItem>
        <ListItem value="Iran">Iran</ListItem>
        <ListItem value="Iraq">Iraq</ListItem>
        <ListItem value="Ireland">Ireland</ListItem>
        <ListItem value="Israel">Israel</ListItem>
        <ListItem value="Italy">Italy</ListItem>
        <ListItem value="Jamaica">Jamaica</ListItem>
        <ListItem value="Japan">Japan</ListItem>
        <ListItem value="Jordan">Jordan</ListItem>
        <ListItem value="Kazakhstan">Kazakhstan</ListItem>
        <ListItem value="Kenya">Kenya</ListItem>
        <ListItem value="Kuwait">Kuwait</ListItem>
        <ListItem value="Latvia">Latvia</ListItem>
        <ListItem value="Lebanon">Lebanon</ListItem>
        <ListItem value="Liberia">Liberia</ListItem>
        <ListItem value="Lithuania">Lithuania</ListItem>
        <ListItem value="Luxembourg">Luxembourg</ListItem>
        <ListItem value="Madagascar">Madagascar</ListItem>
        <ListItem value="Malawi">Malawi</ListItem>
        <ListItem value="Malaysia">Malaysia</ListItem>
        <ListItem value="Malta">Malta</ListItem>
        <ListItem value="Mexico">Mexico</ListItem>
        <ListItem value="Monaco">Monaco</ListItem>
        <ListItem value="Mongolia">Mongolia</ListItem>
        <ListItem value="Morocco">Morocco</ListItem>
        <ListItem value="Mozambique">Mozambique</ListItem>
        <ListItem value="Myanmar">Myanmar</ListItem>
        <ListItem value="Namibia">Namibia</ListItem>
        <ListItem value="Nepal">Nepal</ListItem>
        <ListItem value="Netherlands">Netherlands</ListItem>
        <ListItem value="New Zealand">New Zealand</ListItem>
        <ListItem value="Nicaragua">Nicaragua</ListItem>
        <ListItem value="Niger">Niger</ListItem>
        <ListItem value="Nigeria">Nigeria</ListItem>
        <ListItem value="Norway">Norway</ListItem>
        <ListItem value="Oman">Oman</ListItem>
        <ListItem value="Pakistan">Pakistan</ListItem>
        <ListItem value="Panama">Panama</ListItem>
        <ListItem value="Paraguay">Paraguay</ListItem>
        <ListItem value="Peru">Peru</ListItem>
        <ListItem value="Philippines">Philippines</ListItem>
        <ListItem value="Poland">Poland</ListItem>
        <ListItem value="Portugal">Portugal</ListItem>
        <ListItem value="Qatar">Qatar</ListItem>
        <ListItem value="Romania">Romania</ListItem>
        <ListItem value="Russia">Russia</ListItem>
        <ListItem value="Rwanda">Rwanda</ListItem>
        <ListItem value="Saudi Arabia">Saudi Arabia</ListItem>
        <ListItem value="Senegal">Senegal</ListItem>
        <ListItem value="Serbia">Serbia</ListItem>
        <ListItem value="Singapore">Singapore</ListItem>
        <ListItem value="Slovakia">Slovakia</ListItem>
        <ListItem value="Slovenia">Slovenia</ListItem>
        <ListItem value="Somalia">Somalia</ListItem>
        <ListItem value="South Africa">South Africa</ListItem>
        <ListItem value="Spain">Spain</ListItem>
        <ListItem value="Sri Lanka">Sri Lanka</ListItem>
        <ListItem value="Sudan">Sudan</ListItem>
        <ListItem value="Sweden">Sweden</ListItem>
        <ListItem value="Switzerland">Switzerland</ListItem>
        <ListItem value="Syria">Syria</ListItem>
        <ListItem value="Taiwan">Taiwan</ListItem>
        <ListItem value="Tanzania">Tanzania</ListItem>
        <ListItem value="Thailand">Thailand</ListItem>
        <ListItem value="Togo">Togo</ListItem>
        <ListItem value="Tunisia">Tunisia</ListItem>
        <ListItem value="Turkey">Turkey</ListItem>
        <ListItem value="Uganda">Uganda</ListItem>
        <ListItem value="Ukraine">Ukraine</ListItem>
        <ListItem value="United Arab Emirates">United Arab Emirates</ListItem>
        <ListItem value="United Kingdom">United Kingdom</ListItem>
        <ListItem value="United States">United States</ListItem>
        <ListItem value="Uruguay">Uruguay</ListItem>
        <ListItem value="Uzbekistan">Uzbekistan</ListItem>
        <ListItem value="Venezuela">Venezuela</ListItem>
        <ListItem value="Vietnam">Vietnam</ListItem>
        <ListItem value="Yemen">Yemen</ListItem>
        <ListItem value="Zambia">Zambia</ListItem>
        <ListItem value="Zimbabwe">Zimbabwe</ListItem>
      </TextBox>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

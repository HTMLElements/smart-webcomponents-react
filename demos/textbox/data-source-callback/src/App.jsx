import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { TextBox, ListItem } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textbox = React.createRef();

    // Countries data - truncated here, use your full list
    this.countries = [
      { name: "Afghanistan", code: "AF" },
      { name: "Albania", code: "AL" },
      { name: "Algeria", code: "DZ" },
      { name: "American Samoa", code: "AS" },
      { name: "Andorra", code: "AD" },
      { name: "Angola", code: "AO" },
      // ... add full list here ...
    ];

    this.state = {
      filteredCountries: this.countries
    };
  }

  onInput = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const filtered = this.countries.filter(country =>
      country.name.toLowerCase().includes(inputValue)
    );

    this.setState({ filteredCountries: filtered });
  }

  onSelect = (event) => {
    // You can handle selected value here
    const selectedValue = event.detail.value;
    console.log("Selected country:", selectedValue);
  }

  render() {
    return (
      <div>
        <TextBox
          ref={this.textbox}
          dropDownButtonPosition="right"
          dataSource={this.state.filteredCountries.map(c => c.name)}
          placeholder="Select a country"
          filterable={true}
          onInput={this.onInput}
          onChange={this.onSelect}
          listDisplayMode="one"
        />
      </div>
    );
  }
}

export default App;

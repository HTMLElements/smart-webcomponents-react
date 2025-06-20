import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
	}

	handleResizeModeButtonClick(mode) {
		const dropDownList = this.dropdownlist.current;

		dropDownList.resizeMode = mode.toLowerCase();
	}

	handleDropDownPositionButtonClick(mode) {

		const dropDownList = this.dropdownlist.current;

		dropDownList.dropDownPosition = mode.toLowerCase();
	}

	componentDidMount() {

	}

	resizeModes = {
		none: 'None',
		horizontal: 'Horizontal',
		both: 'Both',
		vertical: 'Vertical'
	};

	dropDownPositions = {
		bottom: 'Bottom',
		top: 'Top'
	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="caption">Resize Mode</div>
					<div className="option">
						<RadioButton onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.none)}>
							{this.resizeModes.none}
						</RadioButton>
						<RadioButton onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.horizontal)}>
							{this.resizeModes.horizontal}
						</RadioButton>
						<RadioButton onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.both)}>
							{this.resizeModes.both}
						</RadioButton>
						<RadioButton checked onClick={this.handleResizeModeButtonClick.bind(this, this.resizeModes.vertical)}>
							{this.resizeModes.vertical}
						</RadioButton>
					</div>
					<div className="caption">DropDown position</div>
					<div className="option">
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.bottom)}>
							{this.dropDownPositions.bottom}
						</RadioButton>
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this, this.dropDownPositions.top)}>
							{this.dropDownPositions.top}
						</RadioButton>
					</div>
				</div>
				<DropDownList ref={this.dropdownlist} selectedIndexes={[0]} resizeMode="vertical">
					<ListItem value="Afghanistan">Afghanistan</ListItem>
					<ListItem selected value="Albania">Albania</ListItem>
					<ListItem value="Algeria">Algeria</ListItem>
					<ListItem value="American Samoa">American Samoa</ListItem>
					<ListItem value="Andorra">Andorra</ListItem>
					<ListItem value="Angola">Angola</ListItem>
					<ListItem value="Anguilla">Anguilla</ListItem>
					<ListItem value="Antarctica">Antarctica</ListItem>
					<ListItem value="Antigua and Barbuda">Antigua and Barbuda</ListItem>
					<ListItem value="Argentina">Argentina</ListItem>
					<ListItem value="Armenia">Armenia</ListItem>
					<ListItem value="Aruba">Aruba</ListItem>
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
					<ListItem value="Bermuda">Bermuda</ListItem>
					<ListItem value="Bhutan">Bhutan</ListItem>
				</DropDownList>
			</div>
		);
	}
}

export default App;
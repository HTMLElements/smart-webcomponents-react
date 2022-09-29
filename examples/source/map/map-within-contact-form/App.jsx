import React from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';
import { MultilineTextBox} from 'smart-webcomponents-react/multilinetextbox';
import { Map } from 'smart-webcomponents-react/map';

class App extends React.Component {
	apiKey = "";
	mapType = "roadmap";
	query = "la";


	componentDidMount() {
	
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        <h1>Map Within a Contact Form Demo</h1>
			        <div>In this demo, we show our "Map" component within a contact form. The following
			            example its built also with some of our other components such as :
			            <br />"Input", "Button", "TextBox".	
					</div>
			    </div>
			    <br />
			    <br />
			    <div className="container">
			        <div className="header">
			             <h2>Contact us</h2>
			            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas
			                facere suscipit consequatur voluptatibus quas ut deleniti ratione quam,
			                aliquam quis ex fugit dolorum voluptate molestiae! Molestiae, quisquam?
			                Pariatur, esse!</p>
			        </div>
			        <div className="map-within-form">
			            <div className="demo-contact-form">
			                <form action="" className="demo-form">
			                    <fieldset>
			                        <legend><i className="material-icons">mail</i>
			                            <h3> Write to us:</h3>
			                        </legend>
			                        <div className="row">
			                            <p>We will write rarely, but with only the best content.</p>
			                        </div>
			                        <br/>
			                        <div className="row">
			                            <label for="name"><i className="material-icons">person</i>
			                            </label>
			                            <Input placeholder="Your name" className="underlined"></Input>
			                        </div>
			                        <br/>
			                        <div className="row">
			                            <label for="email"><i className="material-icons">mail</i>
			                            </label>
			                            <Input placeholder="Your email" className="underlined"></Input>
			                        </div>
			                        <br/>
			                        <div className="row">
			                            <label for="subjext"><i className="material-icons">local_offer</i>
			                            </label>
			                            <Input placeholder="Subject" className="underlined"></Input>
			                        </div>
			                        <br/>
			                        <div className="row">
			                            <label for="text"> <i className="material-icons">create</i>
			                            </label>
			                            <MultilineTextBox className="underlined" placeholder="Text"
			                            auto-expand></MultilineTextBox>
			                        </div>
			                        <br/>
			                        <div className="row">
			                            <Button>Submit</Button>
			                        </div>
			                    </fieldset>
			                </form>
			            </div>
			            <div className="map-container">
			                <Map query={this.query} apiKey={this.apiKey} mapType={this.mapType}
			                map-type='roadmap'></Map>
			                <div className="buttons-with-icons">
			                    <div className="button-with-icons-text">
			                        <Button  className="floating primary"> <span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon">
			
			                        <i className="material-icons">location_on</i>
			
			                    </span>
			                        </Button>
			                        <p>San Francisco, CA 94126</p>
			                        <p>United States</p>
			                    </div>
			                    <div className="button-with-icons-text">
			                        <Button  className="floating primary"> <span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon">
			
			                        <i className="material-icons" id="phone-icon">phone_enabled</i>
			
			                    </span>
			                        </Button>
			                        <p>+ 01 234 567 89</p>
			                        <p>Mon - Fri, 8:00-22:00</p>
			                    </div>
			                    <div className="button-with-icons-text">
			                        <Button  className="floating primary"> <span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon">
			
			                        <i className="material-icons">mail</i>
			
			                    </span>
			                        </Button>
			                        <p>info@gmail.com</p>
			                        <p>sale@gmail.com</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;

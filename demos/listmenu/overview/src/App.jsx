import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListMenu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/listmenu';

const App = () => {
    useEffect(() => {
        // ----- Template HTML append (componentDidMount equivalent) -----
        const templateContainer = document.createElement('div');
        templateContainer.innerHTML = `
            <template id="andrewInfo"> ... </template>
            <template id="anneInfo"> ... </template>
            <template id="janetInfo"> ... </template>
            <template id="lauraInfo"> ... </template>
            <template id="margaretInfo"> ... </template>
            <template id="michaelInfo"> ... </template>
            <template id="nancyInfo"> ... </template>
            <template id="robertInfo"> ... </template>
            <template id="stevenInfo"> ... </template>
            <template id="mail1Preview"> ... </template>
            <template id="mail1"> ... </template>
            <template id="mail2Preview"> ... </template>
            <template id="mail2"> ... </template>
            <template id="mail3Preview"> ... </template>
            <template id="mail3"> ... </template>
            <template id="mail4Preview"> ... </template>
            <template id="mail4"> ... </template>
            <template id="mail5Preview"> ... </template>
            <template id="mail5"> ... </template>
            <template id="mail6Preview"> ... </template>
            <template id="mail6"> ... </template>
            <template id="mail7Preview"> ... </template>
            <template id="mail7"> ... </template>
        `;

        // Get all real templateHTML strings from your original code!
        // For brevity the content of these templates is replaced with "...".
        // Copy-paste the large template string you had in your componentDidMount.

        document.body.appendChild(templateContainer);

        // ----- "init" logic: Setup click handlers for stars on #listMenu4 -----
        let intervalId = setInterval(() => {
            let stars = document.querySelectorAll('#listMenu4 .material-icons');
            // Don't bind repeatedly if already bound
            if (stars && stars.length) {
                stars.forEach((star) => {
                    if (!star.__bound) {
                        star.addEventListener('click', function (event) {
                            event.stopPropagation();
                            if (this.classList.contains('empty')) {
                                this.innerHTML = '&#xE838;';
                                this.classList.remove('empty');
                            } else {
                                this.innerHTML = '&#xE83A;';
                                this.classList.add('empty');
                            }
                        });
                        star.__bound = true;
                    }
                });
                clearInterval(intervalId);
            }
        }, 200);
        // Clean up
        return () => {
            clearInterval(intervalId);
            document.body.removeChild(templateContainer);
        }
    }, []);

    return (
        <div className="smart-demo-container">
            <section id="list-menu">
                <h2>List menu</h2>
                <p>
                    A list menu represents an element which can be used to choose an option
                    from a nested list of items. Navigation through the nested list is done
                    in a single view.
                </p>
                <div className="module">
                    <div id="listMenu1Container">
                        <ListMenu id="listMenu1" filterable grouped overflow="hidden"
                            filterMode="contains" enableMouseWheelAction>
                            <MenuItemsGroup>Janet Leverling
                                <MenuItem label="janetInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Andrew Fuller
                                <MenuItem label="andrewInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Robert King
                                <MenuItem label="robertInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Anne Dodsworth
                                <MenuItem label="anneInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Margaret Peacock
                                <MenuItem label="margaretInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Michael Suyama
                                <MenuItem label="michaelInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Nancy Davolio
                                <MenuItem label="nancyInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Steven Buchanan
                                <MenuItem label="stevenInfo"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup>Laura Callahan
                                <MenuItem label="lauraInfo"></MenuItem>
                            </MenuItemsGroup>
                        </ListMenu>
                    </div>
                </div>
                <div className="module">
                    <div id="listMenu3Container">
                        <ListMenu id="listMenu3" overflow="hidden" enableMouseWheelAction>
                            <MenuItemsGroup> <i className="material-icons">&#xE53F;</i> Attractions
                                <MenuItem>Movies</MenuItem>
                                <MenuItem>Circus</MenuItem>
                                <MenuItem>Concerts</MenuItem>
                                <MenuItem>Monuments</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE56C;</i> Dining
                                <MenuItem>Restaurants</MenuItem>
                                <MenuItem>Cafés</MenuItem>
                                <MenuItem>Bars</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE80C;</i> Education
                                <MenuItem>Schools</MenuItem>
                                <MenuItem>Colleges</MenuItem>
                                <MenuItem>Universities</MenuItem>
                                <MenuItem>Educational courses</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xEB41;</i> Family
                                <MenuItem>Babysitting</MenuItem>
                                <MenuItem>Family trips</MenuItem>
                                <MenuItem>Theme parks</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE87D;</i> Health
                                <MenuItem>Hospitals</MenuItem>
                                <MenuItem>Family physicians</MenuItem>
                                <MenuItem>Optics</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE30A;</i> Office
                                <MenuItem>Offices for rent</MenuItem>
                                <MenuItem>Office equipment</MenuItem>
                                <MenuItem>Repair works</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE25C;</i> Promotions
                                <MenuItem>Sales</MenuItem>
                                <MenuItem>Malls</MenuItem>
                                <MenuItem>Collective buying</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE03E;</i> Radio
                                <MenuItem>Available stations</MenuItem>
                                <MenuItem>Search</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE7E9;</i> Recipes
                                <MenuItem>With meat</MenuItem>
                                <MenuItem>With fish</MenuItem>
                                <MenuItem>Vegetarian recipes</MenuItem>
                                <MenuItem>Vegan recipes</MenuItem>
                                <MenuItem>Desserts</MenuItem>
                                <MenuItem>Chef's recommendations</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE52F;</i> Sports
                                <MenuItem>Football</MenuItem>
                                <MenuItem>Basketball</MenuItem>
                                <MenuItem>Tennis</MenuItem>
                                <MenuItem>Baseball</MenuItem>
                                <MenuItem>Cycling</MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup> <i className="material-icons">&#xE53D;</i> Travel
                                <MenuItem>Local destinations</MenuItem>
                                <MenuItem>Book tickets</MenuItem>
                                <MenuItem>Organised travel</MenuItem>
                            </MenuItemsGroup>
                        </ListMenu>
                    </div>
                </div>
                <div className="module">
                    <div id="listMenu4Container">
                        <ListMenu id="listMenu4" overflow="hidden" enableMouseWheelAction>
                            <MenuItemsGroup label="mail1Preview" separator>
                                <MenuItem label="mail1"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup label="mail2Preview" separator>
                                <MenuItem label="mail2"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup label="mail3Preview" separator>
                                <MenuItem label="mail3"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup label="mail4Preview" separator>
                                <MenuItem label="mail4"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup label="mail5Preview" separator>
                                <MenuItem label="mail5"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup label="mail6Preview" separator>
                                <MenuItem label="mail6"></MenuItem>
                            </MenuItemsGroup>
                            <MenuItemsGroup label="mail7Preview" separator>
                                <MenuItem label="mail7"></MenuItem>
                            </MenuItemsGroup>
                        </ListMenu>
                        <Button id="plusButton" className="primary floating">+</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;

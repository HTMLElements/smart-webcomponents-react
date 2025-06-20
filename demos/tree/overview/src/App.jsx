import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

const App = () => {
	return (
		<div>
			<Tree id="tree">
				<TreeItemsGroup> <i className="material-icons">&#xE53F;</i> Attractions
					<TreeItem>Movies</TreeItem>
					<TreeItem>Circus</TreeItem>
					<TreeItem>Concerts</TreeItem>
					<TreeItem>Monuments</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE56C;</i> Dining
					<TreeItem>Restaurants</TreeItem>
					<TreeItem>Caf&eacute;s</TreeItem>
					<TreeItem>Bars</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE80C;</i> Education
					<TreeItem>Schools</TreeItem>
					<TreeItem>Colleges</TreeItem>
					<TreeItem>Universities</TreeItem>
					<TreeItem>Educational courses</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xEB41;</i> Family
					<TreeItem>Babysitting</TreeItem>
					<TreeItem>Family trips</TreeItem>
					<TreeItem>Theme parks</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE87D;</i> Health
					<TreeItem>Hospitals</TreeItem>
					<TreeItem>Family physicians</TreeItem>
					<TreeItem>Optics</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE30A;</i> Office
					<TreeItem>Offices for rent</TreeItem>
					<TreeItem>Office equipment</TreeItem>
					<TreeItem>Repair works</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE25C;</i> Promotions
					<TreeItem>Sales</TreeItem>
					<TreeItem>Malls</TreeItem>
					<TreeItem>Collective buying</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE03E;</i> Radio
					<TreeItem>Available stations</TreeItem>
					<TreeItem>Search</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE7E9;</i> Recipes
					<TreeItem>With meat</TreeItem>
					<TreeItem>With fish</TreeItem>
					<TreeItem>Vegetarian recipes</TreeItem>
					<TreeItem>Vegan recipes</TreeItem>
					<TreeItem>Desserts</TreeItem>
					<TreeItem>Chef's recommendations</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE52F;</i> Sports
					<TreeItem>Football</TreeItem>
					<TreeItem>Basketball</TreeItem>
					<TreeItem>Tennis</TreeItem>
					<TreeItem>Baseball</TreeItem>
					<TreeItem>Cycling</TreeItem>
				</TreeItemsGroup>
				<TreeItemsGroup> <i className="material-icons">&#xE53D;</i> Travel
					<TreeItem>Local destinations</TreeItem>
					<TreeItem>Book tickets</TreeItem>
					<TreeItem>Organised travel</TreeItem>
				</TreeItemsGroup>
			</Tree>
		</div>
	);
}



export default App;

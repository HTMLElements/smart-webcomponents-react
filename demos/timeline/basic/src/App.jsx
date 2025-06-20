import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Timeline } from 'smart-webcomponents-react/timeline';

export default function App() {
	const travelPlans = [
        { date: "May 15, 2024", description: "Flight: Reserving airline tickets", subtitle: "May 15, 2024", title: "Flight Reservation", icon: "material-icons flight", dotCSS: "" },
        { date: "June 22, 2024", description: "Hotel: Booking for the trip", subtitle: "June 22, 2024", title: "Booking", icon: "material-icons hotel", dotCSS: "" },
        { date: "July 12, 2024", description: "Flight: Take off", subtitle: "July 12, 2024", title: "Flight", icon: "material-icons flight-takeoff", dotCSS: "" },
        { date: "July 13, 2024", description: "Excursion Plans: Hiking", subtitle: "July 13, 2024", title: "Plans", icon: "material-icons hiking", dotCSS: "" },
        { date: "Aug 14, 2024", description: "Return Journey: Flight Confirmation", subtitle: "Aug 14, 2024", title: "Flight Confirmation", icon: "material-icons flight-land", dotCSS: "" }
    ];
	
	return (
		<div>
			<Timeline dataSource={travelPlans}/>
		</div >
	)
}
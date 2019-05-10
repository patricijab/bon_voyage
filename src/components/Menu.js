import React from "react"
import "./Menu.css"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import TicketOutline from "@kiwicom/orbit-components/lib/icons/TicketOutline"
import PassengerOutline from "@kiwicom/orbit-components/lib/icons/PassengerOutline"
import RadiusSearch from "@kiwicom/orbit-components/lib/icons/RadiusSearch"

const MenuBar = () => (
	<div className="menu-bar">
		<a
			className="menu-bar-button"
			href="/"
		>
			<Search />Search
		</a>
		
		<a
			className="menu-bar-button"
			href="/"
		>
			<TicketOutline />Bookings
		</a>
		
		<a
			className="menu-bar-button"
			href="/"
		>
			<PassengerOutline />Profile
		</a>
		
		<a
			className="menu-bar-button menu-bar-button-chosen"
			href="/"
		>
			<RadiusSearch />Airport
		</a>
	
	</div>
);

export default MenuBar
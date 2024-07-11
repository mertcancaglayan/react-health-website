import React from "react";
import "./Navbar.css";
import { navbarListItems } from "../../data/navbarList";
import NavListItem from "./NavListItem";
import NavbarBtns from "./NavbarBtns";
import Dropdown from "./Dropdown";

function Navbar() {
	return (
		<header>
			<div id="logo">HEALTH</div>
			<nav id="nav">
				<ul>
					{navbarListItems.map((e) => {
						return <NavListItem key={e._id} data={e} />;
					})}
				</ul>
				<NavbarBtns />
			</nav>
			<Dropdown />
		</header>
	);
}

export default Navbar;

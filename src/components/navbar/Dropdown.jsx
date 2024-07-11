import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navbarListItems } from "../../data/navbarList";
import NavListItem from "./NavListItem";

function Dropdown() {
	const [isActive, setIsActive] = useState(false);

	const toggleDropdown = () => {
		setIsActive(!isActive);
	};

	return (
		<nav id="dropdownMenu">
			<FontAwesomeIcon icon={faBars} onClick={toggleDropdown} />
			<ul id="dropdownItems" className={isActive ? "active" : ""}>
				{navbarListItems.map((e) => {
					return <NavListItem key={e._id} data={e} />;
				})}
			</ul>
		</nav>
	);
}

export default Dropdown;

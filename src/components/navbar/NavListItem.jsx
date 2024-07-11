import React from "react";
import { Link } from "react-router-dom";

function NavListItem({ data }) {
	return (
		<li>
			<Link to={`/${data.link.toLowerCase()}`}>{data.name}</Link>
		</li>
	);
}

export default NavListItem;

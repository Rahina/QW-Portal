import React from "react";

import "../SideDrawer/DrawerToggle.css";
const DrawerToggle = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button_line" />
		<div className="toggle-button_line" />
		<div className="toggle-button_line" />
	</button>
);

export default DrawerToggle;

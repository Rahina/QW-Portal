import React from "react";

import "../SideDrawer/SideDrawer.css";

const SideDrawer = props => {
	let drawerClasses = "side-drawer";
	if (props.show) {
		drawerClasses = "side-drawer open";
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">Our Story</a>
				</li>
				<li>
					<a href="/service">What We Do</a>
				</li>
				<li>
					<a href="/team">Who We Are</a>
				</li>
				<li>
					<a href="/team">Sign In</a>
				</li>
				
				<li>
					<a href="/contact">Let's Talk</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideDrawer;

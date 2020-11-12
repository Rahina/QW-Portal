import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle";
import "../SideDrawer/DrawerToggle";
import "./Toolbar.css";

const Toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar_nav">
			<div className="toolbar_toggle-btn">
				<DrawerToggle click={props.drawerClickHandler} />
			</div>
			<div className="toolbar_logo">
				<a href="/">
					<img className="logo" src="../images/QW-horz-blk.png" />
				</a>
			</div>
			<div className="spacer"></div>
			<div className="toolbar_item">
				<ul>
					<li className="linenav">
						<a href="/about">Our Story</a>
					</li>

					<li className="linenav">
						<a href="/service">What We Do</a>
					</li>

					<li className="linenav">
						<a href="/team">Who We Are</a>
					</li>
					<li className="linenav">
						<a href="/signin">Sign In</a>
					</li>

					<li className="contactitem">
						<a href="/contact">Let's Talk</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Toolbar;

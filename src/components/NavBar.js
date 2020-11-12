import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<div className="navbar">
				<Menu inverted stackable size="massive" className="menu">
					<Menu.Item
						name="home"
						active={activeItem === "home"}
						onClick={this.handleItemClick}
						as={Link}
						to="/"
						alt=""
					>
						<img className="logo" src="../images/logo3.png" alt="" />
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							className="linenav"
							name="Our Story"
							active={activeItem === "about"}
							onClick={this.handleItemClick}
							as={Link}
							to="/about"
						/>
						<Menu.Item
							className="linenav"
							name="Who We Are"
							active={activeItem === "team"}
							onClick={this.handleItemClick}
							as={Link}
							to="/team"
						/>
						<Menu.Item
							className="linenav"
							name="Sign In"
							active={activeItem === "signin"}
							onClick={this.handleItemClick}
							as={Link}
							to="/signin"
						/>
						{ <Menu.Item
							className="contactitem"
							name="Contact Us"
							color="red"
							active={activeItem === "contact"}
							onClick={this.handleItemClick}
							as={Link}
							to="/contact"
						/> }
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

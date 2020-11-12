import React from "react";

import { Button, Image, Header } from "semantic-ui-react";
import TeamMembers from "../components/Members/TeamMembers";
import Culture from "../components/Culture/Culture";

export default function Team() {
	return (
		<div>
			<Image className="topPic" src="../images/pic7.jpg" alt="" fluid />

			<h1 className="head">Join Our Women's Interning Program!</h1>
			<Button className="joinbtn">
				<a href="/application">Join Now!</a>
			</Button>

			<div>
				<h1 className="head">Our Team</h1>
				<TeamMembers />
			</div>
		</div>
	);
}

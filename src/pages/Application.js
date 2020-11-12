import React from "react";
import { Image, Container, Item, ItemDescription } from "semantic-ui-react";

export default function Application() {
	return (
		<div className="break">
			<Container>
				<h3>We are currently not accepting applications at this time.</h3>
			</Container>

			{/* <iframe
				className="appform"
				src="https://docs.google.com/forms/d/e/1FAIpQLSfLzP8Ux6pSpkh9Wo4RkusrjnXVOLyasF4etVji8gv5Vop1sQ/viewform?embedded=true"
				width="640"
				height="1300"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Loading…
			</iframe>
			<div className="appcover"></div> */}
		</div>
	);
}

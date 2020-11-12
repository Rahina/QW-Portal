import React from "react";

import { Image, Container } from "semantic-ui-react";
import Services from "../components/Services/Services";

export default function Service() {
	return (
		<div>
			<div>
				<Image className="topPic" src="../images/pic9.png" alt="" fluid />
			</div>
			<Container>
				<h1 className="head">What We Do</h1>
				<p>
					Each project starts with the creation of a Queen Team composed of
					software engineers, UX/UI designers and a team lead. Each team
					collaborates together to bring your vision to life. By working
					cross-functionally, we combine user experience research methods with
					visual design and full-stack software engineering to define and
					develop the best solutions for your business and user needs. Our
					services include, but are not limited to:
				</p>

				<Services />
			</Container>
		</div>
	);
}

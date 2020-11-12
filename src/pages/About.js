import React from "react";
import { Image, Container, Item, ItemDescription } from "semantic-ui-react";
import Values from "../components/Values/Values";
export default function About() {
	return (
		<div>
			<div className="aboutstuff">
				<Image className="topPic" src="../images/pic8.jpg" alt="" fluid />
				<Container>
					<h1 className="head">Our Story</h1>

					<p>
						Queen’s Web was founded by Reshae Alagbada and Safia Hirsi who
						wanted to cultivate positive social change. Going into the
						technology industry themselves, they felt they needed to fill the
						gap between education and their first job opportunity. Soon they
						realized the problem was much bigger than them. They became more
						driven to effectively change the systemic issues that women face in
						the workforce. Now, Queen’s Web has expanded as a company that
						provides opportunities and resources to women in every stage of
						their career path.
					</p>
					<h1 className="head">Our Vision</h1>
					<p>
						Diversify the tech industry, empower women and build a global
						community through collaboration and innovation.
					</p>

					<h1 className="head">Our Values</h1>
					<Values />
				</Container>
			</div>
		</div>
	);
}

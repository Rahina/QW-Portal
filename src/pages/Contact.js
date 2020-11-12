import React from "react";
import ContactForm from "../components/ContactForm";
import { Image, Grid } from "semantic-ui-react";
import Links from "../components/Links";

export default function Contact() {
	return (
		<div className="contact">
			<ContactForm />
			<div className="contactcover"></div> */
			{/* <Grid columns={2} divided>
				<Grid.Row stretched>
					<Grid.Column>
						<ContactForm />
					</Grid.Column>
					<Grid.Column>
						<Image className="contactimg" src="../images/pic4.jpg" fluid />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<div className="contactcover"></div> */}
		</div>
	);
}

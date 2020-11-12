import React from "react";

import { Container, Image, List, Segment } from "semantic-ui-react";
import Links from "./Links";

export default function Footer() {
	return (
		<div>
			<Segment inverted vertical style={{ margin: "5em 0em 0em" }}>
				<Container textAlign="center">
					<Image
						centered
						className="smlogo"
						src="../images/QW-horz-wht.png"
						alt="Queen's webs footer logo"
					/>
					<div className="foot">
						<List horizontal inverted divided link size="small">
							<List.Item as="a" href="/">
								Home
							</List.Item>
							<List.Item as="a" href="/contact">
								Contact Us
							</List.Item>
							<List.Item as="a" href="/application">
								Join Us
							</List.Item>
							<List.Item
								as="a"
								href="https://www.linkedin.com/company/queen-s-web/?viewAsMember=true"
							>
								LinkedIn
							</List.Item>
							<List.Item as="a" href="/terms">
								Terms and Conditions
							</List.Item>
							<List.Item as="a" href="/policy">
								Privacy Policy
							</List.Item>
							<List.Item>&copy; 2020 Queen's Web</List.Item>
						</List>
					</div>
				</Container>
			</Segment>
		</div>
	);
}

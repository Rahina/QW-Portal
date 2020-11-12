import React from "react";
import { Container, Grid } from "semantic-ui-react";

import "../Members/Team.css";

const TeamMembers = () => (
	<Container>
		<Grid centered>
			<Grid.Row columns={2}>
				<Grid.Column>
					<li class="teams_item">
						<div class="member">
							<div class="member_image">
								<img
									src="./images/ReshaeA.jpg"
									alt="Reshae Alagbada Photo"
								></img>
							</div>
							<div class="member_content">
								<h3>Reshae Alagbada</h3>
								<p>Founder/Lead Software Developer</p>
							</div>
						</div>
					</li>
				</Grid.Column>
				<Grid.Column>
					<li class="teams_item">
						<div class="member">
							<div class="member_image">
								<img
									src="https://i.imgur.com/a8FPpLT.jpg"
									alt="Safia Hirsi Photo"
								></img>
							</div>
							<div class="member_content">
								<h3>Safia Hirsi</h3>
								<p>Founder/Lead Software Developer</p>
							</div>
						</div>
					</li>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row columns={4}>
				<Grid.Column>
					<li class="teams_item">
						<div class="member">
							<div class="member_image">
								<img
									src="https://i.imgur.com/3aPnW29.jpg"
									alt="Michelle Rahman Photo"
								></img>
							</div>
							<div class="member_content">
								<h3>Michelle Rahman</h3>
								<p>Software Developer Team Lead</p>
							</div>
						</div>
					</li>
				</Grid.Column>
				<Grid.Column>
					<li class="teams_item">
						<div class="member">
							<div class="member_image">
								<img
									src="https://i.imgur.com/KeUikN0.jpg"
									alt="Katie Yarnold Photo"
								></img>
							</div>
							<div class="member_content">
								<h3>Katie Yarnold</h3>
								<p>UX/UI Team Lead </p>
							</div>
						</div>
					</li>
				</Grid.Column>
				<Grid.Column>
					<li class="teams_item">
						<div class="member">
							<div class="member_image">
								<img
									src="https://i.imgur.com/gAg3PhK.jpg"
									alt="Nandita Vedanta Photo"
								></img>
							</div>
							<div class="member_content">
								<h3>Nandita Vedantan</h3>
								<p>UX/UI Team Lead </p>
							</div>
						</div>
					</li>
				</Grid.Column>
				<Grid.Column>
					<li class="teams_item">
						<div class="member">
							<div class="member_image">
								<img src="./images/kim.jpg" alt="Kim Bombita Photo"></img>
							</div>
							<div class="member_content">
								<h3>Kim Bombita</h3>
								<p>UX/UI Designer Intern</p>
							</div>
						</div>
					</li>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default TeamMembers;

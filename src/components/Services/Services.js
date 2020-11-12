import React from "react";

import "../Icons/Icons.css";
import { Container } from "semantic-ui-react";
export default function Services() {
	return (
		<Container>
			<div class="main">
				<ul class="cards">
					<li class="cards_item">
						<div class="card">
							<div class="card_image">
								<img src="../images/web-development-red.png"></img>
							</div>
							<div class="card_content">
								<h2 class="card_title whyName head">Web Development</h2>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image">
								<img src="../images/app-development-red.png"></img>
							</div>
							<div class="card_content">
								<h2 class="card_title whyName head">App Development</h2>
							</div>
						</div>
					</li>
					<li class="cards_item one">
						<div class="card">
							<div class="card_image">
								<img src="../images/branding-red.png"></img>
							</div>
							<div class="card_content">
								<h2 class="card_title whyName head" whyName head>
									UX/UI Design
								</h2>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</Container>
	);
}

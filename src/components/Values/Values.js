import React from "react";

import "../Values/Values.css";

export default function Values() {
	return (
		<div class="main">
			<ul class="cards">
				<li class="cards_item">
					<div class="card">
						<div class="card_image">
							<img src="../images/passion-red.png"></img>
						</div>
						<div class="card_content">
							<h2 class="card_title whyName head">Passion</h2>
							<p class="card_text">
								We are excited by our work and passionate about crafting
								innovative digital solutions for real world problems.
							</p>
						</div>
					</div>
				</li>
				<li class="cards_item">
					<div class="card">
						<div class="card_image">
							<img src="../images/diversity-red.png"></img>
						</div>
						<div class="card_content">
							<h2 class="card_title whyName head">Diversity</h2>
							<p class="card_text">
								We are committed to upholding diversity in our organization at
								every level and utilizing our team members’ varied backgrounds
								to strengthen our products.
							</p>
						</div>
					</div>
				</li>
				<li class="cards_item">
					<div class="card">
						<div class="card_image">
							<img src="../images/quality-red.png"></img>
						</div>
						<div class="card_content">
							<h2 class="card_title whyName head" whyName head>
								Quality
							</h2>
							<p class="card_text">
								We are motivated to work hard and continuously learn in order to
								develop the highest quality digital products.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

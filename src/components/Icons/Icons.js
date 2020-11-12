import React from "react";

import "../Icons/Icons.css";

export default function Icons() {
	return (
		<div class="main">
			<ul class="cards">
				<li class="cards_item">
					<div class="card">
						<div class="card_image">
							<img src="../images/world-wide-red.png" alt=""></img>
						</div>
						<div class="card_content">
							<h2 class="card_title whyName head">World Wide</h2>
							<p class="card_text">
								Our team members are based all over the world, bringing their
								unique perspectives to our cross-functional team.
							</p>
						</div>
					</div>
				</li>
				<li class="cards_item">
					<div class="card">
						<div class="card_image">
							<img src="../images/agile-teams-red.png " alt=""></img>
						</div>
						<div class="card_content">
							<h2 class="card_title whyName head">Agile Teams</h2>
							<p class="card_text">
								Using Agile methodology, we collaborate to respond to change and
								continuously deliver great products.
							</p>
						</div>
					</div>
				</li>
				<li class="cards_item">
					<div class="card">
						<div class="card_image">
							<img src="../images/philantropy-red.png" alt=""></img>
						</div>
						<div class="card_content">
							<h2 class="card_title whyName head" whyName head>
								Philantropy
							</h2>
							<p class="card_text">
								A portion of our proceeds goes back to organizations supporting
								women in tech.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

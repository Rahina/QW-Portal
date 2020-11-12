import React from "react";
import { Item, ItemDescription, Container } from "semantic-ui-react";

import "../Culture/Culture.css";
const Culture = () => (
	<div>
		<ul class="culture">
			<li>
				<div>
					<h2 class=" whyName headCulture">Empowering</h2>
					<p class="cultureText">
						We empower our employees to gain confidence by encouraging them to
						take on challenges and responsibilities while giving them the
						freedom to decide how to accomplish goals and resolve issues.
					</p>
				</div>
			</li>
			<li>
				<div>
					<h2 class="whyName headCulture">Collaborative</h2>
					<p class="cultureText">
						We develop and strengthen partnerships with others, both inside or
						outside the organization, to build a supportive community that
						thrives on collaboration.
					</p>
				</div>
			</li>
			<li>
				<div>
					<h2 class="whyName headCulture">Forward Thinking</h2>
					<p class="cultureText">
						We are innovative and think holistically to anticipate complications
						and harness change for our advantage.
					</p>
				</div>
			</li>
		</ul>
	</div>
);

export default Culture;

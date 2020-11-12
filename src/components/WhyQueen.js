import React from "react";
import { Image } from "semantic-ui-react";

export default function WhyQueen() {
	return (
		<div className="whycard">
			<Image src="../images/agile-teams-red.png" wrapped ui={false} />

			<Image src="../images/world-wide-red.png" wrapped ui={false} />

			<Image
				src="../images/philantropy-red.png"
				wrapped
				ui={false}
				className="whyimage"
			/>
		</div>
	);
}

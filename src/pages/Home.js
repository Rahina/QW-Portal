import React from "react";
import { Image, Header, Container } from "semantic-ui-react";
import Icons from "../components/Icons/Icons";

export default function Home() {
	return (
		<div>
			<div>
				<div className="homeimg">
					<Image className="topPic" src="../images/pic10.png" alt="" fluid />
				</div>

				<h1 className="missionhead">Mission</h1>
				<Container>
					<p className="mission">
						Queen’s Web empowers women worldwide by providing professional
						opportunities for ongoing efforts to diversify the technology
						industry.
					</p>
					<p>
						We provide early career opportunities for women with traditional and
						non-traditional backgrounds in technology, along with women who have
						been separated from tech roles and those already in the industry
						striving to enter leadership positions. It is our goal to let women
						know that they have a place in the tech industry and that we will
						advocate on their behalf.
					</p>
				</Container>
				<div>
					<h1 id="QW" className="head">
						Why Queen’s Web?
					</h1>
					<Icons />
				</div>
			</div>
		</div>
	);
}

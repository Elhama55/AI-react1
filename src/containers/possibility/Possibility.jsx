import React from "react";
import "./possibility.css";

import possImage from "../../assests/possibility.png";

const Possibility = () => {
	return (
		<div className="gpt3__poss section__padding" id="possibility">
			<div className="gpt3__poss_image">
				<img src={possImage} alt="possibility" />
			</div>

			<div className="gpt3__poss-content">
				<h4>Request Early Access to get Started</h4>
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
					officiis quam magni, officia architecto consectetur aliquam eos vel a
					accusamus pariatur, veniam voluptate perspiciatis odio.
				</p>
				<h4>Request Early Access to get Started</h4>
			</div>
		</div>
	);
};

export default Possibility;

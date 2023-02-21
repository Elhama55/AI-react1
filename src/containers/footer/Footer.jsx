import React from "react";

import gpt3logo from "../../assests/logo.svg";
import "./footer.css";

const footer = () => {
	return (
		<div className="gpt3__footer section__padding">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text">
					Do you want to step in to the future before others
				</h1>
			</div>

			<div className="gpt3__footer-btn">
				<p>Request Early Access</p>
			</div>

			<div className="gpt3__footer-links">
				<div className="gpt3__footer-links_logo">
					<img src={gpt3logo} alt="logo" />
					<p>All Rights Reservced</p>
				</div>

				<div className="gpt3__footer-links_div">
					<h4>Links</h4>
					<p>link1</p>
					<p>link2</p>
					<p>link3</p>
					<p>link4</p>
					<p>link5</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Links</h4>
					<p>link6</p>
					<p>link7</p>
					<p>link8</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Links</h4>
					<p>link9</p>
					<p>link10</p>
					<p>link11</p>
				</div>
			</div>

			<div className="gpt3__footer-copyright">
				<p>&copy;2023 | All rights Reserved.</p>
			</div>
		</div>
	);
};

export default footer;

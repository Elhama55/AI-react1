import React from "react";
import people from "../../assests/people.png";
import ai from "../../assests/ai.png";
import "./header.css";

const Header = () => {
	return (
		<div className="gpt3__header section__padding" id="home">
			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Let's Build Something amazing with GPT-3 Open AI
				</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					voluptatem voluptatum corrupti odit, quos quis ratione pariatur dolore
					facere, eius explicabo magni obcaecati! Neque repellat error quod nemo
					voluptates maiores.
				</p>

				<div className="gpt3__header-content-input">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Started</button>
				</div>

				<div className="gpt3__header-content__people">
					<img src={people} alt="people" />
					<p>1,600 people requsted access a visit in last 24 hours</p>
				</div>
			</div>
			<div className="gpt3__header-image">
				<img src={ai} alt="ai" />
			</div>
		</div>
	);
};

export default Header;

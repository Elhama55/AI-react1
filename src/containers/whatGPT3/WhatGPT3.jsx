import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
	return (
		<div className="gpt3__wgpt3 section__margin" id="wgpt3">
			<div className="gpt3__wgpt3-feature">
				<Feature
					title="What is GPT-3"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptas dolorem cupiditate, architecto officia ea eligendi quae dolorum, libero eos, eius amet placeat aliquid autem quam. Atque, porro quis nisi temporibus ea recusandae repellat autem."
				/>
			</div>

			<div className="gpt3__wgpt3-heading">
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>

			<div className="gpt3__wgpt3-container">
				<Feature
					title="Chatbots"
					text="architecto officia ea eligendi quae dolorum, libero eos, eius amet placeat aliquid autem quam. Atque, porro quis nisi temporibus ea recusandae repellat autem."
				/>
				<Feature
					title="Knowledge"
					text="architecto officia ea eligendi quae dolorum, libero eos, eius amet placeat aliquid autem quam. Atque, porro quis nisi temporibus ea recusandae repellat autem."
				/>
				<Feature
					title="Education"
					text="architecto officia ea eligendi quae dolorum, libero eos, eius amet placeat aliquid autem quam. Atque, porro quis nisi temporibus ea recusandae repellat autem."
				/>
			</div>
		</div>
	);
};

export default WhatGPT3;

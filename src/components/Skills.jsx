import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import tailwind from "../assets/images/tailwind.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import mongo from "../assets/images/mongo.png";
import github from "../assets/images/github.png";

const Skills = () => {
	return (
		<div id="skills" className="py-8 px-[5%] scroll-mt-20">
			<h1 className=" text-center md:text-left lg:text-left mt-8 lg:mt-0 md:mt-0 text-4xl md:text-6xl lg:text-6xl font-semibold text-[#fff] ">
				My Skills
			</h1>
			<div className="mt-12 flex flex-col items-center md:flex-row lg:flex-row gap-8 flex-wrap">
				<div className="bg-[#262626]  w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={html} alt="" />
					<h2 className="text-center mt-5 text-2xl">HTML</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={css} alt="" />
					<h2 className="text-center mt-5 text-2xl">CSS</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={tailwind} alt="" />
					<h2 className="text-center mt-5 text-2xl">Tailwind CSS</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={javascript} alt="" />
					<h2 className="text-center mt-5 text-2xl">JavaScipt</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={react} alt="" />
					<h2 className="text-center mt-5 text-2xl">React</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={node} alt="" />
					<h2 className="text-center mt-5 text-2xl">Node JS</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={mongo} alt="" />
					<h2 className="text-center mt-5 text-2xl">Mongo DB</h2>
				</div>
				<div className="bg-[#262626] w-[300px] md:w-[250px] p-10 text-xl font-semibold rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ff004f] duration-300 cursor-pointer">
					<img src={github} alt="" />
					<h2 className="text-center mt-5 text-2xl">GitHub</h2>
				</div>
			</div>
		</div>
	);
};

export default Skills;

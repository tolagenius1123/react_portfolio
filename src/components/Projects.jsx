import React from "react";
import "../index.css";
import { projects } from "../data/project";

const Projects = () => {
	return (
		<div id="projects" className="py-8 px-[5%] lg:mt-[50px] md:mt-[50px]">
			<h1 className=" text-center md:text-left lg:text-left mt-8 lg:mt-0 md:mt-0 text-4xl md:text-6xl lg:text-6xl font-semibold text-[#fff]">
				My Projects
			</h1>
			<div className="work-list">
				{projects.map((project) => {
					return (
						<div key={project.id} className="work">
							<img src={project.image} alt="project" />
							<div className="layer">
								<h3>{project.name}</h3>
								<p>{project.description}</p>
								<a href={project.link} target="_blank">
									<i className="fa-solid fa-up-right-from-square"></i>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;

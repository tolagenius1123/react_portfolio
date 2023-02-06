import React from "react";
import work from "../assets/images/work.jpg";

const About = () => {
	return (
		<div id="about" className="py-[80px] text-[#ababab] ">
			<div className="py-[10px] px-[5%]">
				<div className="flex flex-col md:flex-row justify-between flex-wrap">
					<div className="basis-1/3">
						<img
							src={work}
							alt="profile"
							className="w-full h-[500px] rounded-lg"
						/>
					</div>
					<div className="basis-[60%] ">
						<h1 className="mt-8 lg:mt-0 md:mt-0 text-4xl md:text-6xl lg:text-6xl font-semibold text-[#fff]">
							About Me
						</h1>
						<p className="mt-2 w-[100%] md:w-[80%] text-left">
							My name is Jinadu Omotola, a frontend developer
							based in Lagos, Nigeria. I'm a React developer with
							proven experience and specialty in building
							responsive websites. <br /> Enthusiastic and able to
							work exceptionally well as an individual and in a
							team. Passionate about learning and development with
							desire to apply my skills on projects that will
							solve human problems and make life easy for the
							society.
						</p>
						<div className="flex flex-col mt-5 mb-10">
							<p id="tab-links" className="">
								Experience
							</p>
							<div className="">
								<div>
									<div className="list-none mt-6">
										<span className="text-[#ff004f] text-base content-['']">
											Oct 2022 - Till date
										</span>{" "}
										<br />
										React Developer @FCMB
									</div>
									<div className="mt-4">
										<span className="text-[#ff004f] text-base">
											Feb 2022 - Oct 2022
										</span>
										<br />
										Software Engineer Trainee @Semicolon
										Africa
									</div>
									<div className="mt-4">
										<span className="text-[#ff004f] text-base">
											May 2021 - Jan 2022
										</span>
										<br />
										Invoicing/Order fulfillment Officer @CAP
										PLC
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

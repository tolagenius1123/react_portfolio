import React from "react";

const Header = () => {
	return (
		<div
			id="header"
			className="pt-3 px-[5%] bg-hero-pattern h-[100vh] bg-contain bg-no-repeat  md:bg-right sm:bg-center scroll-mt-40"
		>
			<div className="mt-[60%] text-3xl text-center md:text-center md:mt-[80%] lg:text-left lg:mt-[12%]">
				<h1 className=" lg:text-7xl md:text-5xl lg:text-left text-[#fff] font-bold text-3xl text-center">
					Hi! I'm{" "}
					<span className="text-[#ff004f]"> Omotola Jinadu</span>
				</h1>
				<p className="w-[100%] m-2  text-sm font-light text-center lg:w-[70%] lg:text-2xl lg:font-light lg:text-left md:w-[100%] md:text-xl">
					A Frontend Developer who is passionate about learning and
					building beautiful responsive web applications.
				</p>
				<a
					href="#contact"
					className="no-underline my-0 mx-auto border-none text-[#fff] bg-[#ff004f]  text-base lg:text-lg font-light p-4 relative top-5 rounded-md duration-[0.5s] hover:bg-[#4837ff] hover:text-[#fff]"
				>
					Let's Connect
				</a>
			</div>
		</div>
	);
};

export default Header;

import React, { useState } from "react";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const openMobileMenu = () => {
		setOpenMenu(true);
	};

	const closeMobileMenu = () => {
		setOpenMenu(false);
	};

	return (
		<div
			id="home"
			className="sticky top-0 p-4 flex justify-between items-center z-10 bg-[#080808]"
		>
			<h1 className="lg:ml-14 md:ml-10 sm:ml-8 text-5xl font-sacramento font-bold cursor-pointer">
				<span className="font-sacramento text-[#ff004f] font-bold">
					O
				</span>
				J
			</h1>
			<div className="flex items-center">
				<button
					onClick={openMobileMenu}
					className="text-3xl md:hidden cursor-pointer"
				>
					&#9776;
				</button>
				<ul
					id="sideMenu"
					className="hidden md:flex lg:flex justify-around p-2 mr-10 "
				>
					<li className="mr-10 text-lg hover:text-gray-400">
						<a href="#header">Home</a>
					</li>
					<li className="mr-10 text-lg hover:text-gray-400">
						<a href="#about">About</a>
					</li>
					<li className="mr-10 text-lg hover:text-gray-400">
						<a href="#skills">Skills</a>
					</li>
					<li className="mr-10 text-lg hover:text-gray-400">
						<a href="#projects">Projects</a>
					</li>
					<li className=" text-lg hover:text-gray-400">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			<div
				id="mobile-menu"
				className={
					openMenu
						? "absolute top-0 left-[50%] bg-[#ff004f] w-1/2 text-4xl  flex-col justify-center origin-top animate-open-menu z-10"
						: "hidden"
				}
			>
				<button
					onClick={closeMobileMenu}
					className="text-6xl self-end px-6"
				>
					&times;
				</button>
				<nav className="flex flex-col min-h-screen items-center py-8">
					<a
						href="#header"
						onClick={closeMobileMenu}
						className="w-full text-2xl text-center py-6 hover:opacity-90"
					>
						Home
					</a>
					<a
						href="#about"
						onClick={closeMobileMenu}
						className="w-full text-2xl text-center py-6 hover:opacity-90"
					>
						About
					</a>
					<a
						href="#skills"
						onClick={closeMobileMenu}
						className="w-full text-2xl text-center py-6 hover:opacity-90"
					>
						Skills
					</a>
					<a
						href="#projects"
						onClick={closeMobileMenu}
						className="w-full text-2xl text-center py-6 hover:opacity-90"
					>
						Projects
					</a>
					<a
						href="#contact"
						onClick={closeMobileMenu}
						className="w-full text-2xl text-center py-6 hover:opacity-90"
					>
						Contact
					</a>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;

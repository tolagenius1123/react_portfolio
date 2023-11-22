import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
	const newData = {
		fullName: "",
		email: "",
		message: "",
	};

	const [userData, setUserData] = useState(newData);

	const formOnChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				"https://getform.io/f/0be5109d-fa03-46a8-837f-bf0606de654a",
				userData
			)
			.then((response) => {
				console.log(response);
				setUserData(newData);
				toast.success("Message sent successfully");
			})
			.catch((error) => console.log(error));
	};

	return (
		<div
			id="contact"
			className="py-8 px-[5%] lg:mt-[50px] md:mt-[50px] scroll-mt-20"
		>
			<div className="flex flex-col lg:flex-row md:flex-row gap-10">
				<div className="basis-2/6">
					<h1 className=" text-left md:text-left lg:text-left mt-8 lg:mt-0 md:mt-0 text-4xl md:text-6xl lg:text-6xl font-semibold text-[#fff]">
						Contact Me
					</h1>
					<p className="mt-4 md:mt-8 lg:mt-8">
						<i className="fa-solid fa-paper-plane text-[#ff004f] mt-6 mr-4 text-2xl"></i>
						tolajinadu1123@gmail.com
					</p>
					<p>
						<i className="fa-solid fa-square-phone text-[#ff004f] mt-6 mr-4 text-2xl"></i>
						08141366380
					</p>
					<div className="mt-8 mb-12">
						<a
							href="https://www.linkedin.com/in/omotola-jinadu-693800205/"
							target="_blank"
						>
							<i className="fa-brands fa-linkedin  text-3xl text-[#ababab] mr-6 transform duration-[0.5s] hover:text-[#ff004f] translate-y-[-5]"></i>
						</a>
						<a
							href="https://github.com/tolagenius1123"
							target="_blank"
						>
							<i className="fa-brands fa-github text-3xl text-[#ababab] mr-6 transform duration-[0.5s] hover:text-[#ff004f] translate-y-[-5]"></i>
						</a>
						<a
							href="https://twitter.com/Tee_switch1123"
							target="_blank"
						>
							<i className="fa-brands fa-square-twitter text-3xl text-[#ababab] mr-6 transform duration-[0.5s] hover:text-[#ff004f] translate-y-[-5]"></i>
						</a>
					</div>
					<a
						href="images/jinadu_resume.pdf"
						download
						className="no-underline border-none w-[65%] text-[#fff] bg-[#ff004f]  text-base lg:text-lg font-light p-4 top-5 rounded-md duration-[0.5s] hover:bg-[#4837ff] hover:text-[#fff]"
					>
						Download CV
					</a>
				</div>
				<div className="basis-3/5">
					<form onSubmit={handleSubmit} className="w-full">
						<input
							type="text"
							name="fullName"
							className="w-full border-none bg-[#262626] p-[15px] mb-[15px] text-[#fff] text-lg rounded-[6px] resize-none"
							placeholder="Fullname"
							required
							onChange={formOnChange}
							value={userData.fullName}
						/>
						<input
							type="email"
							name="email"
							className="w-full border-none bg-[#262626] p-[15px] my-[15px] text-[#fff] text-lg rounded-[6px] resize-none"
							placeholder="Email"
							required
							onChange={formOnChange}
							value={userData.email}
						/>
						<textarea
							className="w-full border-none bg-[#262626] p-[15px] my-[15px] text-[#fff] text-lg rounded-[6px] resize-none"
							name="message"
							rows="6"
							placeholder="Your message ..."
							onChange={formOnChange}
							value={userData.message}
						></textarea>
						<button
							className="no-underline border-none w-[35%] text-[#fff] bg-[#ff004f]  text-base lg:text-lg font-light p-4 top-5 rounded-md duration-[0.5s] hover:bg-[#4837ff] hover:text-[#fff]"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

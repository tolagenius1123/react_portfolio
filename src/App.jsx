import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
	return (
		<div className="">
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

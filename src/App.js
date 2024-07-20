import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import HowItWorks from "./components/howitworks/HowItWorks";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Banner></Banner>
			<Features></Features>
			<Testimonial></Testimonial>
			<HowItWorks></HowItWorks>
		</div>
	);
}

export default App;

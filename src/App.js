import "./App.css";
import Banner from "./components/banner/Banner";
import Cta from "./components/cta/Cta";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
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
			<Cta></Cta>
			<Footer />
		</div>
	);
}

export default App;

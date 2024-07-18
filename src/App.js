import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Banner></Banner>
			<Features></Features>
			<Testimonial></Testimonial>
		</div>
	);
}

export default App;

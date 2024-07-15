import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Banner></Banner>
			<Features></Features>
		</div>
	);
}

export default App;

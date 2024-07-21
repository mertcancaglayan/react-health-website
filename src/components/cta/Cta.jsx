import React from "react";
import "./Cta.css";

function Cta() {
	return (
		<section className="sectionPadding">
			<div className="ctaContainer">
				<h2 className="title">Stay Informed with Our Newsletter</h2>
				<p className="text">
					Sign up for our newsletter to receive the latest updates on mental health, fitness, nutrition, and
					self-care. Stay informed and take control of your well-being.
				</p>
				<div className="btnContainer">
					<button id="subscribe">Subscribe</button>
					<button id="learnMore"> Learn More</button>
				</div>
			</div>
		</section>
	);
}
export default Cta;

import React from "react";
import { testimonialContentData } from "../../data/testimonialContent";
import "./Testimonial.css";
import Slider from "../slider/Slider";

function Testimonial() {
	return (
		<section className="sectionPadding">
			<div className="testimonialContainer">
				<div className="testimonialHeader">
					<div className="headerContent">
						<h2 className="title">{testimonialContentData.heading}</h2>
						<p className="description">{testimonialContentData.description}</p>
					</div>
				</div>
				<Slider data={testimonialContentData.customers} />
			</div>
		</section>
	);
}

export default Testimonial;

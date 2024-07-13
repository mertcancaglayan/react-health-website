import React from "react";
import BannerBtns from "./BannerBtns";
import { bannerContent } from "../../data/bannerContents";
import BannerCarousel from "./BannerCarousel";
import "./Banner.css";

function Banner() {
	return (
		<section className="bannerSection">
			<div className="bannerContent">
				<h1>{bannerContent.heading}</h1>
				<p>{bannerContent.description}</p>
				<BannerBtns />
			</div>
			<div className="bannerCarousel">
				<BannerCarousel />
			</div>
		</section>
	);
}

export default Banner;

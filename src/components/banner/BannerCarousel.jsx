import React, { useState } from "react";
import { bannerContent } from "../../data/bannerContents";

function BannerCarousel() {
	const [carouselPosition, setCarouselPosition] = useState(0);

	function showPreviousItem() {
		setCarouselPosition((position) => {
			if (position === 0) return bannerContent.carousel.slides.length - 1;
			console.log(position - 1);
			return position - 1;
		});
	}

	function showNextItem() {
		setCarouselPosition((position) => {
			if (position === bannerContent.carousel.slides.length - 1) return 0;
			console.log(position + 1);
			return position + 1;
		});
	}

	return (
		<div className="carouselContainer">
			<div className="carouselContent">
				{bannerContent.carousel.slides.map((slide, index) => (
					<div
						key={index}
						className="carouselItem"
						style={{ transform: `translateX(-${carouselPosition * 100}%)` }}
					>
						<div className="carouselItemContent">
							<div className="imageWrapper">
								<img className="carouselImage" src={slide.src} alt={slide.alt} />
							</div>
							<div className="carouselText">
								<div className="textContainer">
									<h2>{slide.heading}</h2>
									<p>{slide.description}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="carouselControls">

				<button onClick={showPreviousItem} className="carouselButton Previous">
					{"<"}
				</button>
				<button onClick={showNextItem} className="carouselButton Next">
					{">"}
				</button>
			</div>
		</div>
	);
}

export default BannerCarousel;

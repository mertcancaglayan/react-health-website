import React, { Fragment, useEffect, useState } from "react";

function Slider({ data }) {
	const [currentPosition, setCurrentPosition] = useState(0);
	const [itemsPerSlide, setItemsPerSlide] = useState(1);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setItemsPerSlide(1);
			} else if (window.innerWidth <= 768) {
				setItemsPerSlide(2);
			} else {
				setItemsPerSlide(1);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	function showPreviousItem() {
		setCurrentPosition((position) => {
			if (position <= 0) return 0;
			return position - itemsPerSlide;
		});
	}

	function showNextItem() {
		setCurrentPosition((position) => {
			if (position + itemsPerSlide > data.length) return position;
			return position + itemsPerSlide;
		});
	}

	return (
		<Fragment>
			<div className="sliderContainer">
				<div className="slider">
					{data.map((item, index) => (
						<div
							key={index}
							className="sliderPadding"
							style={{ transform: `translateX(-${(currentPosition / itemsPerSlide) * 100}%)` }}
						>
							<div className="sliderItem">
								<p className="itemDescription">{item.description}</p>
								<div className="imageContainer">
									<img
										src={item.src || `/public/images/customerProfileImages/blankProfile.png`}
										alt={item.alt || item.name}
									/>
								</div>
								<p className="occupation">{item.job}</p>
								<h3 className="itemTitle">{item.name}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="controls">
				<button onClick={showPreviousItem} className="prevButton" disabled={currentPosition === 0}>
					{"<"}
				</button>
				<button
					onClick={showNextItem}
					className="nextButton"
					disabled={currentPosition + itemsPerSlide >= data.length}
				>
					{">"}
				</button>
			</div>
		</Fragment>
	);
}

export default Slider;

import React from "react";
import FeaturesButtons from "./FeaturesButtons";
import "./Features.css";
import { featuresSectionData } from "../../data/featuresContent";

function Features() {
	return (
		<section className="sectionPadding">
			<div className="featuresContainer">
				<div className="featuresHeader">
					<div className="headerContent">
						<h2 className="title">{featuresSectionData.heading}</h2>
						<p className="description">{featuresSectionData.description}</p>
					</div>
				</div>
				<div className="featuresGrid">
					{featuresSectionData.features.item.map((item, index) => (
						<div key={index} className="featureItem">
							<div className="imageContainer">
								<img src={item.src} alt={item.alt} />
							</div>
							<h3 className="itemTitle">{item.heading}</h3>
							<p className="itemDescription">{item.description}</p>
						</div>
					))}
				</div>
				<FeaturesButtons />
			</div>
		</section>
	);
}

export default Features;

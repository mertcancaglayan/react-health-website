import React from "react";
import { howSectionData } from "../../data/howitworksContent";
import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import "./HowItWorks.css";

function HowItWorks() {
	return (
		<section className="sectionPadding">
			<div className="container">
				<LargeCard data={howSectionData.largeCard}></LargeCard>
				<MediumCard data={howSectionData.mediumCard}></MediumCard>
				<SmallCard data={howSectionData.smallCard}></SmallCard>
			</div>
		</section>
	);
}

export default HowItWorks;

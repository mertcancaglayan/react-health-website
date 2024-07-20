import React, { Fragment } from "react";
import "./LargeCard.css"

function LargeCard({ data }) {
	return (
		<Fragment>
			{data.map((item, index) => {
				const cardClass = index === 0 ? "largeCard largeCard1" : "largeCard largeCard2";
				return (
					<div className={`${cardClass} largeCard`} key={item.id}>
						<div className="content">
							<div className="textArea">
								<h3 className="cardtitle">{item.title}</h3>
								<p className="description">{item.description}</p>
							</div>
							<div className="buttonContainer">
								<button>{item.buttons.first}</button>
								<button>{item.buttons.second}</button>
							</div>
						</div>
						<div className="imgContainer">
							<img src={item.image.src} alt={item.image.alt} className="image" />
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default LargeCard;

import React, { Fragment } from "react";
import "./SmallCard.css";

function SmallCard({ data }) {
	return (
		<Fragment>
			{data.map((item, index) => {
				const cardClass = index === 0 ? "smallCard smallCard1" : "smallCard smallCard2";
				return (
					<div className={cardClass} key={item.id}>
						<div className="content">
							<div className="textArea">
								<h3 className="cardtitle">{item.title}</h3>
								<p className="description">{item.description}</p>
							</div>
							<div className="buttonContainer">
								<button>{item.buttons.first}</button>
							</div>
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default SmallCard;

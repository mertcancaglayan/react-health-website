import React, { Fragment } from "react";
import "./MediumCard.css";

function MediumCard({ data }) {
	return (
		<Fragment>
			{data.map((item, index) => {
				return (
					<div className="mediumCard mediumCard1" key={item.id}>
						<div className="imgContainer">
							<img src={item.image.src} alt={item.image.alt} className="image" />
						</div>
						<div className="content">
							<div>
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

export default MediumCard;

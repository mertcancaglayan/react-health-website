import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FooterData } from "../../data/footerContent";
import "./Footer.css";

function Footer() {
	const { columnLinks, socialMediaLinks, footerText, footerLinks } = FooterData;
	const logo = {
		url: "#",
		icon: faDumbbell,
		alt: "Company Logo",
	};

	return (
		<footer className="sectionPadding">
			<div className="footerContainer">
				<div className="footerGrid">
					<a href={logo.url} className="logoLink">
						<FontAwesomeIcon icon={logo.icon} className="logoImage" alt={logo.alt} />
					</a>
					{columnLinks.map((column, index) => (
						<ul key={index} className="columnLinks">
							{column.links.map((link, linkIndex) => (
								<li key={linkIndex} className="linkItem">
									<a href={link.url} className="link">
										{link.title}
									</a>
								</li>
							))}
						</ul>
					))}
					<div className="socialMediaLinks">
						{socialMediaLinks.map((link, index) => (
							<a key={index} href={link.url} className="socialLink">
								<FontAwesomeIcon icon={link.icon} />
							</a>
						))}
					</div>
				</div>
				<div className="divider" />
				<div className="footerBottom">
					<p className="footerText">{footerText}</p>
					<ul className="footerLinks">
						{footerLinks.map((link, index) => (
							<li key={index} className="footerLinkItem">
								<a href={link.url} className="footerLink">
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

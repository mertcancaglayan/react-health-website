import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const FooterData = {
	columnLinks: [
		{
			links: [
				{ title: "About Us", url: "#" },
				{ title: "Contact Us", url: "#" },
				{ title: "Blog", url: "#" },
				{ title: "Resources", url: "#" },
				{ title: "FAQ", url: "#" },
			],
		},
	],
	socialMediaLinks: [
		{ url: "#", icon: faFacebook },
		{ url: "#", icon: faInstagram },
		{ url: "#", icon: faLinkedin },
		{ url: "#", icon: faTwitter },
		{ url: "#", icon: faYoutube },
	],
	footerText: "© 2024 Mert Can Caglayan. All rights reserved.",
	footerLinks: [
		{ title: "Privacy Policy", url: "#" },
		{ title: "Terms of Service", url: "#" },
		{ title: "Cookies Settings", url: "#" },
	],
};

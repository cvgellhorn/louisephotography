export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		// name: string;
		// email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Louise Pillon",
	// Your website's title and description (meta fields)
	title: "Louise Pillon",
	description:
		"Louise Pillon is a photographer based in Sydney, Australia. She specializes in maternity, newborn, and family photography.",
	useViewTransitions: true,
	// Your information!
	author: {
		// name: "Louise von Gellhorn",
		// email: "loupillon@gmail.com",
		twitter: "LouisePillon",
	},

	// default image for meta tags if the page doesn't have an image already
	//TODO: change this later
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;

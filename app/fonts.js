import { Raleway, PT_Sans } from "next/font/google";

export const raleway = Raleway({
	subsets: ["latin"],
	variable: "--font-raleway",
});

export const pt_sans = PT_Sans({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-pt-sans",
});

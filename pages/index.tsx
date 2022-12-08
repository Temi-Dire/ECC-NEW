import type { NextPage } from "next";
import Head from "next/head";
import PartnersSection from "../Sections/HomeSections/PartnersSection";
import VentComplaintsSection from "../Sections/HomeSections/VentComplaintsSection";
import HeroSection from "../Sections/HomeSections/HeroSection";
import styles from "../styles/Home.module.css";
import { Footer, GoalCard, NavBar } from "../components";
import PostaComplaint from "../Sections/HomeSections/PostaComplaint";
import Testimonials from "../Sections/HomeSections/TestimonialsSection";
import Numbers from "../Sections/HomeSections/Numbers";
import OurGoalsSection from "../Sections/HomeSections/OurGoalsSection";
import HowDoesItWork from "../Sections/HomeSections/HowDoesItWork";
import AOS from "aos";
import { useEffect } from "react";

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Head>
				<title>Ecommerce Complaint</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<NavBar searchIconIsPresent={true} />
			<div className="pt-48 mx-auto items-center justify-center text-center bg-clearblue">
				<p className="mx-auto text-[30px] sm:text-4xl font-bold">
					Make & <span className="text-eccblue">resolve</span>
					<br />
					complaints easily
				</p>
				<p className="mt-4 font-medium sm:text-[14px] px-[15px] sm:px-[0]">
					Hair vendor don block you <br />
					after you make payment for Instagram?
				</p>
				<img
					src="/Images/man-freaked-out.png"
					alt=""
					className="mx-auto"
				/>
			</div>
			<OurGoalsSection />
			<Numbers />
			<VentComplaintsSection />
			<HowDoesItWork />
			<Testimonials />
			<PartnersSection />
			<PostaComplaint />
			<Footer />
		</div>
	);
};

export default Home;

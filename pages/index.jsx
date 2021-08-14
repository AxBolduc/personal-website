import Head from "next/head";
import AboutPane from "../components/AboutPane";
import Header from "../components/Header";
import HeroPane from "../components/HeroPane";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Alex Bolduc - Software Engineer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeroPane />
			<AboutPane />
		</div>
	);
}

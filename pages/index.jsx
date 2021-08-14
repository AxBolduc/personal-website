import Head from "next/head";
import Header from "../components/Header";
import HeroPane from "../components/HeroPane";

export default function Home() {
	return (
		<div className="px-48">
			<Head>
				<title>Alex Bolduc - Software Engineer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeroPane />
		</div>
	);
}

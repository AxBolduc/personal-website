import Header from "./Header";

function HeroPane() {
	return (
		<div id="home" className="h-screen bg-blue-500">
			<div className="px-6 md:px-12 lg:px-24 xl:px-48">
				<Header />
			</div>
		</div>
	);
}

export default HeroPane;

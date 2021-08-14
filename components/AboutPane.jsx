import Image from "next/image";
import meCircle from "../images/meCircle.png";

function AboutPane() {
	return (
		<div id="about" className="h-screen bg-gray-50">
			<div className="px-6 md:px-12 lg:px-24 xl:px-48 h-full py-4 flex flex-col justify-between items-center">
				<h2 className="text-3xl font-bold text-center">About Me</h2>
				<div className="">
					<Image src={meCircle} className="scale-75" />
				</div>
				<div>
					<p className="mb-3">
						I am an undergraduate student at Worcester Polytechnic
						Institute studying computer science. Computer science
						has been my passion since I created my first website
						during a free period in the 6th grade. Since then I have
						continued to self-study various languages and frameworks
						and have finally entered into a formal computer science
						education.
					</p>
					<p className="my-3">
						I have taken a particular interest in todays shift to an
						increasingly web-based landscape. A landscape which has
						driven many companies to migrate from traditional
						desktop applications to responsive web applications.
						This is a large shift for the industry and one that I am
						excited to be a part of.
					</p>
					<p className="mt-3">
						Personally, I am a big Boston sports fan and will sit
						down and watch just about any sport I can get my hands
						on. In my free time I enjoy browsing the vast depths of
						the internet learning as much as I can to improve myself
						and progress on my journey.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutPane;

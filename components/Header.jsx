import Image from "next/image";
import logo from "../images/Logo.png";

function mail() {
	window.location = "mailto:aebolduc@wpi.edu";
}

function Header() {
	return (
		<header className="flex justify-between gap-5 h-24 items-center">
			{/* left */}
			<div>
				{/* <h1 className="text-lg md:text-3xl">Alex Bolduc</h1> */}
				<Image src={logo} width="175" height="50" />
			</div>

			{/* right */}
			<div>
				<div className="sm:text-xl md:flex shadow-lg rounded-full p-4 cursor-pointer md:text-3xl bg-white  transition ease-in-out duration-100 hover:scale-110 ">
					<h2 className="text-blue-600 font-bold" onClick={mail}>
						Contact
					</h2>
				</div>
			</div>
		</header>
	);
}

export default Header;

function Header() {
	return (
		<header className="flex justify-between gap-5 h-24 px-8 items-center shadow-lg">
			{/* left */}
			<div>
				<h1 className="text-lg md:text-3xl">Alex Bolduc</h1>
			</div>

			{/* right */}
			<div className="hidden md:flex justify-around space-x-4 items-center">
				<h2 className="md:text-2xl">About</h2>
				<h2 className="md:text-2xl">Work</h2>
				<div className="shadow-md rounded-full p-2 cursor-pointer md:text-2xl">
					<h2 className="text-blue-400 font-bold">Contact</h2>
				</div>
			</div>
		</header>
	);
}

export default Header;

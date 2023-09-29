import HERO from "../assets/images/hero.png";

const Hero = () => {
	return (
		<div className="flex w-full">
			<div className="w-1/2 h-full px-12 my-auto">
				<h1 className="font-bold text-6xl">Read and Add your Insight</h1>
				<h4 className="text-2xl mt-5">
					Find Your Favorite Book and Buy, Sell or Exchange
				</h4>
				<form className="mt-14">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only"
					>
						Search
					</label>
					<div className="relative">
						<input
							type="search"
							id="default-search"
							className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 hover:border-[#FF971D] focus:outline-none"
							placeholder="Search by Book, Author or Genre..."
							required
						/>
						<button
							type="submit"
							className="bg-[#FF971D] text-white absolute right-2.5 bottom-2.5 hover:bg-white hover:border-2 hover:border-[#FF971D] hover:text-[#FF971D] font-medium rounded-lg text-sm px-4 py-2 my-auto"
						>
							Search
						</button>
					</div>
				</form>
			</div>
			<div className="w-1/2">
				<img src={HERO} alt="Hero" className="w-full" />
			</div>
		</div>
	);
};

export default Hero;

import { Link } from "react-router-dom";

const BookCard = (props) => {
	const book = props.book;

	const truncateString = (str, maxLength) => {
		if (str.length > maxLength) {
			return str.substring(0, maxLength) + "...";
		}
		return str;
	}

	return (
		<div className="mx-4">
			<div key={book.id} className="group relative">
				<Link
					to="/book/5"
					className="flex flex-col items-center rounded-lg  md:flex-row md:w-xl hover:bg-gray-100"
				>
					<div className=" md:-mr-12 z-10 flex items-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
						<img
							className="pr-8 w-full object-cover object-center"
							src={book.imageSrc}
							alt={book.imageAlt}
						/>
					</div>

					<div className="flex flex-col justify-between p-4 pl-12 shadow-2xl leading-normal bg-white">
						<h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-semibold	">
							{book.name}
						</h5>
						<p className="mb-3 font-normal font-mono text-gray-700">
							by {book.author}
						</p>
						<div className="flex items-center mt-2.5 mb-5">
							<span className="flex bg-[#FCE8DA] text-[#ff971d] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
								<svg
									className="w-3 h-3 text-[#ff971d] mr-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 20"
								>
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								{book.votes}
							</span>

							<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
								{book.votes} Ratings
							</span>
						</div>
						<p>{truncateString(book.description,100)}</p>
						<div className="flex justify-center py-4">
							<button className="w-full hover:bg-[#ff971d] text-[#ff971d] font-bold py-2 px-4 border border-solid border-2 border-[#ff971d] hover:text-white hover:border-[#ff971d] rounded">
								View Details
							</button>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default BookCard;

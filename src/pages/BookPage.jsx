import React from "react";
import NavbarOne from "../components/NavbarOne";
import BookCard from "../components/BookCard";

const BookPage = () => {
	const headerStyle = {
		backgroundImage: "url('../src/assets/images/Header.png')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	const book = {
		id: 1,
		name: "My Son's Story",
		description:
			"This engaging chronicle of how the author and the great horned owl 'Bubo'came to know one another over three summers spent in the Maine woods--and of how Bubo eventually grew into an independent hunter--is now available in an edition that has been abridged and revised so as to be more accessible to the general reader.",
		href: "#",
		// imageSrc:
		// 	"https://st-augustine-press-us.imgix.net/covers/9781587319020.jpg?auto=format&w=298&dpr=1&q=20",
		imageSrc:
			"http://books.google.com/books/content?id=aRSIgJlq6JwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		imageAlt: "Front of men's Basic Tee in black.",
		votes: 100,

		price: "$35",
		color: "Black",
	};

	const books = [
		{
			id: 1,
			name: "Basic Tee",
			description:
				"  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim exercitationem quo...",
			href: "#",
			// imageSrc:
			// 	"https://st-augustine-press-us.imgix.net/covers/9781587319020.jpg?auto=format&w=298&dpr=1&q=20",
			imageSrc:
				"http://books.google.com/books/content?id=aRSIgJlq6JwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
			imageAlt: "Front of men's Basic Tee in black.",
			votes: 100,

			price: "$35",
			color: "Black",
		},
		{
			id: 2,
			name: "Basic Tee",
			description:
				"  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim exercitationem quo...",
			href: "#",
			// imageSrc:
			// 	"https://st-augustine-press-us.imgix.net/covers/9781587319020.jpg?auto=format&w=298&dpr=1&q=20",
			imageSrc:
				"http://books.google.com/books/content?id=aRSIgJlq6JwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
			imageAlt: "Front of men's Basic Tee in black.",
			votes: 100,

			price: "$35",
			color: "Black",
		},
		{
			id: 3,
			name: "Basic Tee",
			description:
				"  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim exercitationem quo...",
			href: "#",
			// imageSrc:
			// 	"https://st-augustine-press-us.imgix.net/covers/9781587319020.jpg?auto=format&w=298&dpr=1&q=20",
			imageSrc:
				"http://books.google.com/books/content?id=aRSIgJlq6JwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
			imageAlt: "Front of men's Basic Tee in black.",
			votes: 100,

			price: "$35",
			color: "Black",
		},
		{
			id: 4,
			name: "Basic Tee",
			description:
				"  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim exercitationem quo...",
			href: "#",
			// imageSrc:
			// 	"https://st-augustine-press-us.imgix.net/covers/9781587319020.jpg?auto=format&w=298&dpr=1&q=20",
			imageSrc:
				"http://books.google.com/books/content?id=aRSIgJlq6JwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
			imageAlt: "Front of men's Basic Tee in black.",
			votes: 100,

			price: "$35",
			color: "Black",
		},
	];

	return (
		<div>
			<div className="bg-[#f5f6f8] w-full h-fit">
				<NavbarOne />

				<div className="w-full h-96 bg-no-repeat" style={headerStyle}></div>
				<div className="absolute top-36 w-full">
					<div className="flex w-11/12 mx-auto justify-around">
						<div className="bg-white w-1/2">
							<div className="bg-white w-full flex">
								<div className="w-1/2">
									<img src={book.imageSrc} alt="" className="w-full" />
								</div>
								<div className="flex flex-col justify-center leading-normal bg-white items-center w-1/2 align-center">
									<div className="w-5/6">
										<h1 className="text-3xl font-bold">{book.name}</h1>
										<h1 className="text-md font-bold font-normal font-mono mt-5">
											By Humayun Ahmed
										</h1>
									</div>
									<div className="w-full flex justify-evenly mt-5 mb-5 pr-28">
										<span className="flex bg-[#FCE8DA] text-[#ff971d] text-xs font-semibold px-2.5 py-0.5 rounded">
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

										<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
											{book.votes} Ratings
										</span>
									</div>
								</div>
							</div>
							<div>
								<h2 className="font-medium	text-xl">Description: </h2>
								<p>{book.description}</p>
							</div>
						</div>
						<div className="w-1/3">
							<div className="flex flex-col">
								{books.map((book) => (
									<BookCard key={book.id} book={book} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookPage;

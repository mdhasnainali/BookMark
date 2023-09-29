import React, { useEffect } from "react";
import BookCard from "./BookCard";
import { useAuth } from "../context/AuthContext";

const booksed = [
	{
		id: 1,
		name: "My Son's Story",
		href: "#",
		// imageSrc:
		// 	"https://st-augustine-press-us.imgix.net/covers/9781587319020.jpg?auto=format&w=298&dpr=1&q=20",
		imageSrc:
			"http://books.google.com/books/content?id=aRSIgJlq6JwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		imageAlt: "Front of men's Basic Tee in black.",
		votes: 100,
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim exercitationem quo...",
		price: "$35",
		color: "Black",
	},
	{
		id: 2,
		name: "My Son's Story",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Enim exercitationem quo...",
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
		name: "My Son's Story",
		description:
			"This is a passionate love story; love between a man and two women, between father and son, and something even more demanding- a love of freedom.",
		author: "Nadine Gordimer",
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
		name: "My Son's Story",
		description:
			"This is a passionate love story; love between a man and two women, between father and son, and something even more demanding- a love of freedom.",
		author: "Nadine Gordimer",
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

const Body = (props) => {
	let user = useAuth();
	console.log(user)
	const [books, setBooks] = React.useState([]);
	const [genres, setGenres] = React.useState([
		"All Genres",
		"Business",
		"Design",
		"Development",
		"Finance",
		"Fiction",
		"Health",
		"History",
		"Marketing",
		"Psychology",
		"Science",
		"Self Development",
		"Web Design",
		"Programming",
		"Technology",
	]);

	const [selectedGenre, setSelectedGenre] = React.useState("All Genres");
	const changeGenre = (e) => {
		e.preventDefault();
		const genre = e.target.getAttribute("name");
		setSelectedGenre(genre);
	};

	useEffect((effect) => {
		// console.log(props);
		const url =
			"http://146.190.160.22:8080/api/v1/books?pageSize=8&pageNumber=0";

		fetch(url, {
			// mode: "no-cors",
			method: "GET",
			headers: {
				Authorization: `Bearer ${user.token}`,
				// "Cross-Origin-Opener-Policy": "*",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="md:flex lg:flex bg-[#F5F6F8] pb-5 h-full">
			<div className="w-1/6 h-full ml-4">
				<h2 className="font-bold text-2xl my-2 pl-4">Books by Genre</h2>
				<ul>
					{genres.map((genre, index) => (
						<li
							className={`py-2 pl-4 hover:bg-white hover:text-[#ff971d] hover:rounded  ${
								selectedGenre === genre ? "bg-white text-[#ff971d]" : ""
							}`}
							name={genre}
							onClick={changeGenre}
							key={index}
						>
							{genre}
						</li>
					))}
				</ul>
			</div>
			<div className="w-4/5 sm:w-full">
				<div className="py-4">
					<h2 className="w-full text-center text-2xl font-semibold text-[#ff971d]">
						{selectedGenre} Books
					</h2>
				</div>
				<div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-2 content-center">
					{booksed.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Body;

import React, { useEffect } from "react";
import BookCard from "./BookCard";
import { useAuth } from "../context/AuthContext";

const booksed = [
	{
		id: 1,
		name: "In Parenthesis",
		imageSrc:
			"http://books.google.com/books/content?id=a6fL8VYPXzoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		votes: 100,
		ratings: 4.0,
		description: `This writing has to do with some things I saw, felt, and was part of: with quiet modesty, David Jones begins a work that is among the most powerful imaginative efforts to grapple with the carnage of the First World War, a book celebrated by W.B. Yeats and T.S. Eliot as one of the masterpieces of modern literature. Fusing poetry and prose, gutter talk and high music, wartime terror and ancient myth, Jones, who served as an infantryman on the Western Front, presents a picture at once panoramic and intimate of a world of interminable waiting and unforeseen death. And yet throughout he remains alert to the flashes of humanity that light up the wasteland of war.`,
		author: "David Jones",
	},
	{
		id: 2,
		name: "Levers Of Organization Design",
		description:
			"The design of an organization--the accountability system that defines roles, rights, and responsibilities throughout the firm--has a direct impact on the performance of every employee. Yet, few leaders devote focused attention to how this design is chosen, implemented, and adjusted over time. Robert Simons argues that by viewing design as a powerful and proactive management lever--rather than an inevitable outcome of corporate evolution--leaders can maximize productivity across every level of the organization. Levers of Organization Design presents a new design theory based on four key yet often underrated categories: customer definition, critical performance variables, creative tension, and commitment to mission. Building from these core areas, Simons lays out a step-by-step process leaders can follow to create structures and accountability systems that positively influence how people do their work, where they focus their attention, and how their activities can be aligned to contribute to overall strategic goals. He also introduces four levers of organizational design--unit configuration, diagnostic control systems, interactive networks, and responsibility to others--that leaders can manipulate to improve overall organizational efficiency and effectiveness vastly. For anyone accountable for measuring and managing performance, this book shows how good design can become an organization's roadmap to success. Robert Simons is the Charles M. Williams Professor of Business Administration in the accounting & control area at Harvard Business School.",
		imageSrc:
			"http://books.google.com/books/content?id=bsSkVB7OQJ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		votes: 130,
		ratings: 3.0,
		author: "Robert Simons",
	},
	{
		id: 3,
		name: "Sins of the Brother",
		description:
			"Like the Beaumont children and the Azaria Chamberlain cases before it, the backpacker murder case in Belanglo State Forest has entered Australian criminal folklore. Seven young people, most of them foreigners backpacking around Australia, brutally murdered, their remains uncovered in 1992 and 1993. It would take scores of police over three years, countless hours of forensic investigation, thousands of false leads and a few precious clues to charge and convict Ivan Milat for their horrific deaths. Sins of the Brother is the definitive work on Ivan Milat, his family and the murders. Almost four years in the making, informed by exclusive interviews with members of the Milat family, key police investigators and Crown lawyers, this book reveals a family culture so bizarre it would lead inexorably to murder. It also scrutinises the police investigation-its remarkable success and failures, the dramatic turning point and the backbiting and bitterness that followed Milat's arrest. Thought-provoking, totally unsalacious, an exploration of the darker side of Australian life as a whole, Sins of the Brother is a detailed and gripping read-a psychological thriller come to life.",
		imageSrc:
			"http://books.google.com/books/content?id=acfCYGPaqCoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		votes: 114,
		ratings: 4.0,
		author: "Les Kennedy and Mark Whittaker",
	},
	{
		id: 4,
		name: "The Loving Man",
		description: `Steve Harvey, the host of the nationally syndicated Steve Harvey Morning Show, can't count the number of impressive women he's met over the years, whether it's through the ""Strawberry Letters"" segment of his program or while on tour for his comedy shows. Yet when it comes to relationships, they can't figure out what makes men tick. Why? According to Steve it's because they're asking other women for advice when no one but another man can tell them how to find and keep a man. In Act Like a Lady, Think Like a Man, Steve lets women inside the mindset of a man and sheds light on concepts and questions such as: The Ninety Day Rule: Ford requires it of its employees. Should you require it of your man? The five questions every woman should ask a man to determine how serious he is. And much more . . . Sometimes funny, sometimes direct, but always truthful, Act Like a Lady, Think Like a Man is a book you must read if you want to understand how men think when it comes to relationships.`,
		imageSrc:
			"http://books.google.com/books/content?id=DJFxdhNc49IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		votes: 212,
		ratings: 3.0,
		author: "Steve Harvey",
	},
];

const Body = () => {
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

	useEffect(
		(effect) => {
			// console.log(props);
			const url =
				"http://146.190.160.22:8080/api/v1/books?pageSize=8&pageNumber=0";

			fetch(url, {
				// mode: "no-cors",
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
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
		},
		[user]
	);

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

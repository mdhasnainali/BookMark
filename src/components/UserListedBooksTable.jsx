import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";


const UserListedBooksTable = () => {
	let user = useAuth();

	const [listedBooks, setListedBooks] = useState([]);

	const fetchListedBooks = async () => {
		const url = `http://146.190.160.22:8080/api/v1//userBook/${user.user?.user_id}`;
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.user?.token}`
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setListedBooks(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchListedBooks();
	}, []);


	const [editing, setEditing] = useState(false);
	const [editingNumber, setEditingNumber] = useState(-1);
	const [editedValue, setEditedValue] = useState(
		{title: "",
		description: "",
		image: "",
		publisher: "",
		ratingsCount: 0.0,
		quantity: 0,
		categoryId: 0,
		bookAuthors: [],});

	const formSubmitHandler = (event) => {
		event.preventDefault();
		let book = booksInfo;
		const finalAuthors = manageAuthors(booksInfo.bookAuthors);
		book.bookAuthors = finalAuthors;
		setBooksInfo(book);
		console.log(booksInfo);
		addNewBook();
	};

	const manageAuthors = (authors) => {
		const authorList = authors.split(",");
		console.log(authorList);
		const finalAuthors = [];
		for (let i = 0; i < authorList.length; i++) {
			authorList[i] = authorList[i].trim();
			finalAuthors.push({ author_name: authorList[i] });
		}
		console.log(finalAuthors);
		return finalAuthors;
	};

	const addNewBook = async () => {
		const url = "http://146.190.160.22:8080/api/v1/books/add-new-book";
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.user?.token}`,
			},
			body: JSON.stringify(booksInfo),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				alert("Book Added Successfully");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	
	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
			<div className="flex justify-between w-full px-4">
				<h4 className="mb-6 text-xl font-semibold text-black">Listed Books</h4>
				<button className="bg-green-500 font-semibold rounded-md px-4 text-center text-white">
					Add New Book
				</button>
			</div>

			<div className="flex flex-col divide-y divide-solid">
				<div className="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-7">
					<div className="p-2.5 xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Book Name
						</h5>
					</div>
					<div className="p-2.5 text-center xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Authors
						</h5>
					</div>
					<div className="p-2.5 text-center xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Publishers
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Category
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Description
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Image
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Status
						</h5>
					</div>
				</div>
				{/* {editing == true && editingNumber == book.category_id ? (k):(l)} */}
				<div className="grid grid-cols-3 sm:grid-cols-7">
					<div className="flex items-center gap-3 p-2.5 xl:p-5">
						<p className="hidden text-black sm:block">English Grammar</p>
					</div>

					<div className="flex items-center justify-center p-2.5 xl:p-5">
						<p className="text-black">A</p>
					</div>

					<div className="flex items-center justify-center p-2.5 xl:p-5">
						<p className="text-meta-3">A</p>
					</div>

					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<p className="text-black">B</p>
					</div>

					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<p className="text-meta-5">C</p>
					</div>
					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<div className="justify-center">
							<button className="w-full bg-blue-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
								Preview
							</button>
						</div>
					</div>
					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<div className="justify-center">
							<button className="w-full bg-green-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
								Edit
							</button>
							<br />
							<button className="w-full bg-red-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserListedBooksTable;

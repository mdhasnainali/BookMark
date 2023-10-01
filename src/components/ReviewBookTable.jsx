import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";


const ReviewBookTable = () => {
	let user = useAuth();
	
	const [requestedBooks, setRequestedBooks] = useState([]);

	const redirect = (url) => {
		location.href = url;
	};

	const fetchRequestedBooks = async () => {
		const url = "http://146.190.160.22:8080/api/v1/admin/books/pending";
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${user.user?.token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setRequestedBooks(data);
				console.log(requestedBooks);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchRequestedBooks();
	}, []);

	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
			<h4 className="mb-6 text-xl font-semibold text-black">
				Review Book Requests
			</h4>

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
				{
					requestedBooks?.map((book,index) =>{
						return (
							<div className="grid grid-cols-3 sm:grid-cols-7" key={index}>
								<div className="flex items-center gap-3 p-2.5 xl:p-5">
									<p className="hidden text-black sm:block">{book.title}</p>
								</div>

								<div className="flex items-center justify-center p-2.5 xl:p-5">
									<p className="text-black">Author</p>
								</div>

								<div className="flex items-center justify-center p-2.5 xl:p-5">
									<p className="text-meta-3">{book.publisher}</p>
								</div>

								<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
									<p className="text-black">{book.description}</p>
								</div>

								<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
									<p className="text-meta-5">{book.description}</p>
								</div>
								<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
									<div className="justify-center">
										<a
											className="w-full bg-blue-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white"
											href={book.image}
											target="_blank"
										>
											Preview
										</a>
									</div>
								</div>
								<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
									<div className="justify-center">
										<button className="w-full bg-green-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
											Accept
										</button>
										<br />
										<button className="w-full bg-red-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
											Reject
										</button>
									</div>
								</div>
							</div>
						);
				})
			}
			</div>
		</div>
	);
};

export default ReviewBookTable;
